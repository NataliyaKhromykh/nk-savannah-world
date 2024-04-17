import {
    BrowserRouter as Router,
     Routes,
    Route,
    Link
   } from "react-router-dom";
//    import SignUp from './SignUp'; -signup button

import Catalog from './Catalog';
import Pets from './Pets';

function Navbar() {
    return <Router>
        <nav>
                <Link to="/" >Главная</Link>
                <Link  to="/catalog">Каталог</Link>
                <Link to="/pets">Питомцы</Link>
                <SignUp/>
        </nav>
        <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/pets" element={<PetsPage/>} />
        </Routes>
        </Router>
}
export default Navbar;