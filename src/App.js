import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setPizzas } from './redux/actions/pizzasAction';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (

//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };
// // it is possible if the name action is one
// // {
// //   setPizzas,
// // };
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App() {
//   const [pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });

//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => {
//     //     setPizzas(json.pizzas);
//     //   });
//   }, []);

//   return (

// }
