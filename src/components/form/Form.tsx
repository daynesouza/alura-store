import Input from './input/Input';
import style from './form.module.scss';
import '../../index.css';
import { Iproduto } from '../../types/produto';
import Button from './button/Button';

export default function Form(){
    function adicionarProduto(){
        return;
    }
    return(
        <form className={style.cadastroProduto} onSubmit={adicionarProduto}>
            <h2 className={style.cadastroProdutoTittle}>Adicionar novo produto</h2>

            <fieldset className={style.cadstroProduto__container}>
                <label className={style.cadastroProduto__label}>Nome</label>
                <Input
                    nome='nome'
                    id='nome'
                    type='text'
                    placeholder='Digite o nome do produto'
                    required = {true}
                />

                <label className={style.cadastroProduto__label}>Preço</label>
                <Input
                    nome='preco'
                    id='preco'
                    type='text'
                    placeholder='Digite o preço do produto'
                    required = {true}
                />

                <label className={style.cadastroProduto__label}>Imagem </label>
                <Input
                    nome='imagem'
                    id='imagem'
                    type='file'
                    placeholder=''
                    required = {true}
                />               

                <label className={style.cadastroProduto__label}>Departamento</label>
                <select className={style.cadastroProduto__select}>
                    <option value='Feminino'>Feminino</option>
                    <option value='Infantil'>Infanfil</option>
                    <option value='Masculino'>Masculino</option>
                </select>
            </fieldset>

            <Button>Adicionar</Button>
        </form>
    )
}