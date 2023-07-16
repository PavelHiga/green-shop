import { useSelector } from 'react-redux'
import style from './header.module.scss'
import { Link } from "react-router-dom"
import { cartSelector } from '../../redux/cartSlice'

const Header = () => {

  const {cart} = useSelector(cartSelector)
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0)
  
  return (
  <>
    <div className={style.header}>
      <div className={style.wrapper}>
        <Link to='/'><img src="/Logo.svg" alt="logo" /></Link>
        <div className={style.user}>
          <div className={style.trash}>
            <Link to='/cart'><img src="/trash.svg" alt="trash" /></Link>
            <p>{totalCount}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Header