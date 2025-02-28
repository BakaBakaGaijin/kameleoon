import { ReactNode } from 'react';
import cn from 'classnames';

import './Button.css';

type TButtonProps = {
    children: ReactNode;
    dark?: boolean;
};

export const Button = ({ children, dark }: TButtonProps) => {
    return <button className={cn('button', { dark })}>{children}</button>;
};
