import { useDispatch, useSelector } from 'react-redux'
import style from './sidebar.module.scss'
import { setPrice, setRemoveFilters, setSidebarCategory, setSidebarCategory2, } from '../../redux/filterSlice'
import { useState, useEffect } from 'react'

const Sidebar = () => {

    const dispatch = useDispatch()

    const { categoryId } = useSelector(state => state.filter)
    const { remove } = useSelector(state => state.filter)

    const [priceActive, setPriceActive] = useState('')
    const [activeCategory1, setActiveCategory1] = useState('')
    const [activeCategory2, setActiveCategory2] = useState('')

    const priceArr = [
        { name: 'до 1000 ₽', type: { a: null, b: 1000 } },
        { name: '1000 - 2500 ₽', type: { a: 1000, b: 2500 } },
        { name: '2500 - 5000 ₽', type: { a: 2500, b: 5000 } },
        { name: 'от 5000 ₽', type: { a: 5000, b: null } }
    ]

    const waterArr = ['Обильный', 'Умеренный', 'Слабый']
    const countyArr = ['Россия', 'Турция', 'Грузия']
    const color = ['Черный', 'Белый']

    const onClickSidebarCategory = (value, index) => {
        dispatch(setSidebarCategory(value))
        setActiveCategory1(index)
    }
    const onClickSidebarCategory2 = (value, index) => {
        dispatch(setSidebarCategory2(value))
        setActiveCategory2(index)
    }

    const onClickPrice = (value, index) => {
        dispatch(setPrice(value))
        setPriceActive(index)

    }

    const onClickButton = () => {
        dispatch(setRemoveFilters())
    }

    useEffect(() => {
        setPriceActive(null)
        setActiveCategory1(null)
        setActiveCategory2(null)
    }, [categoryId, remove])

    return (
        <div className={style.sidebar}>
            <div className={style.info}>
                <h3>Цена</h3>
                <div>
                    {priceArr.map((item, index) => (
                        <div onClick={() => onClickPrice(item.type, index)} key={index} className={style.checkbox}>
                            <p className={priceActive == index ? style.active : ''}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {categoryId == 'Горшки' ? (
                <div className={style.info}>
                    <h3>Цвет</h3>
                    {color.map((item, index) => (
                        <div onClick={() => onClickSidebarCategory({ type: 'color', value: item }, index)} key={index} className={style.checkbox}>
                            <p className={activeCategory1 == index ? style.active : ''}>{item}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={style.info}>
                    <h3>Полив</h3>
                    {waterArr.map((item, index) => (
                        <div onClick={() => onClickSidebarCategory({ type: 'water', value: item }, index)} key={index} className={style.checkbox}>
                            <p className={activeCategory1 == index ? style.active : ''}>{item}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className={style.info}>
                <h3>Страна</h3>
                {countyArr.map((item, index) => (
                    <div key={index} onClick={() => onClickSidebarCategory2({ type: 'country', value: item }, index)} className={style.checkbox}>
                        <p className={activeCategory2 == index ? style.active : ''}>{item}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => onClickButton()}>Сбросить</button>
        </div>
    )
}

export default Sidebar