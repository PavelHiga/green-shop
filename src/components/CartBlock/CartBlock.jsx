import style from './cartblock.module.scss'

const CartBlock = () => {
    return (
        <>
            <div className={style.shop}>
                <div className={style.info}>
                    <h1>Корзина</h1>
                </div>
            </div>
        </>
    )
}

export default CartBlock