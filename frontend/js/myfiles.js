const API = "http://localhost:3000/api";

async function loadMyFiles() {
  const response = await fetch(`${API}/my-files`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  });

  const files = await response.json();

  const table = document.getElementById("tableBody");

  files.forEach(file => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${file.filename}</td>
      <td>${(file.size/1024/1024).toFixed(2)} MB</td>
      <td><a href="${API}/files/${file._id}/download">Download</a></td>
      <td><a href="${API}/files/${file._id}/share">Share Link</a></td>
      <td><button onclick="deleteFile('${file._id}')">Delete</button></td>
    `;
    table.appendChild(row);
  });
}

async function deleteFile(id) {
  const response = await fetch(`${API}/files/${id}`, {
    method: "DELETE",
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  });

  const result = await response.json();
  alert(result.message);
  location.reload();
}

loadMyFiles();
