import React, { useState } from 'react'
import { authLogin } from '../apis/Api'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../recoilState/RecoilState';
import Input from '../components/form/Input';

function Login() {
    
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [token, setToken] = useRecoilState(tokenState);

    const handleChange = (e) => {
      setForm((prevState) => ({...prevState,[e.target.name]:e.target.value}))
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      setErrors({});
        try {
            const res = await authLogin(form);
            localStorage.setItem('token', JSON.stringify(res.data.token.split('|')[1]));
            const userToken = JSON.parse(localStorage.getItem('token'));
            setToken(userToken);
            navigate('/');
        } catch (error) {
            console.log(error);
            setErrors(error.response && error.response.data && error.response.data.message);
            navigate('/');
        }
    }

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-zinc-950 rounded-xl w-96 m-4'>
          <div className='flex justify-center items-center px-4 py-4 shadow-lg shadow-zinc-100 dark:shadow-zinc-950'>
            <img src="/img/bladespace.svg" alt="" width={48} className='me-1' />
            <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-b from-sky-950 via-sky-300 to-sky-950 font-semibold py-2'>Cylare<span className='bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-sky-500 dark:to-white italic font-normal text-lg'>Bladespace</span></h1>
          </div>
          <div className='p-4'>
            <div className='pb-8 text-center'>
              <h1 className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 dark:from-white to-zinc-950 font-semibold py-2'>Login</h1>
              <p className='text-zinc-400 text-sm'>Please input your username and password</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              <div className='mb-3'>
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  error={errors.password}
                />
              </div>
              <button type='submit' className='bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold rounded-xl w-full py-2 mt-2'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login