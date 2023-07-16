import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesArr } from './components/Categories/categoriesArr'
import Cart from './pages/Cart/Cart'
import ShopItems from './components/ShopItems/ShopItems'
import { fetchPlants } from './redux/plantsSlice'

const App = () => {

  const dispatch = useDispatch()
  const { plants } = useSelector(state => state.plants)
  const { categoryId, filters } = useSelector(state => state.filter)

  const data = async () => {
    
    const category = categoryId.toLowerCase()
    const sort = filters.sortId.sort
    const order = filters.orderBy == true ? 'desc' : 'asc'
    const search = filters.searchValue
    const priceA = filters.price.a ? `&price_gte=${filters.price.a}` : ''
    const priceB = filters.price.b ? `&price_lte=${filters.price.b}` : ''
    const sidebarCategory = filters.sidebarCategory ? `&${filters.sidebarCategory.type}=${filters.sidebarCategory.value}` : ''
    const sidebarCategory2 = filters.sidebarCategory2 ? `&${filters.sidebarCategory2.type}=${filters.sidebarCategory2.value}` : ''
  
    dispatch(fetchPlants({
      category,
      sort,
      order,
      search,
      priceA,
      priceB,
      sidebarCategory,
      sidebarCategory2
    }))
  }



  useEffect(() => {
    data()
  }, [categoryId, filters.sortId, filters.orderBy, filters.searchValue, filters.price, filters.sidebarCategory, filters.sidebarCategory2])

  return (


    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop/*' element={<Layout />}>
          {categoriesArr.map((item, index) =>
            <Route
              path={item.link}
              element={
                <ShopItems plants={plants} />
              }
              key={index} />)}
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

