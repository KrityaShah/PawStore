import React from 'react'
import { useForm  } from "react-hook-form"
import "./Login.css"
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';



const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        
        formState: { errors, isSubmitting },
      } = useForm()


    //   const navigate = useNavigate(); 
      
    //   const {storeTokenInLS} = useAuth();

      const onSubmit = async (data) => {
        try {
          const  response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          
          if (response.ok) {
            let res_data = await response.json();
            // console.log("response from server", res_data);
            // storeTokenInLS(res_data.token);
            
            // navigate("/clienthomepage"); 
            alert("Sucessfull login");
            console.log(res);
          }else{
            alert("Invalid credentail");
            console.log(res)
          }
        } catch (error) {
          console.error(error)
        }
      }

  return (
    <>
    <Navbar/>
    <div className='main-login-container'>
        
    <form action="" onSubmit={handleSubmit(onSubmit)} className='login-form'>
    <h1>LOGIN</h1>
    <input placeholder='Email' {...register("email", { required: {value: true, message: 'Please fill'}, minLength: {value: 3, message : 'Min length is 3'}, maxLength: {value: 20, message : 'Max length is 20' }})} type="text" />
    {errors.email && <div className='error'>{errors.email.message}</div> }
    <input placeholder='Password' {...register("password", { required: {value: true, message:'Please fill'}, minLength: 8, maxLength:15 })} type="password"  />
    {errors.password && <div className='error'>{errors.password.message}</div> }
    <input disabled={isSubmitting} type="submit" value="submit" />
    <p>Don't have a account? <Link  to="/signup" className="nav-link"><span>Register Now</span></Link> </p>
    </form>
    </div>
    </>
  )
}

export default Login
