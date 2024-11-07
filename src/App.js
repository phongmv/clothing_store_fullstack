
import {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
const NavigationBar = lazy(() => import("./routes/navigation/navigation.component"))
const Authentication  = lazy(() => import("./routes/authentication/authentication.component"));
const Checkout = lazy(() => import ('./routes/checkout/checkout.component'))
const Shop = lazy(() => import("./routes/shop/shop.component"))
const Home = lazy(() => import("./routes/home/home.component"))
const App = () => {
  return (<Suspense fallback="...">
          <Routes>
              <Route path='/' element={ <NavigationBar/>}>
                  <Route index element={ <Home/> }/>
                  <Route path='shop/*' element={ <Shop/> }/>
                  <Route path='auth' element={ <Authentication/> }/>
                  <Route path='checkout' element={ <Checkout/> }/>
              </Route>
          </Routes>
  </Suspense>
  )
}

export default App;
