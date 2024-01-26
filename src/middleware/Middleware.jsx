import React, { Children } from 'react'
import Login from '../auth/Login'
import { useRecoilValue } from 'recoil'
import { tokenState } from '../recoilState/RecoilState';
import Route from '../routes/Routers';
import { BrowserRouter, Routes, Route as Routed } from 'react-router-dom';

function Middleware(children) {

    const token = useRecoilValue(tokenState);

    if (token) {
        return children
    } else {
        return <Login/>
    }

    // return (
    //     <>
    //         <BrowserRouter>
    //             <Routes>
    //                 {token
    //                     ? children
    //                     : <Routed path='*' element={<Login/>}/>
    //                 }
    //             </Routes>
    //         </BrowserRouter>
    //     </>
    // )
}

export default Middleware