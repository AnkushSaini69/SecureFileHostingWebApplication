import File from "../models/File.js";
import fs from "fs";

export const uploadFile = async (req, res) => {
  try {
    const privacy = req.body.privacy;
    const file = req.file;

    if (!file)
      return res.status(400).json({ message: "No file uploaded" });

    if (!["public", "private"].includes(privacy))
      return res.status(400).json({ message: "Invalid privacy value" });

    // multer already limited size, but we can double-check:
    // allowed formats: pdf, mp4
    const allowed = ["application/pdf", "video/mp4"];
    if (!allowed.includes(file.mimetype)) {
      fs.unlinkSync(file.path); // delete invalid file
      return res.status(400).json({ message: "Only .pdf and .mp4 allowed" });
    }

    await File.create({
      filename: file.originalname,
      path: file.path,
      size: file.size,
      privacy,
      uploaded_by: req.user
    });

    res.json({ message: "File uploaded successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

export const getMyFiles = async (req, res) => {
  const files = await File.find({ uploaded_by: req.user });
  res.json(files);
};

export const getPublicFiles = async (req, res) => {
  const files = await File.find({ privacy: "public" });
  res.json(files);
};

export const downloadFile = async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) return res.status(404).json({ message: "File not found" });

  return res.download(file.path);
};

export const deleteFile = async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) return res.status(404).json({ message: "File not found" });

  if (file.uploaded_by.toString() !== req.user)
    return res.status(403).json({ message: "Not allowed to delete this file" });

  fs.unlinkSync(file.path);
  await File.deleteOne({ _id: file._id });

  res.json({ message: "File deleted" });
};

// For private files share link (no auth)
export const shareFile = async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) return res.status(404).json({ message: "File not found" });

  return res.download(file.path);
};
