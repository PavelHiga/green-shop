import { useDispatch } from 'react-redux'
import style from './blockitem.module.scss'
import { setAddCart } from '../../redux/cartSlice'

const BlockItem = ({ data }) => {

  const dispatch = useDispatch()

  const handleClick = (data) => {
    dispatch(setAddCart(data))
  }


  return (

    <div className={style.wrapper}>
      <div className={style.item}>
        <img src={data.img} alt={data.title} />
        <h4>{data.title}</h4>
        <p>{data.price} ₽</p>
        <button onClick={() => handleClick(data)}>В корзину</button>
      </div>
    </div>

  )
}

export default BlockItem