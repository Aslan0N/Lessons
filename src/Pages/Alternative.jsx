import React, { useState } from "react";
// import img from '../../public/Images/download.png'

const Alternative = () => {
  const userName = {
    user: "Aslan",
    mail: "thenzrv@gmail.com",
    tel: "12345678",
    password: "12345",
    pass: "12345",
  };

  const [user, setUser] = useState({
    user: "",
    mail: "",
    tel: "",
    password: "",
    pass: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [animation, setAnimation] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
    if (userName.user == user.user ) {
        setAnimation(false);
      } else if(userName.user !== user.user ) {
        setAnimation(true);
      }
  };


//   const attempt = () => {
//     if (userName.user == user.user ) {
//       setAnimation(true);
//     } else {
//       setAnimation(false);
//     }
//   };
//   console.log(animation);
  
  return (
    <>
      <section id="alternative">
        <div className="container">
          <div className="left">
            <div className="zg-icon"></div>
            <div className="item">
              <h6>Create Account</h6>
              <form onSubmit={submitForm}>
                <label htmlFor="">
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                  <p>Full name*</p>
                </label>
                <label htmlFor="">
                  <input
                    type="email"
                    name="mail"
                    required
                    onChange={handleChange}
                  />
                  <p className="mail">Work email*</p>
                </label>
                <label htmlFor="">
                  <input
                    type="tel"
                    name="tel"
                    required
                    onChange={handleChange}
                  />
                  <p className="tel">Phone Number*</p>
                </label>
                <label htmlFor="">
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                  <p className="pass1">Password*</p>
                </label>
                <label htmlFor="">
                  <input
                    type="password"
                    name="pass"
                    required
                    onChange={handleChange}
                  />
                  <p className="pass2">Confirm password</p>
                </label>
                <div className="check-con">
                  <input type="checkbox" />
                  <p>
                    I agree to the <span>Terms</span> of{" "}
                    <span>Service and Privacy Policy</span>
                  </p>
                </div>
                <button>Create</button>
              </form>
              <div className="or">Or</div>
              <div className="logo">
                <div className="google"></div>
                Sign up with Google
              </div>
              <p className="end">
                Already a member? <span>Login</span>
              </p>
            </div>
          </div>

          <div className="right">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            
              <div className={animation? "item" : "no1"} >
                <div className="img"></div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alternative;
