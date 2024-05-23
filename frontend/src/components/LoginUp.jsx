/*NUEVO CODIGO*/

import React, {useState, useEffect} from "react";
import { auth } from "./firebase/firebaseContext/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import '../LogSig.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/authContext";
import { useContext } from "react";

const LoginUP = () => {

  const [error, setError] = useState(false); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrando, setIsRegistrando] = useState(false);
  const [usuario, setUsuario] = useState(null);
  
  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const crearUsuario = (auth, email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("usuario creado:", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });  
  };

  const iniciarSesion = (auth, email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Sesión iniciada con:", user);
        dispatch({type: "LOGIN", payload: user});
        navigate("/admin")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.error("Error iniciando sesión:", error);
        // ..
      });  
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(auth, email, password);
    }

    if (!isRegistrando) {
      iniciarSesion(auth, email, password);
    }
  };

  /*useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        navigate("/admin");
      } else {
        setUsuario(null);
      }
    });
    return () => unsubscribe();
  }, [navigate]);*/
  
   /* useEffect(() => {
      app.auth().onAuthStateChanged((usuarioFirebase) => {
        console.log("ya tienes sesión iniciada con:", usuarioFirebase);
        setUsuario(usuarioFirebase);
      });
    }, []);*/

  return (
        <div className="logSig">
        <div class="container">  
          <div class="form-container sign-up-container">
            <form onSubmit={submitHandler}>
              <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
              <label htmlFor="emailField" > Correo </label>
              <input type="email" id="emailField" placeholder="email"/>
              <label htmlFor="passwordField"> Contraseña </label>
              <input type="password" id="passwordField" placeholder="contraseña"  />
              <button type="submit" className="LogSig-button">
                {" "}
                {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
              </button>
              {error && <span>email o contraseña incorrectos</span>}
              <div>
                <button onClick={() => setIsRegistrando(!isRegistrando)} className="LogSig-button-second">
                  {isRegistrando
                    ? "¿Ya tienes cuenta? ¡Inicia sesión"
                    : "¿No tienes cuenta? ¡Regístrate gratis!"}
                </button>
              </div>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-right">
                <div>
                  <h1>Bienvenido</h1>
                </div>
                <p>GolMin</p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default LoginUP;

/*
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
*/