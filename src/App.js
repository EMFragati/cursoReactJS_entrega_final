/*Importacion de plantilla de estilos */
  import './App.css';

/*Importacion de componentes.*/
  import { BrowserRouter, Route , Routes } from 'react-router-dom';  
  import  Cart from './components/Cart';
  import  CartContextProvider from './components/CartContext';
  import { Disclaimer } from './styles/CommonStyles';
  import  NavBar from './components/NavBar';
  import  ItemDetailContainer from './components/ItemDetailContainer';
  import  ItemListContainer from './components/ItemListContainer';  

/*Funcionalidad principal*/
  function App() {    
    return (
      <CartContextProvider>
        <BrowserRouter>  
          <Disclaimer/>    
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
      </CartContextProvider>
    );
  }

export default App;