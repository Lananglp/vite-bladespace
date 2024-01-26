import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import headerToken from './headerToken';
import { tokenState, userState } from '../recoilState/RecoilState';
import { sweetAlert } from '../components/sweetalert/Sweetalert';

function Authorization({children}) {

    const [token, setToken] = useRecoilState(tokenState);
    const [user, setUser] = useRecoilState(userState);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUserLogin = async () => {
            setLoading(true);
            try {
                const res = await headerToken.get(`/api/authCheck`, {
                    headers: {Authorization: `Bearer ${token}`},
                })
                if (res.data) {
                    setUser(res.data.user);
                    setLoading(false);
                    sweetAlert('success', 'Welcome!');
                }
            } catch (error) {
                console.log(error);
            }
        }

        getUserLogin();
    }, [])

  if (!loading) {
    return children;
  } else {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-zinc-300 dark:from-zinc-900 via-zinc-100 dark:via-sky-950 to-zinc-300 dark:to-zinc-900 h-screen'>
                <div className='text-center text-zinc-900 dark:text-white'>
                    <i className='fa fa-fw fa-lg fa-spin fa-gear mb-4'/>
                    <p>Authorization, Please wait...</p>
                </div>
            </div>
        </>
    )
  }
}

export default Authorization