import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ExitButton } from '../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const WrapperModal = styled.div`
  position: fixed;
  inset: 48px 0px auto auto;
  transform-origin: right top;
  width: 250px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.32);
  border-radius: 2px;
  background-color: #fff;
  will-change: transform;
  z-index: 10;
}
`;

const UserBarLink = styled(NavLink)`
  display: flex;
  width: 100%;
  background-color: #fff;
  padding: 12px 48px 12px 56px;
  border-top: 1px solid rgba(0,0,0,.08);
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  transition-property: background-color;
  position: relative;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: rgba(0,0,0,.04);
  }

  & .user-bar__icon {
    width: 24px;
    height: 24px;
    min-width: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    
    & svg {
      fill: rgba(0,0,0,0.48);
    }
  }
`;

export const ModalUserBar: React.FC = () => {
  return (
    <WrapperModal>
      <UserBarLink to="/profile/account">
        <span className="user-bar__icon">
          <svg
            viewBox="0 0 24 24"
            id="icon-user-header"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zM6.3 8.8a5.7 5.7 0 1 1 11.4 0 5.7 5.7 0 0 1-11.4 0z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17.2c-3 0-5.7 1.4-7.4 3.6-.3.3-.7.4-1 .2a.7.7 0 0 1-.2-1 11 11 0 0 1 17.2 0c.3.3.2.7-.1 1-.4.2-.8.1-1-.2a9.6 9.6 0 0 0-7.5-3.6z"
            />
          </svg>
        </span>
        Profile
      </UserBarLink>
      <ExitButton onClick={() => firebase.auth().signOut()}>
        <svg
          viewBox="0 0 24 24"
          id="icon-log-out"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.375 8.727a.751.751 0 0 1 1.06.003l2.7 2.705a.8.8 0 0 1 0 1.13l-2.7 2.705a.751.751 0 1 1-1.062-1.06l1.456-1.46H9.45a.75.75 0 1 1 0-1.5h9.38l-1.456-1.46a.75.75 0 0 1 .002-1.063z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.98 3.792c-4.516 0-8.184 3.671-8.184 8.208 0 4.537 3.668 8.208 8.184 8.208a8.155 8.155 0 0 0 6.239-2.897c.266-.314.729-.399 1.067-.163.339.237.423.706.16 1.025A9.654 9.654 0 0 1 11.98 21.7c-5.35 0-9.68-4.347-9.68-9.7 0-5.353 4.33-9.7 9.68-9.7a9.652 9.652 0 0 1 7.465 3.526c.263.319.179.788-.16 1.025-.338.236-.8.151-1.067-.163a8.152 8.152 0 0 0-6.238-2.896z"
          />
        </svg>
        Exit
      </ExitButton>
    </WrapperModal>
  );
};
