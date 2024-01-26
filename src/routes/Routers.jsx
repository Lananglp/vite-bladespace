import React from 'react'
import { BrowserRouter, Router, RouterProvider, Routes, createBrowserRouter, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Sidebar from '../components/sidebar/Sidebar'
import Account from '../pages/account/Account'
import PageNotFound from '../pages/PageNotFound'
import AccountCreate from '../pages/account/AccountCreate'
import AccountEdit from '../pages/account/AccountEdit'
import AccountChangePassword from '../pages/account/AccountChangePassword'
import Login from '../auth/Login'
import Middleware from '../middleware/Middleware'
import { useRecoilValue } from 'recoil'
import { tokenState } from '../recoilState/RecoilState'
import Authorization from '../auth/Authorization'
import Profile from '../pages/account/Profile'

function Routers() {

    const token = useRecoilValue(tokenState);

    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: 
    //             <Login/>,
    //     },
    //     {
    //         path: '*',
    //         element: 
    //             <Sidebar>
    //                 <PageNotFound/>
    //             </Sidebar>,
    //     },
    //     {
    //         path: '/dashboard',
    //         element: 
    //             <Sidebar>
    //                 <Dashboard/>
    //             </Sidebar>,
    //     },
    //     {
    //         path: '/account',
    //         element: 
    //             <Sidebar>
    //                 <Account/>
    //             </Sidebar>,
    //     },
    //     {
    //         path: '/account/create',
    //         element:
    //             <Sidebar>
    //                 <AccountCreate/>
    //             </Sidebar>,
    //     },
    //     {
    //         path: '/account/edit/:id',
    //         element:
    //             <Sidebar>
    //                 <AccountEdit/>
    //             </Sidebar>,
    //     },
    //     {
    //         path: '/account/change-password/:id',
    //         element:
    //             <Sidebar>
    //                 <AccountChangePassword/>
    //             </Sidebar>,
    //     },
    // ])

  return (
    <>
        {/* <RouterProvider router={router}/> */}
        <BrowserRouter>
                {!token ?
                    <Routes>
                        <Route path='*' element={<Login/>}/>
                    </Routes>
                    :
                    <Authorization>
                        <Sidebar>
                            <Routes>
                                <Route path='*' element={<PageNotFound/>}/>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/profile' element={<Profile/>}/>
                                <Route path='/account' element={<Account/>}/>
                                <Route path='/account/create' element={<AccountCreate/>}/>  
                                <Route path='/account/edit/:id' element={<AccountEdit/>}/>  
                                <Route path='/account/change-password/:id' element={<AccountChangePassword/>}/>
                            </Routes>
                        </Sidebar>
                    </Authorization>
                }
        </BrowserRouter>
    </>
  )
}

export default Routers