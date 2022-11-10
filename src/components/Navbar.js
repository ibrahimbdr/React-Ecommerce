import React from 'react'

export const Navbar = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 space-x-5 mx-auto text-center py-3 h-110 bg-slate-300 sticky shadow">
        <div className='my-auto font-serif font-extrabold text-xl'><span className='text-2xl text-indigo-600'>E</span>-Commerce</div>
        <div className="col-span-3 order-last md:-order-none mt-5 md:mt-0 font-semibold">
            <a className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' href='http://www.google.com/'>Home</a>
            <a className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' href='http://www.google.com/'>Products</a>
            <a className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' href='http://www.google.com/'>About</a>
            <a className='mx-5 hover:bg-slate-400 rounded-full p-2 transition-all' href='http://www.google.com/'>Contact</a>
        </div>
        <div>
            <a className='hover:bg-slate-400 rounded-full p-2 transition-all' href='http://www.google.com'>Sign In</a>
            <a className='ml-5 bg-indigo-700 rounded-full p-2 text-yellow-50 hover:bg-indigo-500 transition-all' href='http://www.google.com'>Sign up</a>
        </div>
     </div>
  )
}
