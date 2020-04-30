import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Languages = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child is-vertical">
              <h2 className="title is-2">Languages</h2>
            </div>
            <div>
              {data.languages.nodes.map(x => (
                <>
                  <div>
                    {x.name} {x.proficiency && x.proficiency.name}
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
export default Languages
const query = graphql`
  query LanguagesQuery {
    languages: allDatoCmsLanguage {
      nodes {
        name
        proficiency {
          name
        }
      }
    }
  }
`
