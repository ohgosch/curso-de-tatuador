import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main } from "../components/Main";
import { Newsletter } from "../components/Newsletter";
import { Teacher } from "../components/Teacher";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Main />
    <Newsletter />
    <Teacher />
  </Layout>
)

export default IndexPage
