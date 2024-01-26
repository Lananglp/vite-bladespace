import React, { useState } from 'react'
import { postUsers } from '../../apis/Api';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { sweetAlert } from '../../components/sweetalert/Sweetalert';
import { appName } from '../../helper/Helper';

function AccountCreate() {
    document.title = `Create some account | ${appName()}`;

    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postUsers(form);
            navigate('/account');
            sweetAlert(res.data.status, res.data.message);
        } catch (error) {
            setErrors(error.response && error.response.data && error.response.data.errors);
        }
    }

    return (
        <>
            <section className='grid grid-cols-1 gap-4 mb-4'>
                <form onSubmit={handleSubmit} className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-2xl'>
                    <div className='flex justify-between items-center p-4 shadow-lg shadow-zinc-100 dark:shadow-black/25 rounded-2xl'>
                        <div>
                            <h6 className='font-semibold'>Create Account</h6>
                            <p className='text-xs'>Here you can see all user account data.</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                            <Input
                                label="Name"
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <Input
                                label="Email"
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <Input
                                label="Password"
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <Input
                                label="Confirm Password"
                                type="password"
                                id="validate_password"
                                name="validate_password"
                                onChange={handleChange}
                                error={errors.validate_password}
                            />
                            {/* <div className="relative">
                                <input name='name' onChange={handleChange} type="text" id="name" className="block p-2 bg-white dark:bg-zinc-900 w-full text-sm text-zinc-500 dark:text-white rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600  focus:dark:border-sky-600 peer" />
                                <label htmlFor="name" className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-zinc-900 px-2 peer-focus:px-2 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
                            </div>
                            <div className="relative">
                                <input name='email' onChange={handleChange} type="email" id="email" className="block p-2 bg-white dark:bg-zinc-900 w-full text-sm text-zinc-500 dark:text-white rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600  focus:dark:border-sky-600 peer" />
                                <label htmlFor="email" className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-zinc-900 px-2 peer-focus:px-2 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                            </div>
                            <div className="relative">
                                <input name='password' onChange={handleChange} type="password" id="password" className="block p-2 bg-white dark:bg-zinc-900 w-full text-sm text-zinc-500 dark:text-white rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600  focus:dark:border-sky-600 peer" />
                                <label htmlFor="password" className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-zinc-900 px-2 peer-focus:px-2 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                            </div>
                            <div className="relative">
                                <input name='validate_password' onChange={handleChange} type="password" id="validate_password" className="block p-2 bg-white dark:bg-zinc-900 w-full text-sm text-zinc-500 dark:text-white rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600  focus:dark:border-sky-600 peer" />
                                <label htmlFor="validate_password" className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-zinc-900 px-2 peer-focus:px-2 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Validate Password</label>
                            </div> */}
                        </div>
                    </div>
                    <div className='flex justify-between items-center p-4'>
                        <button onClick={() => navigate('/account')} type='button' className='bg- text-zinc-400 hover:text-sky-500 duration-200'><i className='fa fa-fw fa-sm fa-arrow-left' /> Back</button>
                        <button type='submit' className='py-1 px-8 bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white text-sm shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-xl'><i className='fa fa-fw fa-sm fa-paper-plane' /> Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AccountCreate