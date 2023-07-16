import style from './cart.module.scss'
import Header from '../../components/Header/Header'
import CartBlock from '../../components/CartBlock/CartBlock'
import { useDispatch, useSelector } from 'react-redux'
import Empty from './empty/empty'
import Items from './Items/Items'
import { cartSelector, setClearAll } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const { cart, totalPrice } = useSelector(cartSelector)
    const totalCount = cart.reduce((sum, item) => sum + item.count, 0)
    const onClickClear = () => {
        dispatch(setClearAll())
    }


    return (
        <div>
            <Header />
            {cart == '' ? <Empty /> : (
                <>
                    <CartBlock />
                    <div className={style.wrapper}>
                        <div className={style.content}>

                            <div className={style.container}>

                                <div className={style.cart}>
                                    <div className={style.top}>
                                        <Link to='/shop/cactus'>
                                            <div className={style.back}>
                                                <img src="/assets/back1.svg" alt="" />
                                                <p>Вернуться</p>
                                            </div>
                                        </Link>
                                        <div onClick={onClickClear} className={style.clear}>
                                            <img src="/assets/delete.svg" alt="" />
                                            <p>Очистить корзину</p>
                                        </div>
                                    </div>
                                    <Items cart={cart} />
                                    <div className={style.bottom}>
                                        <div className={style.details}>
                                            <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                                            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                                        </div>
                                        <div className={style.payWrap}>
                                            <div className={style.pay}>
                                                <span>Оплатить сейчас</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div >
    )
}

export default Cart