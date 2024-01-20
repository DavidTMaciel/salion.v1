import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contato from '../pages/contato/Contato';

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;