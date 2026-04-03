import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'link';
    label: string;
}

const Button = ({ variant = 'primary', label, className = '', ...props }: ButtonProps) => {
    // Base styles for all buttons
    const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-200 cursor-pointer";

    // Variant specific styles
    const variants = {
        primary: "bg-black hover:bg-secondary-black active:bg-tertiary-black text-white",
        secondary: "bg-white text-black border-2 border-black hover:text-secondary-black active:text-tertiary-black hover:border-secondary-black",
        link: "bg-transparent text-black hover:text-secondary-black active:text-tertiary-black disabled:text-tertiary-black !px-0",
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