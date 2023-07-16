import { Link } from 'react-router-dom'
import style from './categories.module.scss'
import { categoriesArr } from './categoriesArr'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setSidebarCategory } from '../../redux/filterSlice'

const Categories = () => {

    const dispatch = useDispatch()
    const { categoryId } = useSelector(state => state.filter)
    const activeCategory = (item) => {
        dispatch(setCategoryId(item))
    }
    const handleClick = (item) => {
        activeCategory(item)
        dispatch(setSidebarCategory({ name: 'Все' }))
    }
    return (
        <div className={style.categories}>
            <div className={style.wrapper}>
                {categoriesArr.map((item) =>
                    <Link onClick={() => handleClick(item.name)} to={`${item.link}`} key={item.id}>
                        <div className={categoryId == item.name ? style.active : style.container}>
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Categories