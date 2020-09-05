import styled from "styled-components";

const StyledInputText = styled.div``;

const InputUnderLine = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
  font-size: ${({ theme }) => theme.normal};
  width: 100%;
  background: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray5};
  }

  :hover,
  :focus {
    border-bottom-color: ${({ theme }) => theme.primaryColor};
  }
`;

export default StyledInputText;
export { InputUnderLine };
