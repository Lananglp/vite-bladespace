import React, { useCallback, useEffect, useState } from 'react'
import { sweetAlert, sweetConfirm } from '../../components/sweetalert/Sweetalert';
import { deleteUsers, getUsers } from '../../apis/Api';
import { Link } from 'react-router-dom';
import { appName } from '../../helper/Helper';

function Account() {
  document.title = `Account list table | ${appName()}`;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchdata = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      if (res.data) {
        setUsers(res.data.users);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
      fetchdata();
  }, []);

  const handleDelete = (id) => {
    sweetConfirm().then( async (res) => {
      if (res.isConfirmed) {
        try {
          const res = await deleteUsers(id);
          sweetAlert(res.data.status, res.data.message);
          fetchdata();
        } catch (error) {
          console.log(error.response && error.response.data);
        }
      }
    });
  }

  return (
    <>
          <section className='grid grid-cols-1 gap-4 mb-4'>
            <div className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-2xl'>
              <header className='flex justify-between items-center p-4 shadow-lg shadow-zinc-100 dark:shadow-black/25 rounded-2xl'>
                <div>
                  <h6 className='font-semibold'>Account</h6>
                  <p className='text-xs text-zinc-400'>Here you can see all user account data.</p>
                </div>
                <Link to="/account/create" className='bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white shadow-lg text-sm py-1 px-4 rounded-xl text-nowrap'><i className='fa fa-fw fa-plus align-middle' /> add user</Link>
              </header>
              {!loading ?
                <main className='p-4'>
                <div className='overflow-x-auto'>
                  <table className='w-full rounded-2xl'>
                    <caption className="text-xs text-zinc-400 py-4 caption-bottom">
                      Table 3.1: Professional wrestlers and their signature moves.
                    </caption>
                    <thead>
                      <tr className='border-b border-zinc-200 dark:border-zinc-800'>
                        <th className='bg-zinc-100 dark:bg-zinc-800 first:rounded-tl-2xl last:rounded-tr-2xl py-2 font-semibold text-sm text-zinc-500'>No</th>
                        <th className='bg-zinc-100 dark:bg-zinc-800 first:rounded-tl-2xl last:rounded-tr-2xl py-2 font-semibold text-sm text-zinc-500'>Name</th>
                        <th className='bg-zinc-100 dark:bg-zinc-800 first:rounded-tl-2xl last:rounded-tr-2xl py-2 font-semibold text-sm text-zinc-500'>Email</th>
                        <th className='bg-zinc-100 dark:bg-zinc-800 first:rounded-tl-2xl last:rounded-tr-2xl py-2 font-semibold text-sm text-zinc-500'>Status</th>
                        <th className='bg-zinc-100 dark:bg-zinc-800 first:rounded-tl-2xl last:rounded-tr-2xl py-2 font-semibold text-sm text-zinc-500'>Created at</th>
                        <th className='bg-zinc-100 dark:bg-zinc-800 first:rounded-tl-2xl last:rounded-tr-2xl py-2 font-semibold text-sm text-zinc-500'><i className='fa fa-fw fa-sm fa-cog' /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length > 0
                        ? users.map((user, index) => {
                          return (
                            <tr key={index} className='odd:bg-white dark:odd:bg-zinc-900 even:bg-zinc-100/75 dark:even:bg-zinc-800/50 text-nowrap border-b border-zinc-200 dark:border-zinc-800 duration-200'>
                              <td className='bg-transparent text-center text-sm p-3'>{index + 1}</td>
                              <td className='bg-transparent text-sm p-3'>{user.name}</td>
                              <td className='bg-transparent text-sm p-3'>{user.email}</td>
                              <td className='bg-transparent text-center text-sm p-3'><span className='text-green-500 font-semibold'>Active</span></td>
                              <td className='bg-transparent text-center text-sm p-3'>{user.created_at}</td>
                              <td className='bg-transparent text-center text-sm p-3'>
                                <Link to={`/account/change-password/${user.id}`} className='me-1 bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow text-white px-1 rounded'><i className='fa fa-fw fa-sm fa-key' /></Link>
                                <Link to={`/account/edit/${user.id}`} className='me-1 bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow text-white px-1 rounded'><i className='fa fa-fw fa-sm fa-pen' /></Link>
                                <button onClick={() => handleDelete(user.id)} className='bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow text-white px-1 rounded'><i className='fa fa-fw fa-sm fa-trash-alt' /></button>
                              </td>
                            </tr>
                          )
                        })
                        :
                        <tr className='odd:bg-white dark:odd:bg-zinc-900 even:bg-zinc-100/75 dark:even:bg-zinc-800/50 text-nowrap border-b border-zinc-200 dark:border-zinc-800 duration-200'>
                          <td colSpan={6} className='py-6 bg-transparent text-zinc-400 text-center text-sm p-3'>Not data found.</td>
                        </tr>
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={6} className='bg-zinc-100 dark:bg-zinc-800 first:rounded-bl-2xl last:rounded-br-2xl py-2 font-semibold text-sm text-zinc-500'><i className='fa fa-fw fa-sm fa-cog' /> Custom table</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </main>
              :
                <main className='relative p-24'>
                  <div className='flex justify-center items-center'>
                    <i className='fa fa-fw fa-lg fa-spin fa-spinner me-2'/>
                    <p>Please wait. . .</p>
                  </div>
                </main>
              }
            </div>
          </section>
    </>
  )
}

export default Account