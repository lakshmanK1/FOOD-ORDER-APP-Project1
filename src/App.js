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
    <div className="App">
     {handleCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <SummaryAndMenuList/>
    </div>
  );
}

export default App;
