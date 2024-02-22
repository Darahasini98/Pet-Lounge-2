// import React, { useState } from 'react'

// export default function Register() {

//   const [credentials, setcredentials] = useState({ username: "", useremail: "", usermobile: 0, userpwd: "" })

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response =await fetch("http://localhost:5550/api/createUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username: credentials.username, useremail: credentials.useremail, usermobile: credentials.usermobile, userpwd: credentials.userpwd })
//     });
//     const resjson = await  response.json()
//         console.log(resjson);

//     if (!resjson.success) {
//       alert("enter valid credentials")
//     }

//   }


//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value })
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input name='username' value={credentials.username} type='text' placeholder='enter name...' onChange={onChange} />
//           <label>Email</label>
//           <input name='useremail' value={credentials.useremail} type='email' placeholder='enter email...' onChange={onChange} />
//           <label>Mobile No</label>
//           <input name='usermobile' value={credentials.usermobile} type='number' placeholder='enter Mobile No...' onChange={onChange} />

//           <label>Password</label>
//           <input name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
//           <a href='/login'>Already a user</a>
//           <button type="submit">Submit</button>
         
//         </form>
//       </div>

//     </>
//   )
// }
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Register() {

  const [credentials, setcredentials] = useState({ username: "", useremail: "", usermobile: 0, userpwd: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5550/api/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, useremail: credentials.useremail, usermobile: credentials.usermobile, userpwd: credentials.userpwd })
    });
    const resjson = await response.json()
    console.log(resjson);

    if (!resjson.success) {
      alert("enter valid credentials")
    }

  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
    <div><Navbar/></div>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" onSubmit={handleSubmit}>
          <label htmlFor="labelName" className="form-label">Name</label>
          <input name='username' value={credentials.username} type="text" className="form-control" id="labelName" placeholder='enter name...' onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="labelEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="labelEmail" aria-describedby="emailHelp" name='useremail' value={credentials.useremail} placeholder='enter email...' onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="labelNumber" className="form-label">Mobile No</label>
          <input className="form-control" id="labelNumber" name='usermobile' value={credentials.usermobile} type='number' placeholder='enter Mobile No...' onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="labelPassword" className="form-label">Password</label>
          <input className="form-control" id="labelPassword" name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
      </form>
      </div>
     < div> <Footer/></div>
    </>
  )
}