import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main } from "../components/Main";
import { Newsletter } from "../components/Newsletter";
import { Teacher } from "../components/Teacher";
import { About } from "../components/About";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Main />
    <Newsletter />
    <Teacher />
    <About />
  </Layout>
)

export default IndexPage
