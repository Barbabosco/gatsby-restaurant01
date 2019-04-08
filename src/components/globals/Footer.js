import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';


class Footer extends React.Component {
  state = {
    icons:[
      { 
        id: 0,
        name:<FaFacebook className="icon facebook-icon" />,
        path: 'https://www.facebook.com'
      },
      { 
        id: 1,
        name:<FaTwitter className="icon twitter-icon" />,
        path: 'https://www.twitter.com'
      },
      { 
        id: 2,
        name:<FaInstagram className="icon instagram-icon" />,
        path: 'https://www.instagram.com'
      }
    ]
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">eatery</div>
        <div className="icons">
          {this.state.icons.map( (iconObj) => {
            return <a key={iconObj.id} href={iconObj.path} target="_blank" rel="noopener noreferrer">{iconObj.name}</a>;
          } )}
        </div>
        <p className="copyright">copyright &copy; 2018 eatery</p>
      </FooterWrapper>
    )  
  }
}
export default Footer;


const FooterWrapper = styled.div`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon{
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1rem;
    ${styles.border({color:`${styles.colors.mainYellow}`})};
  }
`
