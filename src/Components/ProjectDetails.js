// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projectDetails, setProjectDetails] = useState({});
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`/my-project/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                });
                console.log(response)
                if (response.data && response.data.data) {
                    setProjectDetails(response.data.data);
                } else {
                    console.error("API response does not contain project details:", response.data);
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        fetchProjectDetails();
    }, [id, token]);

    return (

        <div className="container mt-4">
            <h3 className="text-center" style={{ color: "#7e7575" }}>Project Details</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{projectDetails.name}</h5>
                    <p className="card-text"><span style={{ fontSize: "18px", fontWeight: "bolder" }}>Project ID:</span>  <span style={{ fontSize: "18px", fontWeight: "bolder", color: "red" }}>{projectDetails.id}</span></p>
                    <p className="card-text"><span style={{ fontSize: "18px", fontWeight: "bolder" }}>Status :</span> <span style={{ fontSize: "18px", fontWeight: "bolder", color: "green" }}>{projectDetails.status}</span> </p>
                    <p className="card-text"> <span style={{ fontSize: "18px", fontWeight: "bolder" }}>Task_Description:</span>  {projectDetails.task_description}</p>

                    {/* Add more details as needed */}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
