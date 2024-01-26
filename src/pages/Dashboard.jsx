import React from 'react'
import { appName } from '../helper/Helper';

function Dashboard() {
  document.title = `Welcome to dashboard | ${appName()}`;
  return (
    <>
      <div className='grid xl:grid-cols-12 lg:grid-cols-2 gap-4'>
        <div className='xl:col-span-3'>
          <section className='grid grid-cols-1 gap-4 h-full'>
          <div className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-2xl'>
            <header className='flex justify-between items-center p-4 shadow-lg shadow-zinc-100 dark:shadow-black/25 rounded-2xl'>
              <div>
                <h6 className='font-semibold'>Dashboard</h6>
                <p className='text-xs text-zinc-400'>Here you can see realtime clock and date.</p>
              </div>
            </header>
            <main className='text-center p-4'>
              <img src="/img/bladespace.svg" alt="" />
              <p className='text-zinc-500 dark:text-zinc-400'>Awesome!</p>
              <h1 className='text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-sky-950 via-sky-300 to-sky-950'>CYLARE<br/></h1>
              <h2 className='text-3xl'>Bladespace</h2>
            </main>
          </div>
        </section>
        </div>
        <div className='xl:col-span-4'>
          <section className='grid grid-cols-1 gap-4 h-full'>
            <div className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-2xl'>
              <header className='flex justify-between items-center p-4 shadow-lg shadow-zinc-100 dark:shadow-black/25 rounded-2xl'>
                <div>
                  <h6 className='font-semibold'>Description</h6>
                  <p className='text-xs text-zinc-400'>Here you can see realtime clock and date.</p>
                </div>
              </header>
              <main className='p-4'>
                <p className='mb-2 text-zinc-500 dark:text-zinc-400'>Cylare Bladespace is a captivating blend of futuristic aesthetics and cutting-edge technology. This innovative virtual realm transports users to a mesmerizing space where cybernetic landscapes and advanced weaponry converge. As you navigate through the digital expanse of Cylare Bladespace, you'll find yourself immersed in a thrilling adventure, battling virtual foes with state-of-the-art blades and unlocking the secrets of this cybernetic universe. Brace yourself for an exhilarating journey through the realms of technology and imagination.</p>
                {/* <p className='text-zinc-500 dark:text-zinc-400'>Cylare Bladespace adalah perpaduan menarik antara estetika futuristik dan teknologi canggih. Dunia maya inovatif ini membawa pengguna ke ruang yang memikat, di mana lanskap sibernetik dan senjata mutakhir bertemu. Saat Anda menjelajahi wilayah digital Cylare Bladespace, Anda akan terlebur dalam petualangan mendebarkan, bertarung melawan musuh virtual dengan pisau berteknologi tinggi dan membuka rahasia alam semesta sibernetik ini. Bersiaplah untuk perjalanan yang menggairahkan melalui ranah teknologi dan imajinasi.</p> */}
              </main>
            </div>
          </section>
        </div>
        <div className='xl:col-span-5'>
          <section className='grid grid-cols-1 gap-4 h-full'>
            <div className='bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-black/25 rounded-2xl'>
              <main>
                <div className='bg-zinc-900 rounded-xl'>
                  <div className='border-b border-zinc-700 px-6 py-3'>
                    <div className='flex items-center'>
                      <span className='mx-0.5'><i className='fa fa-fw fa-xs fa-circle text-red-500'/></span>
                      <span className='mx-0.5'><i className='fa fa-fw fa-xs fa-circle text-yellow-500'/></span>
                      <span className='mx-0.5'><i className='fa fa-fw fa-xs fa-circle text-green-500'/></span>
                    </div>
                  </div>
                  <div className='p-6'>
                    <p>
                      <span className='text-orange-400 italic'>const</span><span className='ms-2 text-green-400'>fetchdata</span><span className='ms-2 text-orange-400'>=</span><span className='ms-2 text-red-400'>async</span><span className='ms-2 text-purple-400'>()</span><span className='ms-2 text-orange-400'>{'=>'}</span><span className='ms-2 text-purple-400'>{'{'}</span>
                      <br />
                      <span className='ms-4 text-red-400'>try</span><span className='ms-2 text-blue-400'>{'{'}</span>
                      <br />
                      <span className='ms-8 text-orange-400 italic'>const</span><span className='ms-2 text-zinc-300'>res</span><span className='ms-2 text-orange-400'>=</span><span className='ms-2 text-red-400'>await</span><span className='ms-2 text-green-400'>showUsers</span><span className='text-yellow-400'>{'('}</span><span className='text-zinc-300'>user.id</span><span className='text-yellow-400'>{')'}</span><span className='text-zinc-300'>;</span>
                      <br />
                      <span className='ms-8 text-green-400'>setItem</span><span className='text-yellow-400'>{'('}</span><span className='text-zinc-300'>res.data.user</span><span className='text-yellow-400'>{')'}</span><span className='text-zinc-300'>;</span>
                      <br />
                      <span className='ms-4 text-blue-400'>{'}'}</span><span className='ms-2 text-red-400'>catch</span><span className='ms-2 text-blue-400'>{'('}</span><span className='text-zinc-300'>error</span><span className='text-blue-400'>{')'}</span><span className='ms-2 text-blue-400'>{'{'}</span>
                      <br />
                      <span className='ms-8 text-zinc-300'>console</span><span className='text-orange-400'>.</span><span className='text-green-400'>log</span><span className='text-yellow-400'>{'('}</span><span className='text-zinc-300'>error</span><span className='text-yellow-400'>{')'}</span><span className='text-zinc-300'>;</span>
                      <br />
                      <span className='ms-4 text-blue-400'>{'}'}</span>
                      <br />
                      <span className='text-purple-400'>{'}'}</span>
                      <br />
                      <br />
                      <span className='text-green-400'>fetchdata</span><span className='text-purple-400'>{'()'}</span><span className='text-zinc-300'>;</span>
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Dashboard