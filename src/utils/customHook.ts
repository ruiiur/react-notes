// 这是一个 customHook 的例子
// 这个 customHook 中用到了泛型，用到了其他的 Hook
// 只在最顶层使用 Hook， 不要在循环，条件或嵌套函数中调用 Hook
// 在 React 的函数组件中调用 Hook
// 在自定义 Hook 中调用其他 Hook
// Hook 的命名必须要已 use 开头

import { useState } from 'react';

export const useArray = <S>(initArray:S[]) => {
  const [newArr, setArray] = useState(initArray);
  return {
    newArr,
    clear:() => {
      setArray([]);
    },
    removeIndex:(num: number) => {
      let arr =[...newArr];
      arr.splice(num, 1);
      setArray(arr)
    },
    add:(a:S) => {
      let arr = [...newArr, a];
      setArray(arr);
    },
  }
}