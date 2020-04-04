import React from 'react';
const Cv = ({ data }) => (
  <article className="sheet">
    <h1>{data.cv.name}</h1>
    <p>{data.cv.motto}</p>
    <img src={data.cv.photo.url} />
    <div dangerouslySetInnerHTML={{ __html: data.cv.description }} />
  </article>
);
export default Cv;
export const query = graphql`
query CvQuery {
  cv: datoCmsCv {
    motto
    name
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
`;