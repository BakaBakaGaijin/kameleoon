import { ReactNode } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

import './Button.css';

type TButtonProps = {
    children: ReactNode;
    dark?: boolean;
    variant?: 'text' | 'back';
    href?: string;
    className?: string;
    onClick?: () => void;
};

export const Button = ({ children, dark, variant, href, className, onClick }: TButtonProps) => {
    const classes = cn('button', className, { dark, [variant!]: variant });

    if (href) {
        return (
            <Link className={classes} to={href}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};
