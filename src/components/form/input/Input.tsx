import style from './input.module.scss';

interface Props{
    nome: string,
    id: string,
    type: string,
    placeholder: string,
    required: boolean | false
}

export default function Input( {nome, id, type, placeholder, required}:Props ){
    console.log(required);
    return(
        <input
            name={nome}
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className={style.input}
           /*  {true ? 'required' : ''} */
        />
    )
}