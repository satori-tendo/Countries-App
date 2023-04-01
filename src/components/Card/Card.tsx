import React, {FC} from 'react'
import s from './Card.module.css' 
import { Country } from '../Main/Main'

const Card: FC<Country> = ({flags, name, population, region, capital}) => {
  return (
    <div className={s.wrapper}>
        <img className={s.image} src={flags} alt="" />
        <div className={s.info}>
            <div className={s.countryWrapper}>{name.common}</div>
            <div className={s.paragraph}>Population: <span> </span> <div className={s.subparagraph}>{population}</div></div>
            <div className={s.paragraph}>Region: <span> </span> <div className={s.subparagraph}>{region}</div></div>
            <div className={s.paragraph}>Capital: <span> </span> <div className={s.subparagraph}>{capital}</div></div>
        </div>
    </div>
  )
}


export default Card