// React 中的异步加载
import React, {lazy, Suspense} from "react";
const PortalsSub = lazy(() => import('./PortalsSub'));

const TestLazy = (props:any) => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <PortalsSub />
      </Suspense>
    </div>
  )
}

export default TestLazy;