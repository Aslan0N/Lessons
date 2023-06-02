import React, { useState } from 'react'

const NewLogin = () => {

    const [page, setPage]= useState(false)

    const changePage = ()=>{
        setPage((value)=> !value)
    }

  return (
    <>
        <section id='new'>
        <div className="main-container">
        <div className='fa-solid fa-pen' onClick={changePage} style={{backgroundColor:`${page ? "white" : "red"}`, color:`${page ? "red" : "white"}`}}></div>
            <div className="login-top">
                <h3>LOGIN</h3>
                <form>
                    <label htmlFor="">
                        <input type="text" required />
                        <span>Username</span>
                    </label>
                    <label htmlFor="">
                        <input type="password" required />
                        <span>Password</span>
                    </label>
                </form>
                    <button>GO</button>
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