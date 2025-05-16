import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='py-10 bg-newsletter text-white'>
       <div className='mx-auto w-[90%] md:w-3/4 lg:w-1/2 text-center'>
      <h3 className="text-2xl font-medium  mb-3">SIGN UP and get 25% OFF </h3>

      <p className="text-sm">Sign up to our e-mails to be the first to hear about the latest trends, new arrivals and exclusive offers. Available to customers opting in for the first time or returning to opt in; offer excludes third party branded, promotional and sale items.</p>

      <form onSubmit={onSubmitHandler} className=' w-full flex flex-col md:flex-row justify-center gap-3 mt-6 '>
        <input type="email" placeholder='Email address' className="border border-gray-200 rounded py-2 px-5 placeholder:text-gray-200" required/>
        <button className="rounded bg-[#c782a4] py-2 px-5 text-white">SIGN ME UP</button>
      </form>
    </div>
    </div>
   
  )
}

export default NewsletterBox
