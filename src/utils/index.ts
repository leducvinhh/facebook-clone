export const getMonthName = (month: number) => {
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const monthsVi = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ]

  const currentLang = localStorage.getItem('lang') || 'vi'
  const months = currentLang === 'en' ? monthsEn : monthsVi

  return months[month]
}

export const normalizeKey = (key?: string) => key as unknown as TemplateStringsArray
