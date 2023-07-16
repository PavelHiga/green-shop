import { useDispatch, useSelector } from 'react-redux'
import style from './items.module.scss'
import { setAddCart, setRemoveCart, setMinusCart } from '../../../redux/cartSlice'

const Items = ({ cart }) => {

    const dispatch = useDispatch()

    const onClickRemove = (id) => {
        dispatch(setRemoveCart(id))
    }

    const onClickPlus = (state) => {
        dispatch(setAddCart(state))
    }

    const onClickMinus = (state) => {
        dispatch(setMinusCart(state))
        console.log(state)
    }

    console.log(cart)

    return (
        <div className={style.items}>
            {cart.map((state, index) => (
                <div className={style.item} key={index}>
                    <div className={style.img}>
                        <img
                            src={state.img}
                            alt="img"
                        />
                    </div>
                    <div className={style.info}>
                        <h3>{state.title}</h3>
                    </div>
                    <div className={style.count}>
                        <button onClick={() => onClickMinus(state)}>-</button>
                        <b>{state.count}</b>
                        <button onClick={() => onClickPlus(state)}>+</button>
                    </div>
                    <div className={style.price}>
                        <b>{state.price} ₽</b>
                    </div>
                    <div className={style.remove}>
                        <button onClick={() => onClickRemove(state.id)}>
                            x
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items