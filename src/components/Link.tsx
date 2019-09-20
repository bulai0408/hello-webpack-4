import React, { ReactElement, FC } from "react";
import { Button } from "antd";

interface IProps {
  active: boolean;
  children: ReactElement;
  onClick: () => void;
}

const Link: FC<IProps> = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </Button>
);

export default Link;
