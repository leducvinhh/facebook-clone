import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo.svg'
import IModal from '~/components/IModal'
import Register from './components/Register'
import IDivider from '~/components/IDivider'

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div className='bg-[#f0f2f5] pb-[112px] pt-[72px]'>
      <div className='m-auto grid w-full max-w-[980px] grid-cols-5 gap-x-5 py-5'>
        <div className='col-span-3'>
          <div className=' h-[182px] md:pb-4 md:pt-[112px]'>
            <img src={logo} alt='logo' className='h-[106px] md:m-[-28px]' />
          </div>

          <p className='font-helve w-[500px] text-[28px] leading-8'>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className='col-span-2 h-[456px] w-[396px]'>
          <form className='mt-6 rounded-md bg-white p-4 pb-6 shadow-lg'>
            <input type='text' className='input-field mb-4' placeholder='Email address or phone number' />
            <input type='password' className='input-field' placeholder='Password' />

            <button
              type='submit'
              className='mt-4 flex w-full cursor-pointer items-center justify-center rounded-md bg-[#1877f2] px-4 text-xl font-bold leading-[48px] text-white'
            >
              Log in
            </button>

            <div className='my-4 text-center'>
              <Link to='/' className='text-sm font-medium text-[#1877f2] hover:underline'>
                Forgotten password?
              </Link>
            </div>

            <IDivider />

            <div className='mt-6 flex items-center justify-center'>
              <button
                className='rounded-md bg-[#42b72a] px-4 text-[17px] font-bold leading-[48px] text-white'
                type='button'
                onClick={() => setShowRegister(true)}
              >
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>

      {showRegister && (
        <IModal onClose={() => setShowRegister(false)} open={showRegister}>
          <Register onClose={() => setShowRegister(false)} />
        </IModal>
      )}
    </div>
  )
}
