import fakeData from "../src/fakeData/Package.json"
import './App.css';
import { useState } from 'react';
import Header from "./Components/Header/Header";
import Followers from "./Components/Followers/Followers";
import Cart from "./Components/Cart/Cart";
// import { useEffect } from 'react';

function App() {
  const following = fakeData
  const [stars, setStars] = useState(following);

  // useEffect(()=>{
    
  //   fetch(following)
  //   .then(res => res.json())
  //   .then(data => setStars(data))
  // }, []);
  return (
    <div className="App">
      <Header></Header>
      <div>
      {
        stars.map(star => <Followers follow={star}></Followers>)
      }
      <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
