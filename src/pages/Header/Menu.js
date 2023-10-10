import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <div className="main-menu self-center hidden md:block">
                <ul className="nav flex space-x-275 justify-content-center">
                <li className="nav-item"><Link to="/" className="nav-link hover:underline" >Home</Link></li>
                <li className="nav-item"><Link to="/products" className="nav-link hover:underline" >Products</Link></li>
                </ul>
            </div>
        </>
    )
}
export default Menu;