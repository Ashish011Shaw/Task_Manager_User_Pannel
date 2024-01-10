import { React, useContext, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Man from "../Images/Man.png"
import { LoginContext } from './ContextProvider/Context';

const Dashboard = () => {
    const navigate = useNavigate();
    const { logindata, setLoginData } = useContext(LoginContext);
    // console.log(logindata)
    // vaidate admin 
    const dashValid = async () => {
        let token = localStorage.getItem("token");

        const resp = await axios.get("/my-profile", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        console.log(resp.data);

        if (resp.data.status === 200) {
            setLoginData(resp.data.data)
            // console.log(logindata)
        } else {
            navigate("/error");
        }

    }

    useEffect(() => {
        dashValid();
    }, [])

    return (
        <>
            {
                logindata ?
                    <>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={Man} style={{ width: "200px", marginTop: 20 }} alt="" />
                            <h3 className='mt-4' style={{ color: "#5a5a5a" }}>Name : {logindata.name}</h3>
                            <h3 className='mt-4' style={{ color: "#5a5a5a" }}>User_Name : {logindata.username}</h3>
                            <h3 style={{ color: "#5a5a5a" }}>Email : {logindata.email}</h3>
                            <h3 style={{ color: "#5a5a5a" }}>Mobile : {logindata.mobile}</h3>
                            <h3 style={{ color: "#5a5a5a" }}>Gender : {logindata.gender}</h3>
                            {/* <h3 style={{ color: "#5a5a5a" }}>My_Admin_Id : {logindata.admin_id}</h3> */}
                        </div>
                    </>
                    :
                    <></>
            }
        </>
    )
}

export default Dashboard