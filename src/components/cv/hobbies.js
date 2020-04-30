import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Hobbies = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child is-vertical">
              <h2 className="title is-2">Hobbies</h2>
            </div>{" "}
            <div>
              {data.hobbies.nodes.map(x => (
                <>
                  <div>{x.name}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hobbies
const query = graphql`
  query HobbiesQuery {
    hobbies: allDatoCmsHobby {
      nodes {
        name
      }
    }
  }
`
