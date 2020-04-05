import React from "react"
import "./mystyles.scss"

const Cv = ({ data }) => (
  <>
    <div className="container">
      <div className="columns">
        <div className="column"></div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">{data.cv.name}</h2>
          <p className="content">{data.cv.phone}</p>
          <p className="content">{data.cv.email}</p>
        </div>
        <div className="column is-hidden-mobile">
          <img src={data.cv.photo.url} />
          <p className="">{data.cv.motto}</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: data.cv.description }} />
    </div>
  </>
)
export default Cv
export const query = graphql`
  query CvQuery {
    cv: datoCmsCv {
      motto
      name
      phoneno
      email
      description
      photo {
        url
      }
    }
    skillset: datoCmsSkillset {
      title
      skills {
        title
      }
    }
  }
`
