import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi I'm Christine. Welcome to my website :)</h1>
    <p>I'm a software developer based in Berlin, originally from New York. I received my bachelors degree in Anthropology, and am always interested in
      opportunities to learn about new cultures, places, and foods. I like all things related to design and computers, so shoot me a message at
      ckong1792@gmail.com for inquiries about projects or just chatting about life tings. 
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">personal projects</Link>
  </Layout>
)

export default IndexPage
