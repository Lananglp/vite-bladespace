import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Topbar from './Topbar';
import Cardbar from './Cardbar';
import { authCheck, authLogout } from '../../apis/Api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, tokenState, loadingUserState } from '../../recoilState/RecoilState';
import headerToken from '../../auth/headerToken';
import { sweetAlert, sweetConfirm } from '../sweetalert/Sweetalert';
import NavLink, { NavLabel } from './NavLink';

function Sidebar(props) {
    const { loginStatus, children } = props;

    // ===================== sidebar state =====================

    const [sidebar, setSidebar] = useState(() => {
        const sidebarLocalStorage = localStorage.getItem('sidebar');
        return sidebarLocalStorage !== null ? JSON.parse(sidebarLocalStorage) : window.innerWidth > 768 ? true : null;
    });

    useEffect(() => {
        localStorage.setItem('sidebar', JSON.stringify(sidebar));
    }, [sidebar]);

    const [sidebarMobile, setSidebarMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebar(false);
            } else {
                setSidebar(true);
                setSidebarMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
            setSidebarMobile(!sidebarMobile);
        } else {
            setSidebar(prevSidebar => !prevSidebar);
        }
    }

    // ===================== current route name =====================
    const currentRouteName = useLocation();
    const pathname = currentRouteName.pathname;
    const {id} = useParams();

    // get user login
    const [token, setToken] = useRecoilState(tokenState);
    const [user, setUser] = useRecoilState(userState);
    
    // useEffect(() => {
    //     const getUserLogin = async () => {
    //         try {
    //             const res = await headerToken.get(`/api/authCheck`, {
    //                 headers: {Authorization: `Bearer ${token}`},
    //             })
    //             if (res.data) {
    //                 setUser(res.data.user);
    //             }
    //         } catch (error) {
    //             console.log(error.response.data);
    //         }
    //     }

    //     getUserLogin();
    // }, [])

    return (
        <>
            <div onClick={() => setSidebarMobile(false)} className={`${sidebarMobile ? '' : 'hidden'} fixed ease-out duration-500 start-0 top-0 h-screen w-screen bg-black/25 z-40`}></div>
            <aside className={`${!sidebar ? sidebarMobile ? 'start-0' : '-start-72' : 'start-0 ps-4'} ${sidebarMobile ? 'py-0' : 'py-4'} dashboard-scrollbar fixed ease-out duration-500 h-screen z-50`}>
                <div className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-zinc-950 rounded-2xl h-full w-72 overflow-hidden'>
                    <Link onClick={() => setSidebarMobile(false)} to="/" className='py-4 px-2 flex justify-center items-center shadow-lg rounded-2xl shadow-zinc-100 dark:shadow-zinc-950'>
                        <img src="/img/bladespace.svg" alt="" loading='lazy' width={32} className='me-1' />
                        <h6 className='text-lg'>Cylare Bladespace</h6>
                    </Link>
                    <div className='px-4 h-full overflow-y-auto pb-24'>
                        <ul className='mt-4'>
                            <NavLabel title="General" />
                            <NavLink
                                to="/"
                                onClick={() => setSidebarMobile(false)}
                                pathname={pathname}
                                routeName={"/"}
                                title="Dashboard"
                            />
                            <NavLink
                                to="/account"
                                onClick={() => setSidebarMobile(false)}
                                pathname={pathname}
                                routeName={
                                    pathname === "/account"
                                        ? pathname
                                        : pathname === "/account/create"
                                            ? pathname
                                            : pathname === `/account/edit/${id}`
                                                ? pathname
                                                : "/account/profile"
                                }
                                title="Account"
                            />
                            <NavLink
                                to="/settings"
                                onClick={() => setSidebarMobile(false)}
                                pathname={pathname}
                                routeName={"/settings"}
                                title="Settings"
                            />
                        </ul>
                    </div>
                </div>
            </aside>

            <main className={`${sidebar ? 'ms-72 ps-8' : 'ps-4'} ease-out duration-500 py-4 pe-4 overflow-hidden`}>
                <header>
                    <nav className='relative mb-2' style={{ paddingBottom: '72px' }}>
                        <Topbar
                            sidebar={sidebar}
                            toggleSidebar={toggleSidebar}
                            loginName={user.email}
                        />
                    </nav>

                    {pathname === "/" &&
                        <>
                        <div className='grid xl:grid-cols-4 grid-cols-2 gap-4 mb-4'>
                            <Cardbar icon="eye" backgroundColor="from-green-500 to-green-800" title="Total Views" text="1,274 view" />
                            <Cardbar icon="users" title="Total Users" text="128 user" />
                            <Cardbar icon="heart" backgroundColor="from-red-500 to-red-800" title="Subcsriber" text="53,127 subs" />
                            <Cardbar icon="palette" backgroundColor="from-orange-500 to-orange-800" title="Total Content" text="78 Content" />
                        </div>
                        </>
                    }
                </header>

                {children}

                <footer className='my-4'>
                    <p className='text-zinc-400 text-sm'>© {new Date().getFullYear()} Cylare Bladespace</p>
                </footer>
            </main>
        </>
    )
}

export default Sidebar