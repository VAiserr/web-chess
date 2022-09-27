import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./UITemplate.scss";

interface Prop extends React.PropsWithChildren {
  // children?: React.ReactNode[] | React.ReactNode;
  // attr?: React.Prop
}

export default function UITemplate({ children }: Prop) {
  useEffect(() => {}, []);

  return (
    <div className="menu-form inner">
      {children}
    </div>
  );
}
