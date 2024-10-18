import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";


const Shop = () => {
    return <div>
        <h1>This is shop</h1>
    </div>
}

const App = () => {
  return (
      <Routes>
          <Route path='/' element={ <NavigationBar/>}>
              <Route index element={ <Home/> }/>
              <Route path='shop' element={ <Shop/> }/>
              <Route path='auth' element={ <Authentication/> }/>
          </Route>
      </Routes>
  )
}

export default App;
