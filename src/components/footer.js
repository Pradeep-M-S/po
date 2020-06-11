import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f0f3f5;
  display: grid;
  grid-gap: 40px;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
`

const FooterImage = styled.img`
  width: 100px;
  height: 130px;
  padding: 30px 0 0 0;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1) rotate(-8deg);
  }
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  font-size: 25px;

  a {
    text-shadow: 0 0.2px 1px #5334e9;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  a:hover {
    transform: scale(1) translateY(-3px);
  }
`
const FooterButton = styled.div`
  padding: 10px 60px;
  text-align: center;
  width: 115px;
  cursor: pointer;
  height: 25px;
  background: linear-gradient(104deg, #9851e0 0%, #3436e7 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border-radius: 290486px;
  transition: 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 20px 60px rbga(0, 0, 0, 0, 7);
  }
`

const Footer = (props) => (
  <FooterSection>
    <FooterImage src={props.image}></FooterImage>
    <FooterLinks>
      <a href="">Facebook</a>
      <a href="">Instagram</a>
      <a href="">Linked-in</a>
      <a href="">Github</a>
      <a href="">Mail</a>
    </FooterLinks>
    <FooterButton>
      <a style={{ color: 'white' }}>{props.buttontitle}</a>
    </FooterButton>
  </FooterSection>
)

export default Footer
