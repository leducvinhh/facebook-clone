import { useState } from 'react'
import CloseIcon from '~/assets/icons/CloseIcon'
import IDivider from '~/components/IDivider'
import { getMonthName } from '~/utils'

interface IRegisterProps {
  onClose: () => void
}
const rangeYears = [...Array(new Date().getFullYear() - 1899)].map((_, index) => index + 1900).reverse()

export default function Register({ onClose }: IRegisterProps) {
  const [valueGender, setValueGender] = useState('')

  return (
    <div className='bg-white  shadow-xl' onClick={(e) => e.stopPropagation()}>
      <div className='relative p-4'>
        <h6 className='text-3xl font-bold'>Sign Up</h6>
        <p className='text-base text-gray-500'>It's quick and easy.</p>

        <div className='absolute right-4 top-4  cursor-pointer ' onClick={onClose}>
          <CloseIcon className='h-6 w-6 font-bold' />
        </div>
      </div>

      <IDivider />

      <form className='w-[432px] p-4'>
        <div className='mb-4 grid w-full grid-cols-2 gap-x-4'>
          <div className='col-span-1'>
            <input type='text' className='input-register' placeholder='First name' />
          </div>
          <div className='col-span-1'>
            <input type='text' className='input-register' placeholder='Surname' />
          </div>
        </div>

        <div className='mb-4'>
          <input type='text' className='input-register' placeholder='Mobile number or email address' />
        </div>

        <div className='mb-4'>
          <input type='text' className='input-register' placeholder='New password' />
        </div>

        <div className='mb-4'>
          <p>Date of birth</p>

          <div className=' grid grid-cols-3 gap-x-4'>
            <div className='col-span-1'>
              <select name='' className='h-9 w-full rounded-sm border border-gray-300 p-1 outline-none'>
                {[...Array(31)].map((_, index) => (
                  <option value={index + 1} key={index}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-span-1'>
              <div className='col-span-1'>
                <select name='' className='h-9 w-full rounded-sm border border-gray-300 p-1 outline-none'>
                  {[...Array(12)].map((_, index) => (
                    <option value={index + 1} key={index}>
                      {getMonthName(index)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='col-span-1'>
              <select name='' className='h-9 w-full rounded-sm border border-gray-300 p-1 outline-none'>
                {rangeYears.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='mb-4'>
          <p>Gender</p>

          <div className=' grid grid-cols-3 gap-x-4 '>
            <label className='col-span-1 flex items-center justify-between rounded-sm border border-gray-300 px-3 leading-[36px]'>
              <span>Female</span>
              <input type='radio' name='gender' value='female' onChange={(e) => setValueGender(e.target.value)} />
            </label>

            <label className='col-span-1 flex items-center justify-between rounded-sm border border-gray-300 px-3 leading-[36px]'>
              <span>Male</span>
              <input type='radio' name='gender' value='male' onChange={(e) => setValueGender(e.target.value)} />
            </label>

            <label className='col-span-1 flex items-center justify-between rounded-sm border border-gray-300 px-3 leading-[36px]'>
              <span>Custom</span>
              <input type='radio' name='gender' value='other' onChange={(e) => setValueGender(e.target.value)} />
            </label>
          </div>
        </div>

        {valueGender === 'other' && (
          <div className='mb-4'>
            <select
              name=''
              className='h-9 w-full rounded-sm border border-gray-300 p-1 outline-none'
              defaultValue=''
              onChange={(e) => setValueGender(e.target.value)}
            >
              <option value='' disabled>
                Select your pronoun
              </option>

              <option value='1'>She: "Wish her a happy birthday!"</option>
              <option value='2'>He: "Wish him a happy birthday!"</option>
              <option value='6'>They: "Wish them a happy birthday!"</option>
            </select>

            <p className='mb-2 text-xs text-gray-500'>Your pronoun is visible to everyone.</p>

            <input type='text' className='input-register' placeholder='Gender (optional)' />
          </div>
        )}

        <p className='mb-4 text-xs text-[#777]'>
          People who use our service may have uploaded your contact information to Facebook.{' '}
          <a
            href='https://www.facebook.com/help/637205020878504'
            target='_blank'
            className='text-[#385898] hover:underline'
          >
            Learn more.
          </a>
        </p>

        <p className='mb-4 text-xs text-[#777]'>
          By clicking Sign Up, you agree to our{' '}
          <a
            className='hover:underline] text-[#385898]'
            href='https://www.facebook.com/legal/terms/update'
            target='_blank'
          >
            Terms
          </a>
          ,{' '}
          <a
            className='hover:underline] text-[#385898]'
            href='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'
            target='_blank'
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            className='hover:underline] text-[#385898]'
            href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'
            target='_blank'
          >
            Cookies Policy
          </a>
          . You may receive SMS notifications from us and can opt out at any time.
        </p>

        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className=' h-9  min-w-[194px] rounded-md border-none bg-[#00a400] px-8 font-bold text-white hover:opacity-70'
          >
            {' '}
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
