import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Category from './pages/Category'
import Detail from './pages/Detail'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/category/detail/:id' element={<Detail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
