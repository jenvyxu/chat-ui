import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  components: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14:26">这是一条来自他人发送的聊天消息</ChatBubble>
);

export const FromMe = () => (
  <ChatBubble time="昨天 下午14:26" type="mine">
    这是一条我自己发送的聊天消息
  </ChatBubble>
);
