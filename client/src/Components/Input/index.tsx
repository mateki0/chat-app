import * as React from "react";
import ButtonWrapper from "./styled/ButtonWrapper";
import InputWrapper from "./styled/InputWrapper";
import SendButton from "./styled/SendButton";
import StyledInput from "./styled/StyledInput";

interface InputProps {
  handleTyping: (e: { target: { value: string } }) => void;
  handleSend: (e: { preventDefault: () => void; key?: string }) => void;
  message: string;
}
const Input = ({ handleTyping, handleSend, message }: InputProps) => {
  return (
    <InputWrapper onSubmit={handleSend}>
      <StyledInput
        wrap="soft"
        placeholder="Napisz coś..."
        value={message}
        onChange={handleTyping}
        onKeyUp={handleSend}
      />
      <ButtonWrapper>
        <SendButton type="submit">Wyślij</SendButton>
      </ButtonWrapper>
    </InputWrapper>
  );
};
export default Input;
