import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });

    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
  }, []);

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} exact />
          <Route path="/Cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
