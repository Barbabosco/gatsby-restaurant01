import React from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';


export default class NavbarIcons extends React.Component {
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
    <IconWrapper>
      { this.state.icons.map( (iconObj) => {
        return <a key={iconObj.id} href={iconObj.path} target="_blank" rel="noopener noreferrer">{iconObj.name}</a>       
      }) }      
    </IconWrapper>
    )
  }
}


const IconWrapper = styled.div`
.icon {
  font-size: 1.3rem;
  cursor: pointer;
  ${styles.transFunction(undefined, "0.5s")};
}
.facebook-icon {
  color: #3b479d;
}
.twitter-icon {
  color: #3ab7f0;
}
.instagram-icon {
  color: #da5f53;
}
.icon:hover {
  color: ${styles.colors.mainYellow}
}
display: none;
@media(min-width:768px) {
  display: flex;
  width: 10rem;
  justify-content: space-around;
}
`