import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import IDivider from '~/components/IDivider'

export default function Footer() {
  const { i18n } = useTranslation()

  const langs =
    i18n.language === 'vi'
      ? [
          { name: 'Tiếng Việt', code: 'vi' },
          { name: 'English (UK)', code: 'en' }
        ]
      : [
          { name: 'English (UK)', code: 'en' },
          { name: 'Tiếng Việt', code: 'vi' }
        ]

  return (
    <div className='flex h-20 w-full items-center justify-center '>
      <div className='m-auto w-full max-w-[980px]'>
        <div className='mb-2'>
          {langs.map((lang) => (
            <button
              key={lang.code}
              className={classnames('mr-2 text-xs text-[#737373]', {
                'cursor-text': i18n.language === lang.code,
                'hover:underline': i18n.language !== lang.code
              })}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                localStorage.setItem('lang', lang.code)
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>

        <IDivider />

        <p className='mt-4 text-center'>Meta © 2024</p>
      </div>
    </div>
  )
}
