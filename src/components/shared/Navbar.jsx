"use client"
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session ,isPending } = authClient.useSession();
    const user = session?.user;


    return (
        <div className="flex justify-between container mx-auto mt-6 ">
            <div></div>
           <ul className="flex justify-between items-center gap-4 text-gray-700">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/about-us">About</NavLink></li>
            <li><NavLink href="/career">Career</NavLink></li>
           </ul>

           { isPending ? (
            <span className="loading loading-spinner loading-lg"></span>
           ): user ? (
            <div className ="flex items-center gap-4"> 
            <h2>Hello, {user?.name || 'Guest'}</h2>
            <Image src={user?.image || userAvater} alt="User Avatar" width={60} height={60} className="rounded-full" />
            <button className="btn bg-red-500 text-white" onClick={() => authClient.signOut()}>Logout</button>
           </div>
           ) : (
            <button className="btn bg-purple-500 text-white">
              <Link href={"/login"}>Login</Link>
            </button>
           )
           }
        </div>
    );
};

export default Navbar;