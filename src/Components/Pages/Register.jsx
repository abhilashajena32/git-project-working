import React from 'react'

const Register = () => {
    return(
        <div className='form template d-flex justify-content-center align-items-center  w-100 vh-100 mt-4 bg-primary'>
  
    
    <div className="form bg-white 100-w p-5  rounded mb-4">
        <h2 className='mb-4 text-center' >Registration  </h2>
        <form className='form-data' >
            <div className='mb-2'>
                <label htmlFor="email">Email :</label>
                <input  className='form-control'  type="email" placeholder='enter email'   />
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password :</label>
                <input className='form-control' type="password" placeholder='enter password' />
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='form-chekck-input'  />
                <label htmlFor="checkbox" className='custom-input-label'>Remember me</label>
       
            </div>
            <div className=' d-grid '>
                <button className='btn btn-primary'> submit</button>
            
            </div>
            <div>
                <p>Forget <a href="*">password</a> ?<a href="*">sign up</a></p>
            </div>


        </form>
    </div>
    </div>

  )
}

export default Register