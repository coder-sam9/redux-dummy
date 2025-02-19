import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import store from '../store';
import { login } from '../store/slices/auth-slice';
import { decrement, increase, increment } from '../store/slices/counter-slice';

const Counter = () => {
  const dispath=useDispatch();
  const counter=useSelector((state)=>state.counter)
  const toggleIncrementCounterHandler = () => {
    dispath(increment())
  };
  const toggleIncrementBy2CounterHandler = () => {
    dispath(increase(2))
  };
  const toggleDecrementCounterHandler = () => {
    dispath(decrement())
  };
  const toggleDecrementBy2CounterHandler = () => {
    dispath(increase(-2))
  };
  console.log(counter);
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.counter}</div>
      <div style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
      <button onClick={toggleDecrementCounterHandler}>Toggle Counter by -1</button>
      <button onClick={toggleIncrementCounterHandler}>Toggle Counter by +1</button>
      <button onClick={toggleDecrementBy2CounterHandler}>Toggle Counter by -2</button>
      <button onClick={toggleIncrementBy2CounterHandler}>Toggle Counter by +2</button>

      </div>
    </main>
  );
};

export default Counter;

