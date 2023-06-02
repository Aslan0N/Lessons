import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lang from "../Data/Language.json";

const Login = () => {
  const info = {
    name: "Aslan",
    email: "thenzrv@gmail.com",
    password: "123456",
  };

  const [lock, setLock] = useState(true);

  const opposite = () => {
    setLock((variable) => !variable);
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [test, setTest] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    if (user !== "") {
      if (
        user.name === info.name &&
        user.email === info.email &&
        user.password === info.password
      ) {
        setTest(false);
      } else {
        setTest(true);
      }
    }
  };

  const showToastMessage = () => {
    if (!test) {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (test) {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const [content, setContent] = useState({});
  const [language, setLanguage] = useState("English(UK)");

  
  // const langValue = (e) =>{
  //   localStorage.setItem("Lang",` ${e.target.value}`)
  // }

  useEffect(() => {
    if (language == "English(UK)") {
      setContent(Lang.en);
      localStorage.setItem("Lang", "en");
    } else if (language == "AZ") {
      setContent(Lang.az);
      localStorage.setItem("Lang", "az");
      
    } else if (language == "TR") {
      setContent(Lang.tr);
      localStorage.setItem("Lang", "tr");
    } else if (language === "ES") {
      setContent(Lang.es);
      localStorage.setItem("Lang", "es");
    }
    
    // if(localItem == "en") {
    //   setContent(Lang.en);
    // }else if (localItem == "az") {
    //   setContent(Lang.az);
    // }else if (localItem == "tr") {
    //   setContent(Lang.tr);
    // }if (localItem == "es") {
    //   setContent(Lang.es);
    // }
  });

  

  return (
    <>
      <section id="login">
        <div className="login-container">
          <div className="language">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option>English(UK)</option>
              <option>AZ</option>
              <option>TR</option>
              <option>ES</option>
            </select>
          </div>
          <div className="login-left">
            <div className="bg-logo"></div>
            <p>{content.p}</p>
            <div className="bg-img"></div>
            <div className="circle"></div>
            <div className="triangle"></div>
          </div>
          <div className="login-right">
            <div className="vector"></div>
            <div className="item">
              <h4>{content.h4}</h4>

              <div className="i-con">
                <div className="logo">
                  <i className="google"></i>
                  <span>{content.google}</span>
                </div>
                <div className="logo">
                  <i className="fa-brands fa-facebook"></i>
                  <span>{content.facebook}</span>
                </div>
              </div>
              <span className="or">- {content.or} -</span>
              <form onSubmit={submitForm}>
                <label htmlFor="">
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                  <p>{content.name}</p>
                </label>
                <label htmlFor="">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  <p>{content.email}</p>
                </label>
                <label htmlFor="">
                  <input
                    type={lock ? "password" : "text"}
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  <p>{content.password}</p>
                  <i
                    className={
                      lock ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                    }
                    onClick={opposite}
                  ></i>
                </label>
                <button onClick={showToastMessage}>{content.btn}</button>
                <ToastContainer />
              </form>
              <p>
                {content.end} <span>{content.span} </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
