import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./Images/logo.png"

const Header = () => {
    const navigate = useNavigate();
    // logout 
    const logout = async () => {
        localStorage.removeItem('token');

        await new Promise(resolve => setTimeout(resolve, 100));
        navigate("/");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt='Logo' />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">


                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/my-assigned-projects">
                                    Projects
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/reset-password">
                                    Reset Password
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/profile">
                                    My Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={logout}>
                                    Logout
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header