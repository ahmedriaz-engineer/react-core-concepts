import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: "PhotoShop", price: "$99.99" },
    { name: "Illustrator", price: "$199.99" },
    { name: "Pdf Reader", price: "$199.99" },
    { name: "Ms office", price: "$199.99" }
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);

  const nayoks = ["razzak", "sabana", "kobori", "Manna", "salman", "Joshim"];
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>I'm a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {/* <Product name ={products[0].name}  price = {products[0].price}></Product>
        <Product name = {products[1].name} price = {products[1].price} ></Product> */}
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]} ></Product>

      </header>
    </div>
  );
}
function Product(props) {

  const productStyle = { border: "2px solid red", margin: "10px", padding: "10px", borderRadius: "10px", width: "400px", height: "400px", backgroundColor: "lightgray" }
  return (
    <div style={productStyle} >
      <h2>Name: {props.product.name} </h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (<div style={{ border: "2px solid red", margin: "10px", padding: "10px", borderRadius: "10px", width: "400px" }}>
    <h1>Name: {props.name}</h1>
    <h2>Favorite Food: {props.favFood} </h2>
    <h3>The Supper Programmer</h3>
  </div>);
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>count: {count}</h1>
      {/* <button onClick = {handleIncrease}>Increase</button> */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  return (<div>
    <h1>Dynamic Users: {users.length}</h1>
    {
      console.log(users)
    }
    {
      users.map(user=> <li>{user.name}</li>)
    }
  </div>)
}
export default App;
