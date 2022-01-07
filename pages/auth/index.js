import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import CONFIG from '../../src/services/CONFIG';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Swal from 'sweetalert2';

export default function login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    async function submitLogin(e){
        e.preventDefault()
        const res = await fetch(`${CONFIG.BASE_URL}/login`, {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        if(res.status==200){
            const data = await res.json()
            Cookies.set("Token", data.token, {expires: 0.5})
            Router.push('/')
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong password!',
              })
        }

    }

    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <div>
            <img
            className="mx-auto h-12 w-auto"
            src="/Neo-people-logo.png"
            alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Register a new account
            </a>
            </p> */}
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e)=>{
            submitLogin(e)
        }}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="email-address" className="sr-only">
                Email address
                </label>
                <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e)=>{
                    setUser({
                        ...user,
                        email: e.target.value 
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">
                Password
                </label>
                <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e)=>{
                    setUser({
                        ...user,
                        password: e.target.value 
                    })
                }}
                />
            </div>
            </div>

            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
                </label>
            </div>

            <div className="text-sm">
                <a href="" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
                </a>
            </div>
            </div>

            <div>
            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-yellow-600 group-hover:text-yellow-400" aria-hidden="true" />
                </span>
                Sign in
            </button>
            </div>
        </form>
        </div>
        </div>
    )
}

