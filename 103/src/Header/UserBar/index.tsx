import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignInContext } from '../../App';
import styled from 'styled-components';
import { ModalUserBar } from '../ModalUserBar';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const UserBarWrapper = styled.div`
  border-left: 1px solid hsla(0, 0%, 100%, 0.16);
  display: flex;
  align-items: center;
  height: 100%;
  padding: 8px 12px;
  max-width: 240px;
  background-color: ${props => props.isOpenMenu ? 'rgba(0, 0, 0, 0.04)' : ''};
  transition-property: background-color;
  transition-duration: .24s;
  cursor: pointer;
  position: absolute;
  right: 0;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media only screen and (max-width: 959px) and (min-width: 0) {
    flex: 0 0 auto;
    position: absolute;
    right: 0;
  }
`;

const UserBarPicture = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  background-color: hsla(0,0%,100%,.64);
  color: rgba(0,0,0,.48);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  flex: 0 0 auto;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

const UserBarName = styled.span`
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & + .user-bar__icon {
    width: 16px;
    min-width: 16px;
    height: 16px;
    transform: ${props => props.isOpenMenu ? 'rotate(180deg)' : ''};
    transition-property: transform;
    transition-duration: .24s;
  }

  @media only screen and (max-width: 479px) and (min-width: 0) {
    display: none;
  }
`;

const UserBarIcon = styled.span`
  display: flex;
  margin-right: 4px;
  float: left;

  & svg {
    width: 24px;
    fill: #fff;
    touch-action: manipulation;
    transform-origin: center center;
    transition-property: transform;
    transition-duration: .24s;
  }
`;

const UserBarText = styled.span`
  @media only screen and (max-width: 479px) and (min-width: 0) {
    display: none;
  }
`;

const UserBarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

const UserBar: React.FC = () => {
  const isSignIn = useContext(SignInContext) || !!firebase.auth().currentUser;
  const [isOpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = (): void => {
    setOpenMenu(!isOpenMenu);
  }

  return (
    <UserBarWrapper isOpenMenu={isOpenMenu} onClick={toggleMenu}>
      {isSignIn
        ? (<>
          <UserBarPicture title={firebase.auth().currentUser?.displayName}>
            <img
              src={firebase.auth().currentUser?.photoURL}
              alt={firebase.auth().currentUser?.displayName}
            />
          </UserBarPicture>
          <UserBarName isOpenMenu={isOpenMenu}>{firebase.auth().currentUser.displayName}</UserBarName>
          <UserBarIcon>
            <svg
              id="icon-menu-down"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="dfXMLID_4_">
                <path id="dfXMLID_2_" d="M49 11.1l-5.5-5.4.5-.5 5 5.1 5-5.1.5.5z" />
              </g>
              <path id="dfXMLID_5_" className="dfst0" d="M-26 0h16v16h-16z" />
              <g id="dfXMLID_6_">
                <path
                  id="dfXMLID_3_"
                  className="dfst1"
                  d="M-20.5 5.5l-5.3 5.2-5.2-5.2"
                />
                <path id="dfXMLID_1_" className="dfst2" d="M-26 0h16v16h-16z" />
              </g>
              <g id="dfXMLID_7_">
                <path id="dfXMLID_9_" d="M8 11L2.7 5.7l.6-.6L8 9.8l4.7-4.7.6.6z" />
              </g>
            </svg>
          </UserBarIcon>
          {isOpenMenu && <ModalUserBar />}
        </>)
        : (<UserBarLink
          to="/authorization"
        >
          <UserBarIcon>
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
          </UserBarIcon>
          <UserBarText>Login</UserBarText>
        </UserBarLink>)
      }
    </UserBarWrapper>
  );
};

export default UserBar;
