import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'link';
    label: string;
}

const Button = ({ variant = 'primary', label, className = '', ...props }: ButtonProps) => {
    // Base styles for all buttons
    const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-3 rounded-lg font-bold transition-all duration-200 cursor-pointer active:bg-[#6A6466] disabled:bg-[#6A6466]";

    // Variant specific styles
    const variants = {
        primary: "bg-black text-white hover:bg-[#312E2F]",
        secondary: "bg-white text-[#312E2F] border-2 border-black hover:bg-gray-100",
        link: "bg-transparent text-black hover:opacity-70 !px-0",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span>{label}</span>
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        </button>
    );
};

export default Button;