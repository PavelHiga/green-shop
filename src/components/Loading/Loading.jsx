import style from './loading.module.scss'

const Loading = () => {
  return (
    <div>
        <div className={style.skeleton}></div>
    </div>
  )
}

export default Loading