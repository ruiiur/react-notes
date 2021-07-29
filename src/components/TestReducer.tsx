// useReducer 的使用
import React, { useReducer } from 'react';

const TestReducer = (props: any) => {
  const initState = {count: 0};
  const reducerFun = (state:any, action:any) => {
    switch (action.type) {
      case 'add':
        return {count: state.count + 1};
      case 'minus':
        return {count: state.count - 1};
      default:
        return {count: 0}
    }
  }
  const [countObj, dispatchCount] = useReducer(reducerFun, initState);
  return (
    <div>
      <p>这是useReducer 例子中的{countObj.count}</p>
      <button onClick={() => {dispatchCount({type: 'add'})}}>+</button>
      <button onClick={() => {dispatchCount({type: 'minus'})}}>-</button>
    </div>
  )
}

export default TestReducer;