import Sort from '../Sort/Sort'
import style from './shopitems.module.scss'
import ListItem from '../ListItem/ListItem'
import { useState } from 'react'
import BlockItem from '../BlockItem/BlockItem'
import Sidebar from '../Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

const ShopItems = ({ plants }) => {

  const { status } = useSelector(state => state.plants)
  const [isActive, setIsActive] = useState(true)

  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <Sidebar plants={plants} />
        <div className={style.shop}>
          <Sort isActive={isActive} setIsActive={setIsActive} />
          {status == 'error' ? <p className={style.error}>Не удалось загрузить товар 😔</p> : (
            (isActive) ?
              (
                plants.length > 0 ? (<div className={style.productsBlock}>
                  {
                    status == 'loading' ? [...new Array(10)].map((_, index) => <Loading key={index} />) : (
                      plants.map((item, index) => <BlockItem data={item} key={index} />))
                  }
                </div>) : <p className={style.notfound}>Ничего не найдено 😔</p>
              )
              : plants.length > 0 ? (<div className={style.productsList}>


                {plants.map((item, index) => <ListItem data={item} key={index} />)}

              </div>) : <p className={style.notfound}>Ничего не найдено 😔</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopItems