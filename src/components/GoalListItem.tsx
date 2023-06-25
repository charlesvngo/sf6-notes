import React from "react";
import { Divider, List, Typography, Checkbox, Space } from "antd";
import {
  StarOutlined,
  EditOutlined,
  DeleteOutlined,
  StarFilled,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import IconItem from "./IconItem";

const data = [
  {
    description: "Anti-air with cr.HP or FP DP",
    dateCreated: "06/24/23",
    priority: false,
    completed: false,
    tags: ["mechanics", "neutral"],
  },
  {
    description: "Buffer cr.MK with Drive Rush",
    dateCreated: "06/24/23",
    priority: false,
    completed: false,
    tags: ["mechanics", "neutral"],
  },
  {
    description: "cr.HP triple flash knuckle on punish",
    dateCreated: "06/24/23",
    priority: false,
    completed: false,
    tags: ["combo"],
  },
];

const GoalListItem = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <Divider orientation="left">LUKE NOTES</Divider>
      <List
        bordered
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={item.tags}
            extra={[
              <Checkbox onChange={onChange} />,
              <IconItem icon={StarOutlined} iconHover={StarFilled} />,
              <IconItem icon={EditOutlined} iconHover={EditFilled} />,
              <IconItem icon={DeleteOutlined} iconHover={DeleteFilled} />,
            ]}
          >
            {item.description}
          </List.Item>
        )}
      />
    </>
  );
};
export default GoalListItem;
