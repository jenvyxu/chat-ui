import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import { animated } from "react-spring";
import useStaggeredList from "hook/useStaggeredList";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledContactList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {new Array(10).fill(0).map((_, i) => (
            <animated.div style={trailAnimes[i]} key={i}>
              <ContactCard key={i} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
