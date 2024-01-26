import React, { useState } from 'react'
import { showUsers } from '../../apis/Api'
import { useRecoilValue } from 'recoil'
import { userState } from '../../recoilState/RecoilState';

function Profile() {
  const user = useRecoilValue(userState);

  return (
    <>
      <section className='grid grid-cols-12 gap-4 mb-4'>
        <div className='col-span-4 bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-2xl'>
          <div className='p-4'>
            <div className='text-center'>
              <div className='inline-block bg-zinc-800 rounded-full'>
                <img src="/img/bladespace.svg" alt="" width={164} className='rounded-full'/>
              </div>
              <hr className='mt-4 mb-2 dark:border-zinc-700'/>
              <h2>{user.name}</h2>
              <p className='text-zinc-400 text-sm'>{user.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile