import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e,email,password) => {
        e.preventDefault();
        const auth = getAuth();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          const user = userCredential.user;
          alert('Registered successfully!')
          setName('');
          setEmail('');
          setPassword('');
          navigate('/sign-in');
        }
        catch (error) {
          console.log(error.code);
          console.log(error.message);
          alert('Failed to Sign Up :(');
        }
    }

    
  return (
    <div className="register flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6">

          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input value={name} onChange={(e)=>setName(e.target.value)} id="name" name="name" type="name" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button onClick={(e)=>handleRegister(e,email,password)} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <NavLink to='/sign-in'><p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</p></NavLink>
          </p>

        </div>

      </div>
  )
}

export default SignUp
