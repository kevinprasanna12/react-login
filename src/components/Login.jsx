import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import './login.css'
import { motion } from "framer-motion"


const Login = () => {
    const [update , setupdate] = useState({
        name:'',
        password:''
      });

  return (
    <>
      <form action="">
        <div className="body">
            <motion.div className="container"
            initial={{y:"50%", opacity:0}}
            animate={{y:"0", opacity:1}}
            transition={{duration:.5, delay:.2}}
            >
                <div className="header">
                    <h1>Log in</h1>
                </div>
              
                <div className="inputs">
                    <div className="input">
                        <input 
                        value={update.name}  
                        type="text" 
                        placeholder='Username or email' 
                        required 
                        onChange={e=>{
                          setupdate({
                            name:e.target.value
                          })
                        }
                      }
                      />
                    </div>
                    </div>
                    <div className="input">
                        <input
                        value={update.password} 
                        type="password" 
                        placeholder='Password 4-20' 
                        required 
                        onChange={e => {
                          setupdate({
                            password:e.target.value
                          })
                        }
                      }
                        />
                    </div>
                

                <div className="redirect">
                    <p className='direct-login'>Create new account, <Link to="/signup" type='submit'>Signup</Link> </p>
                    <a href='#' className='direct-login'>forgot password?</a>
                </div>

                <div className="submit-button">
                    <button > Signin</button>
                
                </div>


                <p className='or'>or</p>  

                <div className="social">
                  <a href=""><img src="./icons/icons8-google-48.png" alt="google" /></a>
                  <a href=""><img src="./icons/icons8-linked-in-48.png" alt="linked in" /></a>
                  <a href=""><img src="./icons/icons8-microsoft-48.png" alt="microsoft" /></a>
                </div>

            
              </motion.div>

        </div>
    </form>
  
  {/* <motion.div className='slide'
  initial={{y:"100%"}}
  animate={{y:"-100%",
  display:"none"}}
  transition={{duration:1}}
  />                    */}
                   

  </>
  )
}

export default Login
