import './App.css';
import Login from './Components/Login';
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from './Header';
import Dashboard from './Components/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Components/Error';
import MyProjects from './Components/MyProjects';
import { useContext } from 'react';
import { LoginContext } from './Components/ContextProvider/Context';
import ProjectDetails from './Components/ProjectDetails';
import ResetPassword from './Components/ResetPassword';

function App() {
  const { logindata, setLoginData } = useContext(LoginContext);
  let token = localStorage.getItem("token")

  return (
    <>
      {
        token ? <Header /> : ""
      }

      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/my-assigned-projects" element={<MyProjects />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route path="/error" element={<Error />} />
      </Routes>


    </>
  );
}

export default App;
