import React from 'react';

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
    return (<input
      type="text"
      id="city-filter__search-input"
      className="city-filter__search-input"
      placeholder="Enter the city"
      onChange={this.props.onChange}
      onInput={this.props.onInput}
      ref={this.setTextInputRef}
    />);
  }
}

export default InputForCity;
