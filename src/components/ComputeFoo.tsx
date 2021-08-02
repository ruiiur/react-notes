import React, { memo } from 'react';

const ComputeFoo = memo((props: any) => {
  const { memoizedCallback } = props;
  console.log('ComputeFoo');
  return (
    <div>
      <p>ComputeFoo {memoizedCallback().map((li: number, index: number) => {
        return <span key={index}>{li}</span>
      })}</p>
    </div>
  )
})

export default ComputeFoo;