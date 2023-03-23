import Form from '../form/Form';
import style from './main.module.scss';
import {Iproduto} from '../../types/produto';

interface Props {
    produtos: Iproduto[],
    setProdutos: React.Dispatch<React.SetStateAction<Iproduto[]>>
}

export default function Main( { produtos, setProdutos }: Props ){
    return(
        <main className={style.main}>

            <section className={style.main__cadastroProduto}>
                <Form />
            </section>

            <section className={style.main__produto}>
                <h2>Feminino</h2>
            </section>

            <section className={style.main__produto}>
            <h2>Infantil</h2>
            </section>

            <section className={style.main__produto}>
                <h2>Masculino</h2>
            </section>

        </main>
    )
}