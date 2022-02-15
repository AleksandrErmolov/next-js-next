import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import Link from 'next/link'


interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: string;
    children: ReactNode;
}

const Button = ({href, children, ...props}: ButtonProps) => {

    if (href.length > 0 && href) {
        return (
            <Link href={href}><a> {children}</a></Link>
        )
    }


    return (

        <button {...props}>{children}</button>

    );
};

export default Button;