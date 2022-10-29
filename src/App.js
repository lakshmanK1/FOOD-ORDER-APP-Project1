import CartProvider from './Store/CartProvider';
import Header from './Components/MainComponents/Header';
import SummaryAndMenuList from './Components/MainComponents/SummaryAndMenuList';
import Cart from './Components/Cart/Cart';
import React,{useState} from 'react';

function App() {
  const [handleCart, setHandleCart] = useState(false);

  const showCartHandler = () => {
    setHandleCart(true);
  }

  const hideCartHandler = () => {
    setHandleCart(false);
  }
  return (
    <CartProvider>
     {handleCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <SummaryAndMenuList/>
    </CartProvider>
  );
}

export default App;
