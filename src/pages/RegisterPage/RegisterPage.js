import { createUserWithEmailAndPassword } from "firebase/auth";
import  CustomButton from "../../components/CustomButton/CustomButton";  
import React , { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from"../../config/color";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import ASSETS from "../../Assets";
import {auth, database} from"../../firebase";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

function RegisterPage() {
  const [name, setName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const [buttonText, setButtonText]= useState("Register");
  const navigate= useNavigate();

  const saveUserDetails = (data) => {
    set(ref(database, `users/${data.uid}`),data);
    navigate("/login");
  };

  const handleRegister = async () => {
    try {
      if (name == "" || email == "" || password == "" || confirmPassword =="") {
        alert("please fill out the fields");
      } else if (password!= confirmPassword) {
        alert("Password does not match");
      } else {
        setButtonText("Please Wait...");
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          confirmPassword
        );
        setButtonText("Register");
        if (response.user.uid){
          const userData = {
            uid: response.user.uid,
            email: response.user.email,
            name: name,
          };
          saveUserDetails(userData);
        } else {
          alert("Failed to register");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      }
    } catch (err) {
      setButtonText("Register");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(err);
      }
    };
         return (
        
     <div className="RegisterPageBaseContainer"
      style={{
      backgroundImage: `url(${ASSETS.registerPageImage})`,
      }}>
      <div className="RegisterPageContentBaseContainer">
        <div className="RegisterPageContentTitleContainer">
          <h1>Create your Account</h1>
          <h4>RegisterPage</h4>
        </div>
        <div className="RegisterPageContentInputContainer">
          <CustomInput
          type="name"
          placeholder={"Name"}
          inputValue={name}
          onChangeText={(e) => {
            setName(e.target.value);
          }}
          />

          <CustomInput
          type="email"
          placeholder={"Email"}
          inputValue={email}
          Icon={FaUserAlt}
          onChangeText={(e) => {
            setEmail(e.target.value);
          } }
          />
          <CustomInput
          type="password"
          placeholder={"Enter Password"}
          Icon={FaKey}
          isSecureEntry={true}
          onChangeText={(e) => {
            setPassword(e.target.value);
          } }
  
          />
        <CustomInput
        type="confirm password"
        placeholder={"Confirm Password"}
        Icon={FaKey}
        isSecureEntry={true}
        onChangeText={(e) => {
          setConfirmPassword(e.target.value);
        } }

        />
        <div className="RegisterPageContentButtonContainer">
          <button onClick={handleRegister}>Register</button>
        </div>
        <div className="RegisterPageContentRegisterContainer"></div>
      </div>
    </div>
    </div>
  );
}

export default RegisterPage

