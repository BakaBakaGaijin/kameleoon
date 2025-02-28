import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { PAGE_TITLES, ROUTES } from '../../shared/model/rotes';
import './Header.css';

const getPageTitle = (pathname: string) => {
    if (pathname.includes(ROUTES.RESULTS)) {
        return PAGE_TITLES.RESULTS;
    }

    if (pathname.includes(ROUTES.FINALIZE)) {
        return PAGE_TITLES.FINALIZE;
    }

    return PAGE_TITLES.HOME;
};

export const Header = () => {
    const { pathname } = useLocation();
    const title = getPageTitle(pathname);

    useEffect(() => {
        document.title = title;
    }, [pathname, title]);

    return <h2 className="title">{title}</h2>;
};
