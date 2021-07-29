// useContext 的使用
import React, { useContext } from 'react';
import {ThemeContext} from '../utils/themeContext';
const TestContext = (props: any) => {
  let context = useContext(ThemeContext);
  return (
    <div>
      <p>这是 TestContext 组件里面的 {context}</p>
    </div>
  )
}

export default TestContext;
