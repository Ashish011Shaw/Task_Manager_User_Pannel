// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const history = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const token = localStorage.getItem('token');

    const handleResetPassword = async () => {
        try {
            const response = await axios.post(
                '/user/reset-password',
                {
                    oldPassword,
                    newPassword,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
                setOldPassword("");
                setNewPassword("");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center" style={{ color: '#7e7575' }}>
                Reset Password
            </h3>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="oldPassword" className="form-label">
                                Old Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="oldPassword"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleResetPassword}
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ResetPassword;
