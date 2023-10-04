
import './App.css';



const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' alt='' src='https://tse3.mm.bing.net/th?id=OIP.eyFnutyvj4Pu_a5YsSfvfQHaEp&pid=Api&P=0&h=180' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search-container'>search</div>
      <div className='res-container'>
        <div className='res-card'>
          <ResCard />
        </div>
      </div>
    </div>
  );
}

const ResCard = () => {
  return (
    <div className='card'>

      <h3>Meghana Foods</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
