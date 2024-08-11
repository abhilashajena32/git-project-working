import React from 'react';
import {Link} from "react-router-dom"

const Create = () => {
  return (
    <div className='form-container template d-flex justify-content-center align-items-center bg-primary vh-100 '>
    <div className='bg-white w-40 rounded p-5'>
        <form className='form-container needs-validation'>
            <h1 className='text-center'>Create User </h1>
            <div className='mb-2 was-validated '>
                <label htmlFor="firstname">Username:</label>
                <input type="text" placeholder='enter firstname'  className='form-control' required/>

            </div>
         
            <div className='mb-2 was-validated'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='enter email ' className='form-control' required />
            </div>
            <div className='mb-2 was-validated'>
                <label htmlFor="email">Password</label>
                <input type="password" placeholder='password ' className='form-control' required />
            </div>
            <div className='mb-2 '>
                <input type="checkbox" className='form-input'  />
                <label htmlFor="checkbox" className='form-input-label ms-2'>Remember me</label>


            </div>
            <div className='d-grid mt-2'>
                <button className='btn btn-primary'>Create</button>
            </div>
            <div>
                <p>already have an account ? <Link to="/Register" className='ms-2'>sign in</Link></p>
            </div>
          
            
        </form>
    </div>
    </div>
  )
}

export default Create;