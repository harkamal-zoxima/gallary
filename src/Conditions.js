import React from "react";
import ReactDOM from "react-dom";
import './Conditions.css'
import { Progress } from 'antd';
import 'antd/dist/antd.css';

export default function Conditions({open,onClose,percentage}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="outermostDiv">
      <Progress type="circle" percent={percentage} />
    </div>,
    document.getElementById("portal")
  );
}



