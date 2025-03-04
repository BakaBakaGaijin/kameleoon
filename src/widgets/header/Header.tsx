import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { PAGE_SUBTITLES, PAGE_TITLES, ROUTES } from '../../shared/model/rotes';
import './Header.css';

const getPageTitles = (pathname: string) => {
    let title = PAGE_TITLES.HOME;
    let subtitle = PAGE_SUBTITLES.HOME;

    if (pathname.includes(ROUTES.RESULTS)) {
        title = PAGE_TITLES.RESULTS;
        subtitle = PAGE_SUBTITLES.RESULTS;
    }

    if (pathname.includes(ROUTES.FINALIZE)) {
        title = PAGE_TITLES.FINALIZE;
        subtitle = PAGE_SUBTITLES.RESULTS;
    }

    return { title, subtitle };
};

export const Header = () => {
    const { pathname } = useLocation();
    const { title, subtitle } = getPageTitles(pathname);

    useEffect(() => {
        document.title = title;
    }, [pathname, title]);

    return (
        <header>
            <h2 className="title">{title}</h2>
            {subtitle && <h3 className="subtitle">{subtitle}</h3>}
        </header>
    );
};
