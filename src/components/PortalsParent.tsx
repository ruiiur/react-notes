import React, { useState } from "react";
import PortalsSub from "./PortalsSub";
import PortalsModal from "./PortalsModal";

const PortalsParent = (props:any) => {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  }
  return (
    <div onClick={changeCount}>
      <p>count: {count}</p>
      <PortalsModal>
        <PortalsSub />
      </PortalsModal>
    </div>
  )
}

export default PortalsParent;