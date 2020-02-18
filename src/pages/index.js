import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main } from "../components/Main"
import { Newsletter } from "../components/Newsletter"
import { Teacher } from "../components/Teacher"
import { About } from "../components/About"
import { Lesson } from "../components/Lesson"
import { Location } from "../components/Location"
import { Footer } from "../components/Footer"
import { FIRST_NEWSLETTER_NAME } from "../utils/constants"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Main />
    <Newsletter name={FIRST_NEWSLETTER_NAME} />
    <Teacher />
    <About />
    <Lesson />
    <Newsletter />
    <Location />
    <Footer />
  </Layout>
)

export default IndexPage
