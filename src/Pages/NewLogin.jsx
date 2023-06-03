import React, { useState } from 'react'

const NewLogin = () => {

    const [page, setPage]= useState(false)

    const changePage = ()=>{
        setPage((value)=> !value)
    }

    const [login, setLogin] = useState({
        username:'',
        password:'',
    })
    const source = {
        username:'Aslan Nazar',
        password:'12345',
    }

    const handleChange = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }
    const [success, setSuccess] = useState(false)
    const submitForm = (e) =>{
        e.preventDefault()
        if(source.name == login.name && source.password == login.password){
            console.log(login)  
            setSuccess(true)
        }else{
            changePage()
        }
        setLogin({})

    }
    const [eye, setEye] = useState(false)
    const changeLock = ()=>{
        setEye((lock)=> !lock)
    }
    


  return (
    <>
        <section id='new'>
        <div className="main-container">
        <div className='fa-solid fa-pen' onClick={changePage} style={{backgroundColor:`${page ? "white" : "red"}`, color:`${page ? "red" : "white"}`}}></div>
            <div className="login-top">
                <h3>LOGIN</h3>
                {
                    success ?
                    <div className="suc-card">
                    <i className="fa-solid fa-check"></i>
                    <h5>Welcome <span>{source.username}</span></h5>
                </div> :
                <form onSubmit={submitForm}>
                    <label htmlFor="">
                        <input type="text" name='username' onChange={handleChange} required />
                        <span>Username</span>
                    </label>
                    <label htmlFor="">
                        <input type={eye?"text":"password"} name='password' onChange={handleChange} required />
                        <span>Password</span>
                        <i className={eye ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={changeLock}></i>
                    </label>
                    <button>GO</button>
                </form>
                }
                
                <p>Forgot your password?</p>
            </div>
        </div>
        <div className={page ? "next-login animated" : "next-login"}   >
            <div className="item">
            <h4>REGISTER</h4>
            <form>
                <label>
                    <input type="text" required />
                    <span>Username</span>
                </label>
                <label>
                    <input type="text" required />
                    <span>Password</span>
                </label>
                <label>
                    <input type="text" required />
                    <span>Repeat Password</span>
                </label>
            </form>
            <button>NEXT</button>
            </div>
        </div>
        </section>
        
        
    </>
  )
}

export default NewLogin