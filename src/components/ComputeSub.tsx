// memo 用于组件的优化
// class 组件中一般用 PureComponent
// React.PureComponent 与 React.Component 很相似。
// 两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，
// 而 React.PureComponent中以浅层对比 prop 和 state的方式来实现了该函数
import React, { memo } from 'react';

const ComputeSub = memo((props: any) => {
  const { list } = props;
  console.log('ComputeSub');
  return (
    <div>
      <p>这是redux list {list.map((li: number, index: number) => {
        return <span key={index}>{li}</span>
      })}</p>
    </div>
  )
})

export default ComputeSub;