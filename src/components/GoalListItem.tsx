import React from "react";
import { Divider, List, Typography } from "antd";

const data = [
  "Anti-air with cr.HP or FP DP",
  "Buffer Drive Rush with cr.MK",
  "React to counterhit cr.MP into cr.HP.",
];

const GoalListItem = () => (
  <>
    <Divider orientation="left">LUKE NOTES</Divider>
    <List
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="goal-list-complete">complete</a>,
            <a key="goal-list-favourite">favourite</a>,
            <a key="goal-list-edit">edit</a>,
            <a key="goal-list-delete">delete</a>,
          ]}
        >
          {item}
        </List.Item>
      )}
    />
  </>
);

export default GoalListItem;
