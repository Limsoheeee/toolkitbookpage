import styled from "styled-components";

export const SMALL = "smaill";
export const LARGE = "large";
export const THEM_DEF = "defalt";
export const THEM_BLK = "black";
export const THEM_DEL = "delete";

const Button = (props) => {
  const { type, theme, size, children, on_click, styles, disabled } = props;
  return (
    <BaseButton
      type={type || "button"}
      style={{ ...styles }}
      theme={theme}
      size={size}
      disabled={disabled}
      onClick={(e) => {
        on_click && on_click(e);
      }}
    >
      {children}
    </BaseButton>
  );
};

export default Button;

const BaseButton = styled.button`
  height: 54px;
  background-color: transparent;
  border: 1px solid #d4d4d4;
  color: #909090;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50px;
  margin: 10px;
  transition: 300ms;

  &:disabled {
    background-color: #909090;
    opacity: 0.5;
  }

  &:hover {
    color: #003bd2;
  }
  ${(props) => {
    switch (props.size) {
      case SMALL:
        return `width:80px;`;
      case LARGE:
        return `width:160px;`;
      default:
        return `width:80px;`;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case SMALL:
        return `width:80px;`;
      case LARGE:
        return `width:160px;`;
      default:
        return `width:80px;`;
    }
  }}
  ${(props) => {
    switch (props.theme) {
      case THEM_BLK:
        return ` background-color: #000000;`;
      case THEM_DEL:
        return `  &:hover {
    color: red;
  } `;
      default:
        return ` background-color: transparent;`;
    }
  }}
`;

// disaled={!post}
// styles={{color:"white"}}
// theme={THEM_BLK}
// size={LARGE}
