import React from 'react';
import style from './header.module.scss';
import logo from '../../assets/img/logo.svg';

export default function Header(){

    return(
        <header className={style.header}>

            <section className={style.header__cabecalho}>
            
            <img className={style.header__cabecalho__container__tittle} src={logo} alt="logo alura store"/>
            </section>

        </header>
    )
}