// 这是一个使用自定义 Hook 的例子
import React from 'react';
import { useArray } from '../utils/customHook';
interface P { // 接口，约定规范
  name: string,
  age: number
}
const CustomHookTest = () => {
  const persons: P[] = [
    {name : 'JJJ', age: 18},
    {name : 'BBB', age: 15},
  ]
  const {newArr, clear, removeIndex, add} = useArray(persons);
  return (
    <div>
      <button onClick={() => add({name: 'JJJ', age: 18})}>add JJJ</button>
      <button onClick={() => removeIndex(0)}>removeIndex 0</button>
      <button onClick={() => clear()}>clear</button>
      {
        newArr.map((per,index) => {
          return <p key={index}>
            <span>{index}</span>
            <span>{per.name}</span>
            <span>{per.age}</span>
          </p>
        })
      }
    </div>
  )
}
export default CustomHookTest