import style from './listitem.module.scss'

const ListItem = ({ data }) => {

  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <img src={data.img} alt={data.title} />
        <h4>{data.title}</h4>
        <div className={style.btn}>
          <p>{data.price} ₽</p>
          <button>В корзину</button></div>
      </div>
    </div>
  )
}

export default ListItem