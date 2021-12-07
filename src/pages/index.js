import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { getIcon } from "../icons"

export const pageQuery = graphql`
  {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { isPublished: { ne: false } }
      }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            icon
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

function IndexPage({ data }) {
  return (
    <Layout>
      <Seo
        path="/"
        title="My special corner of the internet"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex mb-16 text-center sm:text-left">
          <div>
            <h1 className="whitespace-no-wrap">
              Hi there, I'm Tyler.{" "}
              <span role="img" aria-label="hand wave">
                👋
              </span>
            </h1>

            <img
              className="rounded-full h-48 w-48 mx-auto sm:ml-12 sm:hidden"
              alt="Me at Work"
              src="/images/me_at_work_720.jpg"
            />
            <p>
              For as long as I can remember, I've loved everything technology.
              When I discovered that I could create technology with software, it
              became my second love. It's now my mission to help others discover
              the beauty in software that I've found.
            </p>
          </div>
          <img
            className="rounded-full h-48 w-48 ml-12 hidden sm:block"
            alt="Me at Work"
            src="/images/me_at_work_720.jpg"
          />
        </div>

        <h2 className="mb-8">Posts</h2>
        {data.allMdx.edges.map(({ node }) => (
          <Post key={node.id} node={node} />
        ))}
      </div>
    </Layout>
  )
}

function Post({ node }) {
  const timeToRead = node.timeToRead * 3

  return (
    <>
      <div className="mb-2">
        <Link
          className="flex text-lg leading-relaxed font-bold text-black dark:text-cream cursor-pointer hover:underline border-transparent"
          to={node.fields.slug}
        >
          {getIcon(node.frontmatter.icon)}
          {node.frontmatter.title}
        </Link>
        <div className="text-xs my-1">
          <span>{node.frontmatter.date}</span>
          <span className="mx-2">·</span>
          <span>
            {"📚".repeat(Math.floor(timeToRead / 5))} {timeToRead} min read
          </span>
        </div>
        <div className="mb-8 text-sm">{node.excerpt}</div>
      </div>
    </>
  )
}

export default IndexPage
