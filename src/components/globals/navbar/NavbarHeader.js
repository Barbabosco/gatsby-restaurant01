import React from 'react';
import {Link} from 'gatsby';
import logo from './../../../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import { styles } from '../../../utils';

import styled from 'styled-components';

export default class NavbarHeader extends React.Component {
  render() {
    const {handleNavbar} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <img src={logo} alt="company name" />
        </Link>
        <FaAlignRight className="toggle-icon" onClick={handleNavbar} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0:4rem 1rem;
  height: 50px; ////////////////////////////////////////////
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${ styles.colors.mainYellow };
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon{
      display: none;
    }
  }
`