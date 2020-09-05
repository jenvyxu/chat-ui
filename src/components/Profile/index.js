import React from "react";
import PropTypes from "prop-types";
import StyledProfile, { SocialLinks } from "./style";
import "styled-components/macro";
import Avatar from "components/Avatar";

import face from "assets/images/face-male-3.jpg";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";

import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/* eslint-disable jsx-a11y/accessible-emoji */
function Profile({ children, ...rest }) {
  return (
    <StyledProfile {...rest}>
      <Avatar
        css={`
          margin: 26px 0;
        `}
        src={face}
        size="160px"
        status="online"
        statusIconSize="25px"
      />
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        慕容天宇
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        广东省 广州市
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        帮助客户构建网站，并协助在社交网站上进行推广
        <Emoji label="fire">🔥</Emoji>
      </Paragraph>
      <SocialLinks>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="www.weibo.com"
        ></Icon.Social>
        <Icon.Social icon={faGithub} bgColor="black"></Icon.Social>
        <Icon.Social icon={faLinkedin} bgColor="#2483C0"></Icon.Social>
      </SocialLinks>
    </StyledProfile>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
