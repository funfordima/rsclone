import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 16px;
  display: block;
  cursor: pointer;
`;

const MenuLink = styled(NavLink)`
  color: rgba(0,0,0,0.48);
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  &:hover {
    color: #0095cc;
  }

  &.active {
    font-weight: 500;
    text-decoration: none;
    color: #000;
    pointer-events: none;
  }
`;

const ButtonExit = styled.span`
  color: rgba(0,0,0,0.48);
  font-size: 16px;
  line-height: 24px;

  &:hover {
    color: #0095cc;
  }

  &.active {
    font-weight: 500;
    text-decoration: none;
    color: #000;
    pointer-events: none;
  }
`;

export const ProfileMenu: React.FC = () => {
  const dataForList = [
    {
      id: 1,
      link: '/profile/account',
      title: 'Personal Information',
    },
    {
      id: 2,
      link: '/profile/password',
      title: 'Password',
    },
  ];


  return (
    <>
      <Menu>
        {dataForList.map(({ id, link, title }, indx): JSX.Element => {
          return (
            <MenuItem key={id} >
              <MenuLink to={link} onClick={indx === 2 ? (() => firebase.auth().signOut()) : null}>
                {title}
              </MenuLink>
            </MenuItem>
          );
        })}
        <MenuItem>
          <MenuLink exact to={'/'} onClick={() => firebase.auth().signOut()}>
            Exit
          </MenuLink>
        </MenuItem>
      </Menu>
    </>
  );
};
