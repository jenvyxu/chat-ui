import React from "react";
import PropTypes from "prop-types";
import StyledSettings, {
  StyledSettngsItem,
  SettingsItemControl,
  StyledSettingsGroup,
} from "./style";
import Paragraph from "components/Paragraph";
import Switch from "components/Switch";
import Seperator from "components/Seperator";
import Icon from "components/Icon";
import { ReactComponent as ArrowMeunRight } from "assets/icons/arrowMenuRight.svg";
import { Link } from "react-router-dom";
import "styled-components/macro";

function Settings({ children, ...rest }) {
  return (
    <StyledSettings {...rest}>
      <SettingsGroup groupName="隐私设置">
        <SettingsItem label="添加好友时需要验证" />
        <SettingsItem
          label="推荐通讯录好友"
          description="上传的通信录只用来匹配好友列表，本应用不会记录和发送任何信息给其他机构或组织"
        />
        <SettingsItem label="只能通过手机号找到我" />
      </SettingsGroup>
      <SettingsGroup groupName="通知设置">
        <SettingsItem label="新消息通知" />
        <SettingsItem label="语音和视频通话" />
        <SettingsItem label="显示通知详情" />
        <SettingsItem label="声音" />
        <Link
          to={`/settings/blocked`}
          css={`
            text-decoration: none;
            color: inherit;
          `}
        >
          <SettingsItem label="查看已静音的好友列表" type="menu" />
        </Link>
      </SettingsGroup>
    </StyledSettings>
  );
}

function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph size="xxxlarge" style={{ paddingBottom: "24px" }}>
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  );
}

export function SettingsItem({
  type = "switch",
  label,
  description,
  children,
  ...rest
}) {
  return (
    <StyledSettngsItem {...rest}>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === "switch" && <Switch />}
        {type === "menu" && <Icon icon={ArrowMeunRight} />}
      </SettingsItemControl>
      {description && (
        <Paragraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Paragraph>
      )}
      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
    </StyledSettngsItem>
  );
}

Settings.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};

export default Settings;
