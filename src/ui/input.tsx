import React, {JSX} from "react";
import {FiSearch} from "react-icons/fi";

type InputProps = {
    placeholder?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
                                                placeholder = "Rechercher...",
                                                className = ""
                                            }: InputProps): JSX.Element => {
    return (
        <div className={`flex flex-row items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md ${className}`}>
            <FiSearch className="w-5 h-5 text-gray-400"/>
            <input
                type="text"
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
        </div>
    )
}