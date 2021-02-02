import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignInContext } from '../../../App';
import styled from 'styled-components';
import { ModalUserBar } from '../ModalUserBar';
import { ReactComponent as ArrowDown } from '../public/arrow-down.svg';
import { ReactComponent as IconUserHeader } from '../public/icon-user-header.svg';
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
    transform: ${props => props.isOpenMenu ? 'rotateZ(180deg)' : ''};
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
          <UserBarIcon isOpenMenu={isOpenMenu}>
            <ArrowDown />
          </UserBarIcon>
          {isOpenMenu && <ModalUserBar />}
        </>)
        : (<UserBarLink
          to="/authorization"
        >
          <UserBarIcon>
            <IconUserHeader />
          </UserBarIcon>
          <UserBarText>Login</UserBarText>
        </UserBarLink>)
      }
    </UserBarWrapper>
  );
};

export default UserBar;
