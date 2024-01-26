import { Link } from "react-router-dom";

function NavLink(props) {

    const {to, onClick, pathname, routeName, title} = props;

    return (
        <li onClick={onClick}>
            <Link to={to} className={`block ${pathname === routeName ? 'bg-zinc-50 dark:bg-zinc-800 text-sky-400 border-sky-400/50' : 'text-zinc-400 border-zinc-200 dark:border-zinc-700'} shadow-lg shadow-zinc-100 dark:shadow-black/25 border hover:bg-zinc-100/50 hover:dark:bg-zinc-800/50 active:bg-zinc-100/75 duration-200 text-sm py-2 px-4 rounded-2xl text-center my-3`}>{title}</Link>
        </li>
    )
}

export const NavLabel = (props) => {

    const {title} = props;

    return (
        <li className='text-center font-semibold text-sky-700 text-xs px-2'>{title}</li>
    )
}

export default NavLink;