import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import style from './home.module.scss'

const Home = () => {
  return (
    <div>
      <Header />
      <div className={style.info}>
        <div className={style.product}>
          <div className={style.wrapper}>
            <h1>Комнатные растения</h1>
            <h3>большой выбор комнатных растений для квартиры, офиса, дома и дачи</h3>
            <Link to='/shop/cactus'><button>Каталог</button></Link>
          </div>
          <img src="/public/assets/bg.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home