import React from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';



class QuickInfo extends React.Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis arcu. Duis pellentesque tincidunt euismod. Aliquam sollicitudin in tellus et fermentum. Aliquam a lectus et augue viverra finibus vel eget massa. Maecenas in tristique orci. Maecenas non faucibus tellus, eu ullamcorper est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )  
  }
}
export default QuickInfo;

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGray};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px){
    width: 70%;
  }
  @media (min-width: 992px){
    width: 60%;
  }

`