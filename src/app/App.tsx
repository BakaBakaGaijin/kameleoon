import { BrowserRouter, Link } from 'react-router';
import { Routes } from './routes/Routes';
import { ROUTES } from '../shared/model/rotes';

import '../shared/assets/styles/fonts.css';

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>to dashboard</Link>
                </li>
                <li>
                    <Link to={`${ROUTES.RESULTS}/1`}>to results</Link>
                </li>
                <li>
                    <Link to={`${ROUTES.FINALIZE}/1`}>to finalize</Link>
                </li>
            </ul>

            <Routes />
        </BrowserRouter>
    );
}

export default App;
