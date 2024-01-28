import * as yup from 'yup'

export const schemas = yup.object().shape({
  email: yup.string().email('AUTH.invalidEmail').required('AUTH.requiredEmail'),
  password: yup.string().required()
})
