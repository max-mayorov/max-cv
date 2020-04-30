import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SkillSets = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child is-vertical">
              <h2 className="title is-2">Skills</h2>
            </div>
            <div>
              {data.skillSets.nodes.map(x => 
                <>
                  <div>{x.title}</div>
                  {x.skills.map(y => 
                    <>
                      <div>{y.title} {y.rate}</div>
                    </>)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SkillSets
const query = graphql`
  query SkillSetsQuery {
    skillSets: allDatoCmsSkillset {
      nodes {
        title
        skills {
          rate
          title
        }
      }
    }
  }
`
