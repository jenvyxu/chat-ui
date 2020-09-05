import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";
import Input from "components/Input";
import Icon from "components/Icon";
import Button from "components/Button";

import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";

import Emoji from "components/Emoji";
import Popover from "components/Popover";
import { useTheme } from "styled-components";

function Footer({ children, ...rest }) {
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const theme = useTheme();
  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="输入想和对方说的话"
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25%" }}
              onHide={() => setEmojiIconActive(false)}
              onVisible={() => setEmojiIconActive(true)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button size="52px">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: "translateX(-2px)" }}
              />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  );
}
/* eslint-disablejsx-a11y/accessible-emoji */
function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji lable="smile">😊</Emoji>
      <Emoji lable="grinning">😆</Emoji>
      <Emoji lable="thumbup">👍</Emoji>
      <Emoji lable="indexfingerup">🤘</Emoji>
      <Emoji lable="ok">👌</Emoji>
      <Emoji lable="handsputtogether">🙏</Emoji>
      <Emoji lable="smilewithsunglasses">😎</Emoji>
      <Emoji lable="flexedbicep">💪</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
