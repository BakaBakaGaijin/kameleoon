import { BrowserRouter, Link } from 'react-router';
import { Routes } from './routes/Routes';
import { ROUTES } from '../shared/model/rotes';

import '../shared/assets/styles/fonts.css';
import './App.css';
import { Header } from '../widgets/header';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
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
        </div>
    );
}

export default App;
