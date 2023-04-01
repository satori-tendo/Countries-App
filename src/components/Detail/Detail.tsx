import React from 'react'
import { Container } from './Main.tsx'
import arrow from '../../assets/images/arrow.png'
import flag from '../../assets/images/bigflag.svg'
import s from './Detail.module.css'


function Detail() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <button className={s.button}><img className={s.arrow} src={arrow} alt="" /><span className={s.word}>Back</span></button>
                <div className={s.content}>
                    <img className={s.image} src={flag} alt="" />
                    <div className={s.text}>
                        <h1 className={s.title}>United States of America</h1>
                        <div className={s.other}>
                            <div className={s.column1}>
                                <ul className={s.list}>
                                    <li className={s.item}><b>Native name: </b> <span className={s.word}>Yoyoyo</span> </li>
                                    <li className={s.item}><b>Population: </b> <span className={s.word}>Yoyoyo</span> </li>
                                    <li className={s.item}><b>Region: </b> <span className={s.word}>Yoyoyo</span> </li>
                                    <li className={s.item}><b>Sub Region: </b> <span className={s.word}>Yoyoyo</span> </li>
                                    <li className={s.item}><b>Capital: </b> <span className={s.word}>Yoyoyo</span> </li>
                                </ul>
                            </div>
                            <div className={s.column2}>
                                <ul className={s.list}>
                                    <li className={s.item}><b>Top Level Domain: </b> <span className={s.word}>Yoyoyo</span></li>
                                    <li className={s.item}><b>Currencies: </b> <span className={s.word}>Yoyoyo</span></li>
                                    <li className={s.item}><b>Languages: </b> <span className={s.word}>Yoyoyo</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.borderCountries}>
                            <ul className={s.list}>
                                <li className={s.item}><b>Border Countries: </b>
                                    <span className={s.wordCountry}>Yoyoyo</span>
                                    <span className={s.wordCountry}>Yoyoyo</span>
                                    <span className={s.wordCountry}>Yoyoyo</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail