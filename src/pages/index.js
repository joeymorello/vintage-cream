import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LandingSection from "../components/home/LandSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingSection />
  </Layout>
)

export default IndexPage
