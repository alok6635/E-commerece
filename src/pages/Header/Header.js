import { Outlet} from "react-router-dom";
import { Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Menu from "./Menu";

export function Header() {
    return (
        <header id="header">
            <div className="header_cover">
            <div className="header flex justify-between">
 {/*Link the svg logo svg */}
                <div className="logo">
                    <Link to="" className="logo-icon"><Logo/></Link>
                    </div>
{/*call the  menu component */}
                <Menu/>
            </div>
            </div>
{/* Link the outlink */}
            <Outlet></Outlet>
        </header>
    )
}

