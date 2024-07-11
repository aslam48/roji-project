// useLoginForm.ts
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface UseLoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void
}

const useLoginForm = ({ onSubmit }: UseLoginFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    validateOnMount: true,
    onSubmit: async (values) => {
      onSubmit(values)
    }
  })

  return { formik }
}

export default useLoginForm
