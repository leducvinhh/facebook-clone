import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CloseIcon from '~/assets/icons/CloseIcon'
import IDivider from '~/components/IDivider'
import { getMonthName } from '~/utils'

interface IRegisterProps {
  onClose: () => void
}
const rangeYears = [...Array(new Date().getFullYear() - 1899)].map((_, index) => index + 1900).reverse()

export default function Register({ onClose }: IRegisterProps) {
  const { t } = useTranslation()
  const [valueGender, setValueGender] = useState('')

  return (
    <div className='bg-white  shadow-xl' onClick={(e) => e.stopPropagation()}>
      <div className='relative p-4'>
        <h6 className='text-3xl font-bold'>{t('AUTH.register')}</h6>
        <p className='text-base text-gray-500'>{t('AUTH.descriptionRegister')}</p>

        <div className='absolute right-4 top-4  cursor-pointer ' onClick={onClose}>
          <CloseIcon className='h-6 w-6 font-bold' />
        </div>
      </div>

      <IDivider />

      <form className='w-[432px] p-4'>
        <div className='mb-4 grid w-full grid-cols-2 gap-x-4'>
          <div className='col-span-1'>
            <input type='text' className='input-register' placeholder={t('AUTH.placeholderName')} />
          </div>
          <div className='col-span-1'>
            <input type='text' className='input-register' placeholder={t('AUTH.placeholderSurname')} />
          </div>
        </div>

        <div className='mb-4'>
          <input type='text' className='input-register' placeholder={t('AUTH.placerholderEmail')} />
        </div>

        <div className='mb-4'>
          <input type='text' className='input-register' placeholder={t('AUTH.newPassword')} />
        </div>

        <div className='mb-4'>
          <p>{t('AUTH.dayOfBirth')}</p>

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
          <p>{t('AUTH.gender')}</p>

          <div className=' grid grid-cols-3 gap-x-4 '>
            <label className='col-span-1 flex items-center justify-between rounded-sm border border-gray-300 px-3 leading-[36px]'>
              <span>{t('AUTH.female')}</span>
              <input type='radio' name='gender' value='female' onChange={(e) => setValueGender(e.target.value)} />
            </label>

            <label className='col-span-1 flex items-center justify-between rounded-sm border border-gray-300 px-3 leading-[36px]'>
              <span>{t('AUTH.male')}</span>
              <input type='radio' name='gender' value='male' onChange={(e) => setValueGender(e.target.value)} />
            </label>

            <label className='col-span-1 flex items-center justify-between rounded-sm border border-gray-300 px-3 leading-[36px]'>
              <span>{t('AUTH.custom')}</span>
              <input type='radio' name='gender' value='other' onChange={(e) => setValueGender(e.target.value)} />
            </label>
          </div>
        </div>

        {valueGender === 'other' && (
          <div className='mb-4'>
            <select name='' className='h-9 w-full rounded-sm border border-gray-300 p-1 outline-none' defaultValue=''>
              <option value='' disabled>
                {t('AUTH.pronoun')}
              </option>

              <option value='1'>{t('AUTH.pronoun1')}</option>
              <option value='2'>{t('AUTH.pronoun2')}</option>
              <option value='6'>{t('AUTH.pronoun3')}</option>
            </select>

            <p className='mb-2 text-xs text-gray-500'>{t('AUTH.pronounDescription')}</p>

            <input type='text' className='input-register' placeholder={t('AUTH.pronounPlaceholder')} />
          </div>
        )}

        <p className='mb-4 text-xs text-[#777]' dangerouslySetInnerHTML={{ __html: t('AUTH.terms') }} />

        <p className='mb-4 text-xs text-[#777]' dangerouslySetInnerHTML={{ __html: t('AUTH.policy') }} />

        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className=' h-9  min-w-[194px] rounded-md border-none bg-[#00a400] px-8 font-bold text-white hover:opacity-70'
          >
            {' '}
            {t('AUTH.register')}
          </button>
        </div>
      </form>
    </div>
  )
}
