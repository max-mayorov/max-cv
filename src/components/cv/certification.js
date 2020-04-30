import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Certification = () => {
  const data = useStaticQuery(query);
  return (
    <>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child is-vertical">
              <h2 className="title is-2">Certification</h2>
            </div>
            <div>
              {data.certifications.nodes.map(x => (
                <>
                  <div>{x.acquired} {x.title}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Certification
const query = graphql`
  query CertificationsQuery {
    certifications: allDatoCmsCertification(sort: { fields: [acquired], order: DESC}) {
    nodes {
      title
      acquired(formatString: "MMM, YYYY")
    }
  }
  }
`
