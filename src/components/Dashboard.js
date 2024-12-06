import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:5000/api/files", {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((response) => setFiles(response.data))
                .catch((error) => console.error("Error fetching files:", error));
        } else {
            alert("You must be logged in to view this page.");
        }
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>
            <ul>
                {files.map((file) => (
                    <li key={file.id}>
                        <a href={`http://localhost:5000/${file.file_path}`} download>
                            {file.filename}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
