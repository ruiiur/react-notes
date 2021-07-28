// ---JSX，即JavaScript XML，一种在React组建内部构建标签的类XML语法。(增强React程序组件的可读性)

// ---绑定属性注意
//    class变成className
//    for变成htmlFor
//       ---这是因为class和for都是js里面的关键字
//    style属性跟以前的写法有些不一样
//      <span style={{marginLeft:'2px'}}>hello</span>

// ---组件名和类名首字母大写

import './App.css';
import TestHook from './components/TestHook';
import TestClassExample from './components/TestClassExample';
import CustomHookTest from './components/CustomHookTest';
// import Login from './components/login.tsx';

function App() {
  return (
    <div className="App">
     <TestHook/>
     <TestClassExample/>
     <CustomHookTest/>
    </div>
  );
}

export default App;
