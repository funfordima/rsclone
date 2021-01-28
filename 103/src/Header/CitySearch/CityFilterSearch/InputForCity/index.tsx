import React from 'react';
import styled from 'styled-components';

const InputForCityElement = styled.input`
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 7px 12px;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  touch-action: manipulation;
  outline: none;
  border-radius: 2px;
  transition-property: border-color;
  transition-duration: 0.12s;
  transition-timing-function: ease-in-out;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.16);

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    border-color: #46cdd6;
  }
`;

interface InputForCityProps {
  onChange: () => void;
  onInput: () => void;
}

class InputForCity extends React.Component<InputForCityProps> {
  constructor(props: InputForCityProps) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      this.textInput && this.textInput.focus();
    };
  }

  componentDidMount(): void {
    this.focusTextInput();
  }

  render(): JSX.Element {
    return (
      <InputForCityElement
        type="text"
        id="city-filter__search-input"
        placeholder="Enter the city"
        onChange={this.props.onChange}
        onInput={this.props.onInput}
        ref={this.setTextInputRef}
      />);
  }
}

export default InputForCity;
