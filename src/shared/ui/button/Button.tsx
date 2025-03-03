import { ReactNode } from 'react';
import cn from 'classnames';

import './Button.css';

type TButtonProps = {
    children: ReactNode;
    dark?: boolean;
    onClick?: () => void;
};

export const Button = ({ children, dark, onClick }: TButtonProps) => {
    return (
        <button className={cn('button', { dark })} onClick={onClick}>
            {children}
        </button>
    );
};
