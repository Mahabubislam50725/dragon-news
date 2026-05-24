"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

const Loginpage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] =useState(false);

    const handelLoginFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
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
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className="input"

                            placeholder="Type here password"
                            {...register("password", { required: "Password field is required" })}
                        />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className ="absolute right-2 top-4  cursor-pointer">
                           {isShowPassword ?<FaEye/>  : <FaRegEyeSlash />}
                        </span>
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