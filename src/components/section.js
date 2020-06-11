import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const SectionGroup = styled.div`
  background: url(${(props) => props.image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 290px auto;
  grid-gap: 20px;
  position: relative;
  margin-bottom: 100px;
`
const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  justify-items: center;
  grid-gap: 50px;
  margin: 0 auto;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 130px;
  margin: 10px auto 0;
`

const SectionText = styled.p`
  color: white;
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
  padding-top: 30px;
  @media (max-width: 720px) {
    margin-top: -30px;
    padding: 0;
    font-size: 20px;
  }
`

const SectionTitle = styled.h2`
  color: white;
  margin-left: 50px;
  font-size: 60px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 646px) {
    font-size: 35px;
  }
`
const WaveBottom = styled.div`
  position: absolute;
  bottom: -6px;
  width: 100%;
  height: 120px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  transform: rotate(180deg);
  top: -6px;
`

const Section = (props) => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
