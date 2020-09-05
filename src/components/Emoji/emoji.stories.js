import React from "react";
import Emoji from ".";

export default {
  title: "UI 组件/Emoji",
  components: Emoji,
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
  <div>
    <Emoji label="smile">😃</Emoji>
    <Emoji label="heart">❤️</Emoji>
    <Emoji label="clock">🕒</Emoji>
  </div>
);
