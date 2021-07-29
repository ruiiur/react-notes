// useState useEffect 的使用
import React, { useEffect, useState } from 'react';
import TestContext from './TestContext';

const TestHook = (props: any) => {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = `${count}这是标题哦`
  }, [count]) // 第二个参数是个数组
  // 不写第二个参数代表每次渲染都会执行
  // 可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
  return (
    <div>
      <p>这是{count}</p>
      <TestContext/>
      <button onClick={changeCount}>按钮</button>
    </div>
  )
}

export default TestHook;