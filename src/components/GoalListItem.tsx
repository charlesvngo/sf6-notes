import React from "react";
import { Divider, List, Typography } from "antd";

// const data = [
//   "Anti-air with cr.HP or FP DP",
//   "Buffer Drive Rush with cr.MK",
//   "React to counterhit cr.MP into cr.HP.",
// ];

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

const GoalListItem = () => (
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
            <a key="goal-list-complete">complete </a>,
            <a key="goal-list-favourite">favourite </a>,
            <a key="goal-list-edit">edit </a>,
            <a key="goal-list-delete">delete </a>,
          ]}
        >
          {item.description}
        </List.Item>
      )}
    />
  </>
);

export default GoalListItem;
