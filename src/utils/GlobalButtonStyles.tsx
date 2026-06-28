import React from "react";
import { Button } from "antd";

interface ActionButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const ActionButton = ({ active, children, onClick }: ActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type={active ? "primary" : "default"}
      className="w                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
    >
      {children}
    </Button>
  );
};

export default ActionButton;