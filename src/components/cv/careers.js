import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Careers = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child is-vertical">
              <h2 className="title is-2">Career</h2>
              {data.careers.edges
                .map(x => x.node)
                .map(x => (
                  <>
                    <div className="tile is-vertical is-parent">
                      <div className="tile is-parent">
                        <div className="tile is-1 is-child">
                          {x.from} - {x.to}
                        </div>
                        <div className="tile is-child">{x.companyname}</div>
                        <div className="tile is-child">
                          <p className="has-text-right">{x.jobtitle}</p>
                        </div>
                      </div>
                      <div className="tile is-child">
                        <p
                          className="has-text-justified"
                          dangerouslySetInnerHTML={{
                            __html: x.descriptionNode.childMarkdownRemark.html,
                          }}
                        ></p>
                      </div>
                      <div className="tile is-child">
                        <p
                          className="has-text-justified"
                          dangerouslySetInnerHTML={{
                            __html: x.tasksNode.childMarkdownRemark.html,
                          }}
                        ></p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Careers
const query = graphql`
  query CareersQuery {
    careers: allDatoCmsCareer(sort: { fields: [from], order: DESC }) {
      edges {
        node {
          from(formatString: "MMM, YYYY")
          to(formatString: "MMM, YYYY")
          companyname
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
          tasksNode {
            childMarkdownRemark {
              html
            }
          }
          jobtitle
        }
      }
    }
  }
`
