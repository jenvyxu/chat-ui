import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/MessageCard",
  components: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    name="李荣浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="我曾经跨过山和大海，也穿过人山人海"
    unreadCount={2}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    active
    name="李荣浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="我曾经跨过山和大海，也穿过人山人海"
    unreadCount={2}
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    active
    name="李荣浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="我曾经跨过山和大海，也穿过人山人海"
    unreadCount={2}
    replied
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face1}
    name="李荣浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="我曾经跨过山和大海，也穿过人山人海"
    unreadCount={2}
    replied
  />
);
