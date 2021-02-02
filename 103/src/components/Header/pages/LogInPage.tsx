import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn, AlertSuccess } from '../styledComponents';
import { ResetPasswordContext } from '../../../App';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const InputPassword = styled(InputText)`
  padding-right: 48px;
`;

const FormOptions = styled.div`
  margin: 16px 0 0 0;
  font-size: 15px;
  text-align: right;

  & div {
    display: none;
  }

  & a {
    color: #0095cc;
    text-decoration: none;
  }
`;

interface LogInPageProps {
  onToggleErrorComponent: (isError: boolean) => void;
  toggleEnterUser: (value: boolean) => void;
}

interface LogInPageState {
  'email': string;
  'password': string;
  'isSignIn': boolean;
  'isChangeEmail': string;
  'isOpenPassword': boolean;
}

export class LogInPage extends React.Component<LogInPageProps, LogInPageState> {
  constructor(props: LogInPageProps) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      'isSignIn': false,
      'isChangeEmail': '',
      'isOpenPassword': false,
    };
  }

  toggleVisiblePassword = (): void => {
    this.setState(({ isOpenPassword }) => ({
      'isOpenPassword': !isOpenPassword,
    }));
  }

  handleChangeInput = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [id]: value,
    });
    this.props.onToggleErrorComponent(false);
  }

  logInAccount = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // this.setState({ isSignIn: true });
        // this.props.toggleEnterUser(true);
      })
      .catch(() => {
        this.props.onToggleErrorComponent(true);
        this.props.toggleEnterUser(false);
      });
  }

  toggleChecked = (): void => {
    console.log(1);
  };

  componentDidMount = (): void => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignIn: !!user });
      this.props.toggleEnterUser(!!user);
    });
  }

  render(): JSX.Element {
    return (
      <>
        <ResetPasswordContext.Consumer>
          {context => context && <AlertSuccess>{context}</AlertSuccess>}
        </ResetPasswordContext.Consumer>
        <Form onSubmit={this.logInAccount}>
          <FormField>
            <InputText
              tabIndex="1"
              id="email"
              name="username"
              placeholder="E-mail"
              type="text"
              autocomplete="off"
              onChange={this.handleChangeInput}
            />
          </FormField>
          <FormField>
            <InputPassword
              tabIndex="2"
              id="password"
              name="password"
              placeholder="Password"
              type={this.state.isOpenPassword ? "text" : "password"}
              autocomplete="off"
              onChange={this.handleChangeInput}
            />
            <TogglePassword
              onClick={this.toggleVisiblePassword}
            />
          </FormField>
          <FormOptions>
            <div>
              <label htmlFor="rememberMe">
                <input
                  tabIndex="3"
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked
                  onChange={this.toggleChecked}
                />
              Remember Me
            </label>
            </div>
            <NavLink to="/reset">Forgot password?</NavLink>
            <InputBtnSignIn
              tabIndex="4"
              type="submit"
              value="LogIn"
              name="login"
            />
          </FormOptions>
        </Form>
      </>
    );
  }
}
