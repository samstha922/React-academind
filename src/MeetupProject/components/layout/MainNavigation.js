import { Link } from "react-router-dom"

// to use it as below; need to be exported as ***.module.css
import classes from "./MainNavigation.module.css"
const MainNavigation = () =>{
    return (
    <>
        <nav className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <ul>
                <li>
                    {/* this Link component prevents sending the link to server and instead uses browser to change the link and make it feel like SPA */}
                    <Link to='/'>All Meetups</Link>
                </li>

                <li>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>

                <li>
                    <Link to='/favourites'>Favourites</Link>
                </li>
            </ul>
        </nav>
    </>
)}

export default MainNavigation