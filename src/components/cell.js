import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  align-items: center;
  grid-gap: 25px;

  @media (max-width: 720px) {
    grid-gap: 10px;
    grid-template-columns: 60px auto;
  }
`

const CellImage = styled.div`
  width: 60px;
  height: 50px;
  background: black;
  background-image: url(${(props) => props.image});
  background-size: 60px;
  border-radius: 10px;
  margin: 0 0 0 20px;
  background-repeat: no-repeat;

  @media (max-width: 720px) {
    width: 40px;
    height: 33px;
    background-size: 40px;
  }
`

const CellTitle = styled.div`
  margin: 20px 20px;
  font-weight: 500;
  font-size: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 720px) {
    font-size: 25px;
  }
`

const Cell = (props) => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellTitle>{props.title}</CellTitle>
  </CellGroup>
)

export default Cell
