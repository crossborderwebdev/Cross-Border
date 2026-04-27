import { ButtonProps } from "./type";

const Button = ({ entry }: { entry: ButtonProps }) => {

    if (entry?.fields?.buttonStyle === "Primary") {
        entry.fields.buttonStyle = "btn-primary";
    } else if (entry?.fields?.buttonStyle === "Link") {
        entry.fields.buttonStyle = "btn btn-link text-[#DB4446] p-0";
    }
    const variant = entry?.fields?.buttonStyle || 'btn-primary';
    const label = entry?.fields?.buttonTitle || 'Click Me';

    return (
        <a
            className={`btn ${variant} `}
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
        </a>
    );
};

export default Button;