import React from 'react'

function Cardbar(props) {
    const {icon, backgroundColor = "from-sky-500 to-sky-800", color = "text-white", title, text} = props;
    return (
        <div className='flex items-center bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-zinc-950 rounded-2xl p-3'>
            <div className={`flex justify-center items-center bg-gradient-to-b ${backgroundColor} ${color} shadow-md rounded-xl w-12 h-12 me-2`}>
                <i className={`fa fa-fw fa-xl fa-${icon}`} />
            </div>
            <div>
                <h6 className='md:text-base text-sm'>{title}</h6>
                <p className='md:text-base text-zinc-400 text-sm'>{text}</p>
            </div>
        </div>
    )
}

export default Cardbar