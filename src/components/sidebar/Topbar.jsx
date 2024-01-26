import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { DateNow, timeNow } from '../../helper/Helper';
import { useRecoilState } from 'recoil';
import { themeState, tokenState, userState } from '../../recoilState/RecoilState';
import { sweetAlert, sweetConfirm } from '../sweetalert/Sweetalert';
import { authLogout } from '../../apis/Api';

function Topbar(props) {
    const {sidebar, toggleSidebar, loginName} = props;

    const [dropdownOne, setDropdownOne] = useState(false);
    const [theme, setTheme] = useRecoilState(themeState);
    const [token, setToken] = useRecoilState(tokenState);
    const [user, setUser] = useRecoilState(userState);
    const html = document.documentElement;
    
    const toggleDropdownOne = () => {
        setDropdownOne(!dropdownOne);
    };

    html.classList.remove('light', 'dark');
    html.classList.add(theme);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', JSON.stringify('dark'));
        }
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', JSON.stringify('light'));
        }
    }

    // logout
    const navigate = useNavigate();

    const handleLogout = () => {
        setDropdownOne(false);
        sweetConfirm("Are you sure logout?").then( async (res) => {
            if (res.isConfirmed) {
                try {
                    const res = await authLogout();
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser({});
                    navigate('/');
                    sweetAlert('success', 'You has been logout.');
                } catch (error) {
                    console.log(error);
                }
            }
        })
    }

    return (
        <>  
            <div className={`fixed ${sidebar && 'sm:left-72'} left-0 right-0 top-0 ease-out duration-500 p-4 z-20`}>
                <div className={`relative flex justify-between items-center bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-zinc-950 py-3 px-4 rounded-2xl ${sidebar && 'sm:ms-4'}`}>
                    <div className='flex items-center'>
                        <button className='text-xs text-zinc-400 font-semibold' onClick={toggleSidebar}><i className={`align-middle fa fa-fw fa-xl hover:text-zinc-500 dark:hover:text-zinc-300 duration-200 fa-${sidebar ? 'bars-staggered' : 'bars'}`} /></button>
                        <div>
                            <div className='text-zinc-500 dark:text-zinc-400 text-sm ms-4'>{DateNow()}</div>
                            <div className='text-zinc-500 dark:text-zinc-400 text-sm ms-4'>{timeNow()}</div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={toggleTheme} className='text-xs text-zinc-400 font-semibold me-4'><i className={`fa fa-fw fa-xl fa-${theme === "dark" ? 'toggle-on text-sky-500' : 'toggle-off text-zinc-500'}`}/> {theme === "dark" ? 'Dark' : 'Light'}</button>

                        <div className='relative'>
                            <button onClick={toggleDropdownOne} className='text-sm text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 duration-200'><i className='text-zinc-500 fa fa-fw fa-sm fa-user' /> <span className='lg:inline hidden'>{loginName}</span> <i className={`fa fa-fw fa-sm fa-chevron-right ${dropdownOne ? 'rotate-90' : 'rotate-0'} ease-out duration-200`} /></button>
                            
                            <div className={`absolute ${dropdownOne ? '-end-4' : '-end-60'} ease-out duration-200 top-14`}>
                                <div className='bg-white dark:bg-zinc-900 rounded-2xl shadow-lg shadow-zinc-200 dark:shadow-zinc-950 p-2'>
                                    <ul className='w-48'>
                                        <li>
                                            <Link onClick={toggleDropdownOne} to="/profile" className='block flex items-center bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100/75 hover:dark:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-700/50 duration-200 ease-out rounded-2xl py-1 px-4 text-sm'>
                                                <div className='flex justify-center items-center bg-gradient-to-b from-sky-500 to-sky-600 rounded-md shadow-lg shadow-zinc-200 dark:shadow-zinc-950 text-white w-6 h-6 me-2'>
                                                    <i className='fa fa-fw fa-sm fa-user' />
                                                </div>
                                                <span>Profile</span>
                                            </Link>
                                        </li>
                                        <hr className='my-1 dark:border-zinc-700' />
                                        <li>
                                            <button
                                                onClick={() => handleLogout()} 
                                                className='w-full block flex items-center bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100/75 hover:dark:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-700/50 duration-200 ease-out rounded-2xl py-1 px-4 text-sm'>
                                                <div className='flex justify-center items-center bg-gradient-to-b from-red-500 to-red-600 rounded-md shadow-lg shadow-zinc-200 dark:shadow-zinc-950 text-white w-6 h-6 me-2'>
                                                    <i className='fa fa-fw fa-sm fa-power-off' />
                                                </div>
                                                <span>Logout</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar