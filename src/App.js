import Header from './Components/MainComponents/Header';
import SummaryAndMenuList from './Components/MainComponents/SummaryAndMenuList';
import './App.css';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Cart/>
      <Header/>
      <SummaryAndMenuList/>
    </div>
  );
}

export default App;
