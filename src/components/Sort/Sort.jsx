import { useDispatch, useSelector } from 'react-redux'
import style from './sort.module.scss'
import { setSortId, setOrderBy, setSearchValue, setInputValue} from '../../redux/filterSlice'
import { useCallback, useState } from 'react'
import debounce from 'lodash.debounce'

const Sort = ({ setIsActive, isActive }) => {
  const dispatch = useDispatch()
  
  const { sortId, inputValue } = useSelector(state => state.filter.filters)
  const sortList = [

    { name: 'Популярности', sort: 'rating' },
    { name: 'Цене', sort: 'price' },
    { name: 'Названию', sort: 'title' }
  ]
  const [isPopUpActive, setIsPopUpActive] = useState(false)
  const handleClickOrder = () => {
    dispatch(setOrderBy())
  }

  const inputChange = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value))
    }, 500),
    []
  )


  const onChangeInput = (value) => {
    inputChange(value)
    dispatch(setInputValue(value))
  }



  const handleClickSort = (value) => {
    dispatch(setSortId(value))
    setIsPopUpActive(false)
  }





  return (
    <div className={style.sort}>
      <div className={style.input}>
        <input onChange={(e) => onChangeInput(e.target.value)} value={inputValue} placeholder='Поиск растений' type="text" />
      </div>
      <div className={style.sortWrap}>
        <img onClick={() => handleClickOrder()} src="/assets/arrow.svg" alt="arrow" />
        <div className={style.sortpopup}>
          <div className={style.label}>
            <b>Сортировка по:</b>
            <span onClick={() => setIsPopUpActive(!isPopUpActive)}>{sortId.name}</span>
          </div>
          {(isPopUpActive) &&
            <div className={style.popup}>
              <ul>
                {sortList.map((value, index) =>
                  <li
                    onClick={() => handleClickSort(value)}
                    className={value.sort === sortId.sort ? style.active : ''}
                    key={index}>
                    {value.name}
                  </li>)}
              </ul>
            </div>
          }
        </div>
        <div className={style.btn}>
          <button onClick={() => setIsActive(true)}><img className={isActive ? style.activeBtn : ''} src="/assets/item.svg" alt="" /></button>
          <button onClick={() => setIsActive(false)}><img className={isActive ? '' : style.activeBtn} src="/assets/item2.svg" alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Sort