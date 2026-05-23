import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className="font-bold text-lg mb-4">Login With</h2>
            <div className="flex flex-col gap-3 ">
                <button className="btn border-blue-500 text-blue-500"><FaGoogle /> Login With Google</button>
                <button className="btn"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;