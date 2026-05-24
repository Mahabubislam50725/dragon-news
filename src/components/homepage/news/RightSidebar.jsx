"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

    }
    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });

    }
    return (
        <div>
            <h2 className="font-bold text-lg mb-4">Login With</h2>
            <div className="flex flex-col gap-3 ">
                <button className="btn border-blue-500 text-blue-500" onClick={handleGoogleSignIn}><FaGoogle /> Login With Google</button>
                <button className="btn" onClick={handleGithubSignIn}><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;