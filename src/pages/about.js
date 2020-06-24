import React from "react"
import { graphql } from "gatsby"

const About = ({ data }) => {
  console.log(data.site.siteMetadata.title)
  return (
    <div>
      <h1>Title: {data.site.siteMetadata.title}</h1>
      <p>author: {data.site.siteMetadata.author}</p>
      <div>about me</div>
    </div>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
