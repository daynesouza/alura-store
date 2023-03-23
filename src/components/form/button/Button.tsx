import style from './button.module.scss';
import '../../../index.css'

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

export default function Button( {onClick, type, children }: Props ){
    return(
        <button
            onClick={onClick}
            type={type}
            className={style.botao}
        >
            {children}
        </button>
    )
}