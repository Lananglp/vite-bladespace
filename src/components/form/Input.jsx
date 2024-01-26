import React from 'react'

function Input(props) {

    const {id, name, value, type, onChange, label, error} = props;

  return (
    <>
        <div>
            <div className="relative">
                <input name={name} defaultValue={value} onChange={onChange} type={type} id={id} className={`block p-2 bg-white dark:bg-zinc-900 w-full text-sm text-zinc-500 dark:text-white rounded-lg border ${error ? 'border-red-600 focus:border-red-500 focus:dark:border-red-500' : 'border-zinc-300 dark:border-zinc-700 focus:border-sky-600 focus:dark:border-sky-600'} appearance-none focus:outline-none focus:ring-0 peer`} placeholder=""/>
                <label htmlFor={id} className={`absolute text-sm text-zinc-500 ${error ? 'peer-focus:text-red-600' : 'peer-focus:text-sky-600'} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-zinc-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}>{label}</label>
            </div>
            {error && <p id={id} className="mt-2 text-xs text-red-600">{error}</p>}
        </div>
    </>
  )
}

export default Input