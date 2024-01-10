// MyProject.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';

const MyProject = () => {


    const [projects, setProjects] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("/my-projects", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                });
                if (response.data && Array.isArray(response.data.data)) {
                    setProjects(response.data.data);
                } else {
                    console.error("API response does not contain an array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, [token]);

    return (
        <div className="container mt-4">
            <h3 className="text-center" style={{ color: "#7e7575" }}>My Projects</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Project ID</th>
                        <th scope="col">Project Name</th>
                        <th scope="col">Status</th>
                        {/* <th scope="col">Date of Creation</th> */}
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.task_name}</td>
                            {/* <td>{project.created_at}</td> */}

                            <td>{project.status}</td>
                            <td>
                                <Link to={`/project-details/${project.id}`} className="btn btn-primary btn-sm">
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyProject;
