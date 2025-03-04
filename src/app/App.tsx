import { BrowserRouter } from 'react-router';

import { Routes } from './routes/Routes';
import { Header } from '../widgets/header';
import '../shared/assets/styles/fonts.css';
import './App.css';

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
