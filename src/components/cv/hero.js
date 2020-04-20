import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelopeOpenText,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
const Hero = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <section class="hero is-info">
        <div class="hero-body">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-vertical">
                <div className="tile is-child">
                  <h1 className="title is-1">{data.cv.name}</h1>
                  <p className="subtitle is-4">{data.cv.positiontitle}</p>
                  <div className="tile is-child">
                    <p className="subtitle is-5">
                      <a href={`mailto:${data.cv.email}`}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        &nbsp;{data.cv.email}
                      </a>
                    </p>
                    <p className="subtitle is-5">
                      <a href={`tel:${data.cv.phoneno}`}>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        &nbsp;{data.cv.phoneno}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="tile is-parent is-vertical">
                  <div className="tile is-child">
                    <p
                      className="content is-4 has-text-justified"
                      dangerouslySetInnerHTML={{ __html: data.cv.description }}
                    />
                  </div>
                </div>
              </div>
              <div className="tile is-parent is-3 is-hidden-mobile is-vertical">
                <div className="tile is-child">
                  <figure className="image is-square is-rounded">
                    <img src={data.cv.photo.url} alt="" />
                  </figure>
                </div>
                <div className="tile">
                  <code>"{data.cv.motto}"</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero
const query = graphql`
  query HeroQuery {
    cv: datoCmsCv {
      motto
      name
      positiontitle
      phoneno
      email
      description
      photo {
        url
      }
    }
  }
`
