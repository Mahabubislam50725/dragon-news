"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';



const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] =useState(false);

    const handelRegisterFunc = async (data) => {
        console.log(data);
        const { name, photoUrl, email, password } = data;

        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoUrl,
            callbackURL: "/",
        })
        console.log(res, error);

        if(error){
            alert(error.message);
        }

        if(res){
            alert("Registration successful!");
        }

    }
    return (
        <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
            <div className="p-4 rounded-xl bg-white">
                <h1 className="text-3xl font-bold text-center mb-4">Register your account</h1>

                <form className="space-y-4" onSubmit={handleSubmit(handelRegisterFunc)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            className="input"

                            placeholder="Type here name"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </fieldset>



                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">photo URL</legend>
                        <input type="text"
                            className="input"

                            placeholder="Type here photo URL"
                            {...register("photoUrl", { required: "Photo URL field is required" })}
                        />
                        {errors.photoUrl && <p className="text-red-500">{errors.photoUrl.message}</p>}
                    </fieldset>



                    <fieldset className="fieldset ">
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
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-8 top-4 cursor-pointer">
                           {isShowPassword ?<FaEye/>  : <FaRegEyeSlash />}
                        </span>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-black text-white">Register</button>
                </form>
                <p className="mt-4">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>

            </div>
        </div>
    );
};

export default RegisterPage;