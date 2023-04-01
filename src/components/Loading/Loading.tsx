import React, {FC} from 'react'
import loadingGif from '../../assets/loading-gif.gif'
import s from './Loading.module.css'

const Loading: FC = () => {
  return (
    <div className={s.wrapper}>
        <img className={s.loadingImg} src={loadingGif} alt="" />
    </div>
  )
}

export default Loading