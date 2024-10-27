import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),
    name: yup.string()
        .required('Campo obrigatório'),
    password: yup.string()
        .min(6, 'Insira no mínimo 6 caracteres')
        .required('Campo obrigatório'),
    passwordConf: yup.string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
})

export const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
}