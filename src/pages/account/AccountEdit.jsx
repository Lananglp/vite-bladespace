import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import { sweetAlert } from '../../components/sweetalert/Sweetalert';
import { patchUsers, showUsers } from '../../apis/Api';
import { appName } from '../../helper/Helper';

function AccountEdit() {
    document.title = `Edit your account | ${appName()}`;

    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await showUsers(id);
                if (res.data) {
                    setForm(res.data.users);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    }, [])

    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await patchUsers(id, form);
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
                            <h6 className='font-semibold'>Edit Account</h6>
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
                                value={form.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <Input
                                label="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
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

export default AccountEdit