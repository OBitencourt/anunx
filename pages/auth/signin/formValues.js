import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),
    password: yup.string()
        .min(6, 'Insira no mínimo 6 caracteres')
        .required('Campo obrigatório'),

})

export const initialValues = {

    email: '',
    password: '',

}