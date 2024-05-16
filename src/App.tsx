import './App.css'
import Header from './components/HeaderComponent'
import { BrowserRouter } from 'react-router-dom'
import Home from './views/home/Home.view'


function App() {
  return (
    <>
       
      <BrowserRouter>
        <Header 
          cartQuantity={0}
          productTypes={[]}
          wishlistQuantity={0}/>
        <Home/>
      </BrowserRouter>      
    </>
  )
}

export default App
