import { Link } from 'react-router-dom';
import './Header.scss';
/*import { images } from "../../images";*/

export default function Header(props) {
    return (
        <header className="Header">
    
            <Link to="/">
                <h1>Inside NYC</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                            <li><Link to="/insidenyc">InsideNYC</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}