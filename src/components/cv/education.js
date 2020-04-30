import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Education = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child is-vertical">
              <h2 className="title is-2">Education</h2>
            </div>
            <div>
              {data.education.nodes.map(x => (
                <>
                  <div>{x.begin} - {x.end} {x.title} {x.subtitle}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Education
const query = graphql`
  query EducationQuery {
  education: allDatoCmsEducation {
      nodes {
        begin(formatString: "MMM, YYYY")
        end(formatString: "MMM, YYYY")
        title
        subtitle
      }
  }
}`
