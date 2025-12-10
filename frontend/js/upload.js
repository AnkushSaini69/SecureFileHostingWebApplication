const API = "http://localhost:3000/api";
checkAuth();

async function uploadFile() {
    const file = document.getElementById("fileInput").files[0];
    const privacy = document.getElementById("privacy").value;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("privacy", privacy);

    const response = await fetch(`${API}/upload`, {
        method: "POST",
        headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
        body: formData
    });

    const result = await response.json();
    alert(result.message);
}
