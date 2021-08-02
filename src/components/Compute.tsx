// redux 的使用
// store.getState() 获取整个状态树
// store.dispatch() 改变状态，改变 state 的唯一方法
// store.subscribe() 订阅一个函数， 每当 state 改变时，都会去调用这个函数
import React, {useCallback, useState, useMemo} from 'react';
import { connect } from 'react-redux';
import { addAction, subtractAction, multiplyAction } from '../redux/actions';
import ComputeSub from './ComputeSub';
import ComputeFoo from './ComputeFoo';
import ComputeBar from './ComputeBar';

const Compute = (props: any) => {
  const {count, list, add, subtract, multiply} = props;
  const [range, setRange] = useState(100);
  console.log('Compute');
  const memoizedCallback = useCallback(() => {
    console.log('memoizedCallback');
    let list = [];
    for(let i = 0; i < range; i ++) {
      list.push(i);
    }
    return list;
  }, [range]);
  const memoizedValue = useMemo(() => {
    console.log('memoizedValue');
    let list = [];
    for(let i = 0; i < range; i ++) {
      list.push(i);
    }
    return list;
  }, [range]);
  return (
    <div>
      <p>这是redux {count}</p>
      <button onClick={() => {add(1)}}>+</button>
      <button onClick={() => {subtract(1); setRange(10)}}>-</button>
      <button onClick={() => {multiply(1)}}>*</button>
      <ComputeSub list={list}/>
      <ComputeFoo memoizedCallback={memoizedCallback}/>
      <ComputeBar memoizedValue={memoizedValue}/>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    count: state.count,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch: any) => {
   return {
      add: (n:number) => dispatch(addAction(n)),
      subtract: (n:number) => dispatch(subtractAction(n)),
      multiply: (n:number) => dispatch(multiplyAction(n)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compute);