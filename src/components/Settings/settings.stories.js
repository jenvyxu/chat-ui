import React from "react";
import Settings, { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  components: Settings,
};

export const Default = () => <Settings>默认</Settings>;

export const WithoutDescription = () => (
  <SettingsItem label="这是一个没有描述的设置项"></SettingsItem>
);

export const WithDescription = () => (
  <SettingsItem
    label="这是一个有描述的设置项"
    description="这是一个有描述的设置项"
  ></SettingsItem>
);
export const WithoMenu = () => (
  <SettingsItem label="有子菜单的设置项" type="menu"></SettingsItem>
);
