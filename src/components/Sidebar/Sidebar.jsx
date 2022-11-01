import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import UserAvatar from "../UserAvatar";
import { ROUTES } from "../../utils/constant";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 30%;
  flex-shrink: 0;
  .logo {
    flex-basis: 30%;
  }
  div {
    flex-basis: 20%;
  }
  nav {
    li {
      width: 100%;
      padding: 12px;
      a {
        /* text-decoration: none; */
        &.active {
          /* background-color: #ececec; */
        }
      }
      &:hover {
        background-color: #ececec;
      }
    }
  }
`;

const SidebarItem = ({ children }) => {
  return <li>{children}</li>;
};

export const Sidebar = ({ user }) => {
  return (
    <StyledSidebar>
      <div className="logo">
        Logo Logo Logo Logo Logo Logo Logo Logo Logo Logo Logo Logo Logo Logo
        Logo Logo Logo Logo Logo Logo Logo Logo
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.INTERESTED}>Interested</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.MANAGE_YOUR_PRESALE}>
              Manage Your Presale
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.OPEN_PRESALE}>Open Presale</NavLink>
          </li>
        </ul>
      </nav>
      <UserAvatar image={user.image} address={user.address} />
    </StyledSidebar>
  );
};
