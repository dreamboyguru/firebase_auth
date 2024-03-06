import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { FaGithub} from "react-icons/fa";

const Login = () => {
  const [error] = useState("");
  const {googleSignIn, githubSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
      // console.log(Response)
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlegithubSignIn = async (e)=>{
    e.preventDefault();
    try{
      await githubSignIn();
      navigate("/home")
    }
    catch(error)
    {
      console.log(error.message);
    }
  };
 

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <br/>
        <div className="">
          <button type="button" 
            className="f-btn"  
            onClick={handlegithubSignIn}
          >
              <span className="fb-logo"><FaGithub /></span>
          Sign In With Github
          </button>
        </div>
        <br/>
        
      </div>
    </>
  );
};

export default Login;