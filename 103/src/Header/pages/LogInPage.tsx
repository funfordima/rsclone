import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn } from '../styledComponents';
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
  onToggleErrorComponent: () => void;
  toggleEnterUser: (value: boolean) => void;
}

export class LogInPage extends React.Component<LogInPageProps> {
  constructor(props: LogInPageProps) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      'isSignIn': false,
    };
    this.openPasswordRef = React.createRef();
  }

  toggleVisiblePassword = (): void => {
    this.openPasswordRef.current.previousElementSibling.setAttribute('type', this.openPasswordRef.current.previousElementSibling.getAttribute('type') === 'text' ? 'password' : 'text');
  }

  handleChangeInput = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [id]: value,
    });
    this.props.onToggleErrorComponent(false);
  }

  /* eslint-disable no-debugger */
  logInAccount = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { email, password } = this.state;
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('sign ....');
        this.setState({ isSignIn: true });
        this.props.toggleEnterUser(true);
      })
      .catch((error) => {
        console.log(error);
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
      <Form>
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
        {/* {!this.state.isSignIn && <AlertError>{this.state.isSignIn}</AlertError>} */}
        <FormField>
          <InputPassword
            tabIndex="2"
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            autocomplete="off"
            onChange={this.handleChangeInput}
          />
          <TogglePassword
            ref={this.openPasswordRef}
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
          <NavLink to="/">Forgot password?</NavLink>
          <InputBtnSignIn
            tabIndex="4"
            type="submit"
            value="LogIn"
            name="login"
            onClick={this.logInAccount}
          />
        </FormOptions>
      </Form>
    );
  }
}

// export const LogInPage: React.FC = () => {
//   const [value, setValue] = useState({});

//   const toggleChecked = (): void => {
//     console.log(1);
//   };

//   const toggleVisiblePassword = (event: React.MouseEvent): void => {
//     const span = event.target;
//     span.previousElementSibling.setAttribute('type', span.previousElementSibling.getAttribute('type') === 'text' ? 'password' : 'text');
//   };

//   const handleChangeInput = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>): void => {
//     setValue({
//       [id]: value,
//     });
//   }

//   return (
//     <Form>
//       <InputText
//         tabIndex="1"
//         id="email"
//         name="username"
//         placeholder="E-mail"
//         type="text"
//         autocomplete="off"
//         onChange={handleChangeInput}
//       />
//       <FormField>
//         <InputPassword
//           tabIndex="2"
//           id="password"
//           name="password"
//           placeholder="Password"
//           type="password"
//           autocomplete="off"
//           onChange={handleChangeInput}
//         />
//         <TogglePassword onClick={toggleVisiblePassword} />
//       </FormField>
//       <FormOptions>
//         <div>
//           <label htmlFor="rememberMe">
//             <input
//               tabIndex="3"
//               id="rememberMe"
//               name="rememberMe"
//               type="checkbox"
//               checked
//               onChange={toggleChecked}
//             />
//             Remember Me
//           </label>
//         </div>
//         <NavLink to="/">Forgot password?</NavLink>
//         <InputBtnSignIn
//           tabIndex="4"
//           type="submit"
//           value="LogIn"
//           name="login"
//         />
//       </FormOptions>
//     </Form>
//   );
// };
