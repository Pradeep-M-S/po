import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/cell'
import styled from 'styled-components'
import Footer from '../components/footer'

const SectionCaption = styled.p`
  font-size: 60px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionCellGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto 100px;
  grid-column-gap: 30px;
  max-width: 800px;
  padding: 0 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Hey there,
          <br />I am Pradeep M S
        </h1>
        <p>I develop Websites and Mobile-Apps using React and React-Native.</p>
        <p>front-end developer</p>
        <Link to="/page-2/">Contact me</Link>
        <div className="logos">
          <img src={require('../images/logo-sketch.png')} width="50px" />
          <img src={require('../images/logo-figma.png')} width="50px" />
          <img src={require('../images/logo-studio.png')} width="50px" />
          <img src={require('../images/logo-react.png')} width="50px" />
          <img src={require('../images/logo-swift.png')} width="50px" />
          <img src={require('../images/logo-framer.png')} width="50px" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Lanuguages</h2>
      <div className="cardGroup">
        <Card
          title="HTML "
          text="Markup"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="CSS "
          text="Styling"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="JavaScript "
          text="Language"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="React "
          text="JavaScript"
          image={require('../images/wallpaper.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React Developer"
      text="I am a React Developer , familiar with the concepts of Hooks,GraphQL and Content Api's."
    />
    <SectionCaption>Course Outline</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map((cell) => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
    <Footer
      buttontitle="Contact"
      image={require('../images/logo-designcode.svg')}
    />
  </div>
)

export default IndexPage
