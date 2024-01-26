import React from 'react'
import { Link } from 'react-router-dom'
import { appName } from '../helper/Helper';

function PageNotFound() {
  document.title = `404 Page not found | ${appName()}`;
  return (
    <div className='bg-white dark:bg-zinc-900 flex flex-col justify-center items-center rounded-xl px-4 py-12'>
        <img src="/img/bladespace.svg" alt="" width={128}/>
        <h6 className='text-xl my-2'>404 Page not found</h6>
        <p className='lg:w-1/2 w-full text-center text-zinc-400 text-sm'>Unfortunately, we couldn't find the page you're looking for. Please check the URL again or choose another page.</p>
        <Link to='/' className='mt-8 text-sm border rounded-lg px-2 py-1 text-zinc-400 border-zinc-400 hover:text-sky-500 hover:border-sky-500 duration-200'><i className='fa fa-fw fa-sm fa-arrow-left'/> Back to Dashboard</Link>
    </div>
  )
}

export default PageNotFound