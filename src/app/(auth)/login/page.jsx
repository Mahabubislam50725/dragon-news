"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Loginpage = () => {

    const {register, handleSubmit,formState:{errors}} = useForm();

    const handelLoginFunc =(data) =>{
        console.log(data);
    }
    return (
        <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
            <div className="p-4 rounded-xl bg-white">
                <h1 className="text-3xl font-bold text-center mb-4">Login your account</h1>

                <form className="space-y-4" onSubmit={handleSubmit(handelLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                         className="input"
    
                         placeholder="Type here email" 
                         {...register("email",{ required: "Email field is required" })}
                         />
                         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password"
                         className="input" 
                       
                         placeholder="Type here password" 
                         {...register("password", { required: "Password field is required" })}
                         />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-black text-white">Login</button>
                </form>
                <p className="mt-4">Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link></p>

            </div>
        </div>
    );
};

export default Loginpage;