// ---JSX，即JavaScript XML，一种在React组建内部构建标签的类XML语法。(增强React程序组件的可读性)

// ---绑定属性注意
//    class变成className
//    for变成htmlFor
//       ---这是因为class和for都是js里面的关键字
//    style属性跟以前的写法有些不一样
//      <span style={{marginLeft:'2px'}}>hello</span>

// ---组件名和类名首字母大写

import React, { useState } from 'react';
import './App.css';
import TestHook from './components/TestHook';
import TestClassExample from './components/TestClassExample';
import CustomHookTest from './components/CustomHookTest';
import TestReducer from './components/TestReducer';
import { ThemeContext } from './utils/themeContext';
// import Login from './components/login.tsx';
console.log(ThemeContext, 'ThemeContext');
function App() {
  const [num, setNum] = useState(0);
  const changeThemes= ()=> {
    setNum(num + 1);
    console.log(testReducerRef.current, 'testReducerRef'); // null 因为 TestReducer 是函数组件，函数组件没有实例，不能使用 ref
    console.log(buttonRef.current, 'buttonRef');
    console.log(testClassRef.current, 'testClassRef');
  }
  const testReducerRef = React.createRef(); // 不能给函数组件创建ref 但是可以在函数组件内部使用 ref，只要它指向一个 DOM 元素或 class 组件
  const buttonRef = React.createRef();
  const testClassRef = React.createRef();
  return (
    <div className="App">
      <ThemeContext.Provider value={num}>
        <TestHook/>

        <button ref={buttonRef} onClick={changeThemes}>按钮App</button>
      </ThemeContext.Provider>
      <TestClassExample ref={testClassRef}/>
      <CustomHookTest/>
      <TestReducer ref={testReducerRef}/>
    </div>
  );
}

export default App;
