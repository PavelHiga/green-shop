import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import Info from '../../components/About/About'
import { Outlet } from 'react-router'
import style from './layout.module.scss'
const Layout = () => {

  return (
    <div>
      <Header />
      <Info />
      <div className={style.shop}>
        <Categories />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout