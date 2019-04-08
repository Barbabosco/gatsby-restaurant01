import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo";
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/bcg/aboutBcg.jpeg';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
    <Banner
        title="about us"
        subtitle="a little about us">
      </Banner>
    </PageHeader>
  </Layout>
)

export default AboutPage;
