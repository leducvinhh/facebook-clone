import { yupResolver } from '@hookform/resolvers/yup'
import classnames from 'classnames'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import logo from '~/assets/images/logo.svg'
import IDivider from '~/components/IDivider'
import IModal from '~/components/IModal'
import { normalizeKey } from '~/utils'
import { schemas } from '~/utils/rules'
import Register from './components/Register'

const loginSchema = schemas.pick(['email', 'password'])
type LoginSchema = yup.InferType<typeof loginSchema>

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false)
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-[#f0f2f5] pb-[112px] pt-[72px]'>
      <div className='m-auto grid w-full max-w-[980px] grid-cols-5 gap-x-5 py-5'>
        <div className='col-span-3'>
          <div className=' h-[182px] md:pb-4 md:pt-[112px]'>
            <img src={logo} alt='logo' className='h-[106px] md:m-[-28px]' />
          </div>

          <p className='w-[500px] font-helve text-[28px] leading-8'>{t('AUTH.description')}</p>
        </div>

        <div className='col-span-2 h-[456px] w-[396px]'>
          <form className='mt-6 rounded-md bg-white p-4 pb-6 shadow-lg' onSubmit={onSubmit}>
            <div className='mb-2'>
              <input
                type='text'
                className={classnames('input-field', {
                  'border-red-500': errors.email?.message,
                  'border-gray-300': !errors.email?.message,
                  'focus:border-[#1b74e4]': !errors.email?.message,
                  'focus:border-red-500': errors.email?.message
                })}
                placeholder={t('AUTH.placerholderEmail')}
                {...register('email')}
              />
              <p className='min-h-[1.25rem] text-sm text-red-500'>{t(normalizeKey(errors.email?.message))}</p>
            </div>

            <div className='mb-2'>
              <input
                type='password'
                className={classnames('input-field ', {
                  'border-red-500': errors.password?.message,
                  'border-gray-300': !errors.password?.message,
                  'focus:border-[#1b74e4]': !errors.password?.message,
                  'focus:border-red-500': errors.password?.message
                })}
                placeholder={t('AUTH.placeholderPassword')}
                {...register('password')}
              />
              <p className='min-h-[1.25rem] text-sm text-red-500'>{errors.password?.message}</p>
            </div>

            <button
              type='submit'
              className='mt-4 flex w-full cursor-pointer items-center justify-center rounded-md bg-[#1877f2] px-4 text-xl font-bold leading-[48px] text-white'
            >
              {t('AUTH.buttonLogin')}
            </button>

            <div className='my-4 text-center'>
              <Link to='/' className='text-sm font-medium text-[#1877f2] hover:underline'>
                {t('AUTH.forgottenPassword')}
              </Link>
            </div>

            <IDivider />

            <div className='mt-6 flex items-center justify-center'>
              <button
                className='rounded-md bg-[#42b72a] px-4 text-[17px] font-bold leading-[48px] text-white'
                type='button'
                onClick={() => setShowRegister(true)}
              >
                {t('AUTH.buttonCreateAccount')}
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
