import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Action } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";
import face from "assets/images/face-male-1.jpg";

function TitleBar({ children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status="offline" src={face} />
      <Title>
        <Paragraph size="large">慕容天宇</Paragraph>
        <Paragraph type="secondary">
          <Text>离线</Text>
          <Text>. 最后阅读：3小时前</Text>
        </Paragraph>
      </Title>
      <Action>
        <Icon opacity={0.3} icon={Call} />
        <Icon opacity={0.3} icon={Camera} />
        <Icon opacity={0.3} icon={Options} />
      </Action>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
