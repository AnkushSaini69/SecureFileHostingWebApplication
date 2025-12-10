const API = "http://localhost:3000/api";

async function loadPublicFiles() {
  const response = await fetch(`${API}/public-files`);
  const files = await response.json();

  const table = document.getElementById("publicTable");

  files.forEach(file => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${file.filename}</td>
      <td>${(file.size/1024/1024).toFixed(2)} MB</td>
      <td><a href="${API}/files/${file._id}/download">Download</a></td>
    `;
    table.appendChild(row);
  });
}

loadPublicFiles();
