import { ReactNode } from 'react';
import cn from 'classnames';

import './Button.css';

type TButtonProps = {
    children: ReactNode;
    dark?: boolean;
    variant?: 'text';
    className?: string;
    onClick?: () => void;
};

export const Button = ({ children, dark, variant, className, onClick }: TButtonProps) => {
    return (
        <button className={cn('button', className, { dark, text: variant })} onClick={onClick}>
            {children}
        </button>
    );
};
