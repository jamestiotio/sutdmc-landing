import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MiningContext } from "../Context";

const LinkComp = ({ to, children, ...others }) => {
  const setMining = useContext(MiningContext);

  return (
    <Link
      {...others}
      to={to}
      onMouseEnter={() => setMining(true)}
      onMouseLeave={() => setMining(false)}
    >
      {children}
    </Link>
  );
};

export default LinkComp;
