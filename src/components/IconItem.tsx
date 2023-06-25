import { useState } from "react";
import React from "react";
import { Space } from "antd";

const IconItem = ({
  icon,
  iconHover,
}: {
  icon: React.FC;
  iconHover: React.FC;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Space
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.createElement(isHovered ? iconHover : icon)}
    </Space>
  );
};
export default IconItem;
