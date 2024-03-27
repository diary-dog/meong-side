import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputContainer {...props} />;
};

export default Input;

const InputContainer = styled.input`
  width: 273px;
  border-bottom: 1px solid black;
  padding: 4px 0;

  font-size: 20px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS["INACTIVE-BUTTON"]};
  }
`;
