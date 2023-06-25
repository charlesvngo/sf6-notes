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
  return <Space>{React.createElement(icon)}</Space>;
};
export default IconItem;
