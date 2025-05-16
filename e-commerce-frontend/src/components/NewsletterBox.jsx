import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='py-10'>
       <div className='mx-auto w-[90%] md:w-3/4 lg:w-1/2 text-center'>
      <h3 className="text-2xl font-medium text-gray-600 mb-3">SIGN UP and get 25% OFF </h3>

      <p className="text-sm">Sign up to our e-mails to be the first to hear about the latest trends, new arrivals and exclusive offers. Available to customers opting in for the first time or returning to opt in; offer excludes third party branded, promotional and sale items.</p>

      <form className=' w-full flex flex-col md:flex-row justify-center gap-3 my-6 '>
        <input type="email" placeholder='Email address' className="border border-gray-200 rounded py-2 px-5 placeholder:text-gray-400" required/>
        <button className="rounded bg-[#c782a4] py-2 px-5 text-white">SIGN ME UP</button>
      </form>
    </div>
    </div>
   
  )
}

export default NewsletterBox
