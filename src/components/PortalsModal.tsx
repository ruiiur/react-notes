import {useEffect} from "react";
import ReactDOM from 'react-dom';

const PortalsModal = (props:any) => {
  const el = document.createElement('div');
  const modal = document.getElementById('modal');
  useEffect(() => {
    modal?.appendChild(el);
    return () => {
      modal?.removeChild(el);
    }
  })
  return ReactDOM.createPortal(
    props.children,
    el
  )
}

export default PortalsModal;