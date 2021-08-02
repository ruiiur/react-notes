import React, { memo } from 'react';

const ComputeFoo = memo((props: any) => {
  const { memoizedValue } = props;
  console.log('ComputeBar');
  return (
    <div>
      <p>ComputeBar {memoizedValue.map((li: number, index: number) => {
        return <span key={index}>{li}</span>
      })}</p>
    </div>
  )
})

export default ComputeFoo;