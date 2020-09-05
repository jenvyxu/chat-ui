import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";

export default {
  title: "UI 组件/ChatBubble",
  components: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14:26">这是一条来自他人发送的聊天消息</ChatBubble>
);

export const Mine = () => (
  <ChatBubble time="昨天 下午14:26" type="mine">
    这是一条我自己发送的聊天消息
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午16: 30">
    <VoiceMessage time="01:24" />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 下午16: 30">
    <VoiceMessage type="mine" time="01:24" />
  </ChatBubble>
);
