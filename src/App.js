import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import Children from "./components/Children"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function App() {
  let count = useSelector(state => state.count)
  let box = useSelector(state => state.box)
  let dispatch = useDispatch();
  const increseNum = () => {

    dispatch({ type: "Increment", payLoad: "" })//dispatch send action, and action is object

  }

  return (
    <div className="App ">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => increseNum()}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement", payload: { num: 1, message: "Awsome" } })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <Form className="myForm">
        <Form.Group controlId="exampleForm.ControlInput1 " className="pl-5">
          <Form.Label></Form.Label>
          <Form.Control type="box" placeholder="Please input color" />
        </Form.Group>

      </Form>
      <Children/>
      

    </div>
  );
}

export default App;
