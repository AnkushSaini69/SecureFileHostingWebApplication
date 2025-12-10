import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";
import {
  uploadFile,
  getMyFiles,
  getPublicFiles,
  downloadFile,
  deleteFile,
  shareFile
} from "../controllers/fileController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 20 * 1024 * 1024 } // 20 MB
});

router.post("/upload", auth, upload.single("file"), uploadFile);
router.get("/my-files", auth, getMyFiles);
router.get("/public-files", getPublicFiles);
router.get("/files/:id/download", downloadFile);
router.get("/files/:id/share", shareFile);
router.delete("/files/:id", auth, deleteFile);

export default router;
