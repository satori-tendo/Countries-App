import React from 'react'
import styled from 'styled-components'
import us from '../assets/images/us.png'

function Card() {
  return (
    <CardWrapper>
        <Image src={us} alt="" />
        <Info>
            <Country>United States of America</Country>
            <Paragraph>Population: <span> </span> <Subparagraph>323.947.000</Subparagraph></Paragraph>
            <Paragraph>Region: <span> </span> <Subparagraph>Americas</Subparagraph></Paragraph>
            <Paragraph>Capital: <span> </span> <Subparagraph>Washington, D.C</Subparagraph></Paragraph>
        </Info>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
    width: 320px;
    background-color: #fff;
    background-size: 300px;
    border-radius: 15px;
    margin-right: 53px;
    margin-bottom: 70px;
    &:nth-child(4n) {
        margin-right: 0px;
    }
`
const Image = styled.img`
    border-radius: 15px 15px 0px 0px;
`
const Info = styled.div`
    padding: 10px 0px 30px 30px;
`
const Country = styled.div`
    font-size: 20px;
    font-weight: 800;
    margin: 10px 0px 10px 0px;
`
const Paragraph = styled.div`
    display: flex;
    margin-bottom: 3.5px;
    font-weight: 900;
`
const Subparagraph = styled.div`
    margin-left: 5px;
    font-weight: 300;
`

export default Card