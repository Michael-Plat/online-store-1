import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { setPizzas } from './redux/actions/pizzasAction';

import { Header } from './components';
import { Home, Cart } from './pages';

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

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} exact />
            <Route path="/Cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};
// it is possible if the name action is one
// {
//   setPizzas,
// };
export default connect(mapStateToProps, mapDispatchToProps)(App);
