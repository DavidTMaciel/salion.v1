import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contato from '../pages/contato/Contato';
import Login from '../pages/login';
import About from '../pages/about';

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/login' element={<Login />}/>
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;