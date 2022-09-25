import * as React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import Seo from "../components/common/seo"
import LoginButton from "../components/login-button";
import Layout from '../components/layout'
import InstagramSection from "../components/index/instagramSection";
import Gallery from '../components/slider';
import Banner from "../components/index/banner";
import Vision from "../components/index/vision";
import UpcomingEvents from "../components/index/upcomingEvents";
import GetConnected from "../components/index/getConnected";

const IndexPage = () => {
return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <Vision />
      <UpcomingEvents />
      <GetConnected />
      <InstagramSection />
          {/* <LoginButton />
          <Link to="/account">Planning Center account</Link>
          <Link to="/calendar">Calendar</Link> */}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
