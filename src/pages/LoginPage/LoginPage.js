import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/color";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import ASSETS from "../../Assets";
import { BiRepeat } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../firebase";
import { ref, set } from "firebase/database";

function LoginPage() {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("login");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (email == "" || password == "") alert("Please fill out the fields");
      else {
        setButtonText("Please Wait...");
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setButtonText("login");
        if (response.user.uid) {
          navigate("/")
        }
      }
    } catch (err) {
      setButtonText("login");
      setEmail("");
      setPassword("");
      alert(err);
    }
  };

  return (
    <div
      className="loginPageBaseContainer"
      style={{
        backgroundImage: `url(${ASSETS.loginPageImager})`,
      }}
    >
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Fitness Tracker</h1>
          <h4>{`Welcome  ${email}`}</h4>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            inputValue={password}
            onChangeText={(e) => setPassword(e.target.value)}
            isSecureEntry={true}
          />
        </div>
        <div className="loginPageContentButtonContaier">
          <button onClick={handleLogin}>Login </button>{" "}
        </div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}
export default LoginPage;
