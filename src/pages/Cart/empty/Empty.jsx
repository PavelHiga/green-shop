import { Link } from 'react-router-dom'
import style from './empty.module.scss'

const Empty = () => {
  return (
    <div className={style.empty}>
      <img src="/assets/empty.svg" alt="" />
      <h3>В корзине пусто</h3>
      <p>Перейдите в каталог, чтобы <br />
        добавить нужные товары</p>
      <Link to='/shop/cactus'>
        <div className={style.button}>
          <p>Перейти в каталог</p>
        </div>
      </Link>
    </div>
  )
}

export default Empty