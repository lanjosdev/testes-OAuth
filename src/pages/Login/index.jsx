// Funcionalidades / Libs:
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

// Assets:
import google from '../../assets/google-logo.svg'
import facebook from '../../assets/facebook-novo.svg'

// Estilo:
import './login.scss';


export default function Login() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse)=> {
      // console.log(tokenResponse.access_token);
      if(tokenResponse.access_token) {
        navigate('/private');
      }
    }
  });
  

//   useEffect(()=> {
   
//   }, []);
  

  return (
    <main className="Container">
        <div className="grid">
            <h1>Tela de Login</h1>

            <div className="buttons">
              
              {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              /> */}
              <button className="google" onClick={login}><img src={google} alt="" />Entrar com o Google</button>
              <button className="face"><img src={facebook} alt="" />Entrar com o Facebook</button>
            </div>

            
        </div>
    </main>
  )
}