// import React from 'react'
// import { useState } from 'react';
// import {useNavigate} from 'react-router-dom'
// export default function Login() {

//   const [credentials, setcredentials] = useState({ useremail: "", userpwd: "" })
//   let navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response =await fetch("http://localhost:5550/api/loginUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ useremail: credentials.useremail,userpwd: credentials.userpwd })
//     });
//     const resjson = await  response.json()
//         console.log(resjson);

//     if (resjson.success) {
//       localStorage.setItem("userEmail",credentials.useremail);
//       localStorage.setItem("authToken",resjson.authToken);
//       console.log(localStorage.getItem("authToken"));
//       navigate("/");
//     }else
//     alert("enter valid credentials");
//   }


//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value })
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input name='useremail' value={credentials.useremail} type='email' placeholder='enter email...' onChange={onChange} />
//           <label>Password</label>
//           <input name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
//           <a href='/createUser'>New user!Register here</a>
//           <button type="submit">Login</button>
         
//         </form>
//       </div>

//     </>
//   )
// }
import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom'
import "./Login.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Login() {

  const [credentials, setcredentials] = useState({ useremail: "", userpwd: "" })
  let navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5550/api/loginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ useremail: credentials.useremail, userpwd: credentials.userpwd })
    });
    const resjson = await response.json()
    console.log(resjson);

    if (!resjson.success) {
      alert("enter valid credentials")
    }
    if (resjson.success) {
      localStorage.setItem("userEmail",credentials.useremail)
      localStorage.setItem("authToken",resjson.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");

    }

    

  }


  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
    <div><Navbar/></div>
      <div className='body m-3'>
        <div className='container d-flex  justify-content-center '>
          <form className='form-control w-50 m-5 ' onSubmit={handleSubmit}>

            <div className="input-box mb-3">
              <label htmlFor="labelEmail" className="form-label">Email address</label>
              <input type="email" required className="form-control" id="labelEmail" aria-describedby="emailHelp" name='useremail' value={credentials.useremail} placeholder='enter email...' onChange={onChange} />
              
              <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="input-box mb-3">
              <label htmlFor="labelPassword" className="form-label">Password</label>
              <input className="form-control" required id="labelPassword" name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
              
            </div>
            <div className='text-center'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            
            <div className='register-link text-center'>
              <a>I am a new User</a>
              <Link to="/createUser" className='m-3'>Register</Link>
            </div>
            
          </form>
        </div>
      </div>
    <div><Footer/></div>
    </>
  )
}