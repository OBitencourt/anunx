import * as yup from 'yup'

export const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    name: '',
    phone: '',
    email: '',
    files: []
}


export const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande.')
        .required('Campo obrigatório'),
    
    category: yup.string()
        .required('Campo obrigatório'),
    description: yup.string()
        .min(30, 'Escreva uma descrição com pelo menos 30 caracteres')
        .required('Campo obrigatório'),
    price: yup.number()
        .required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido')
        .required('Campo obrigatório'),
    name: yup.string()
        .required('Campo obrigatório'),
    phone: yup.number('Digite um telefone válido')
        .required('Campo obrigatório'),
    files: yup.array()
        .min(1, 'Envie pelo menos uma foto')
        .required('Campo obrigatório')
})

