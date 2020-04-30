import React from "react"
import "./mystyles.scss"
import Careers from "../components/cv/careers"
import Hero from "../components/cv/hero"
import Education from "../components/cv/education"
import SkillSets from "../components/cv/skillSets"
import Certification from "../components/cv/certification"
import Languages from "../components/cv/languages"
import Hobbies from "../components/cv/hobbies"
const Cv = () => (
  <>
    <Hero />
    <Careers />
    <SkillSets />
    <Certification />
    <Education />
    <Languages />
    <Hobbies />
  </>
)
export default Cv
