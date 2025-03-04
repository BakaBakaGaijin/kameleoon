import { BrowserRouter } from 'react-router';
import { Routes } from './routes/Routes';

import '../shared/assets/styles/fonts.css';
import './App.css';
import { Header } from '../widgets/header';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;
