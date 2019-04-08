import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';
import QuickInfo from '../components/HomePageComponents/QuickInfo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="Eatery"
        subtitle="55 Main Street - Santa Monica, CA">
        <BannerButton style={{margin: '2rem auto'}}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage;