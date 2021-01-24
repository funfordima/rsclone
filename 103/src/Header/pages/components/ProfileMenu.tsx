import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import arrowRightSvg from '../../public/arrow-left.svg';
import exitSvg from '../../public/exit.svg';
import lockSvg from '../../public/lock.svg';
import accountSvg from '../../public/account.svg';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    display: block;
    background: #fff;
    z-index: 5;
    width: 100%;
    padding-top: 0;
  }
`;

const SideBarHeader = styled.div`
  display: none;
  font-size: 24px;
  line-height: 28px;
  padding: 0 16px 20px 16px;
  font-weight: normal;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    display: block;
  }
`;

const MenuItem = styled.li`
  margin-bottom: 16px;
  display: block;
  cursor: pointer;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    margin: 0;
    padding: 0;
  }
`;

const MenuLink = styled(NavLink)`
  color: rgba(0,0,0,0.48);
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: #0095cc;
  }

  &.active {
    font-weight: 500;
    text-decoration: none;
    color: #000;
    pointer-events: none;
  }

  @media only screen and (max-width: 767px) and (min-width: 0) {
    display: block;
    padding: 0 56px;
    position: relative;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    font-weight: normal;
    color: #000;
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,0.08);

    &:before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      height: 24px;
      width: 24px;
      background-repeat: no-repeat;
      background-position: center center;
      opacity: 0.5;
    }

    &:after {
      content: '';
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      height: 24px;
      width: 24px;
      background-image: url(${arrowRightSvg});
      background-repeat: no-repeat;
      background-position: center center;
      opacity: 0.5;
    }

    &.--account:before {
      background-image: url(${accountSvg});
    }

    &.--password:before {
      background-image: url(${lockSvg});
    }

    &.--exit:before {
      background-image: url(${exitSvg});
    }
  }
`;

interface ProfileMenuProps {
  toggleDisplay: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ toggleDisplay }) => {
  const dataForList = [
    {
      id: 1,
      link: '/profile/account',
      title: 'Personal Information',
      classN: '--account',
    },
    {
      id: 2,
      link: '/profile/password',
      title: 'Password',
      classN: '--password',
    },
  ];


  return (
    <>
      <SideBarHeader>
        Profile
      </SideBarHeader>
      <Menu>
        {dataForList.map(({ id, link, title, classN }): JSX.Element => {
          return (
            <MenuItem key={id}>
              <MenuLink
                to={link}
                className={classN}
                onClick={toggleDisplay}
              >
                {title}
              </MenuLink>
            </MenuItem>
          );
        })}
        <MenuItem>
          <MenuLink
            exact to={'/'}
            onClick={() => firebase.auth().signOut()}
            className='--exit'
          >
            Exit
          </MenuLink>
        </MenuItem>
      </Menu>
    </>
  );
};
