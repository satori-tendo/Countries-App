import React from 'react'
import styled from 'styled-components'
import { Container } from './Main.tsx'
import arrow from '../assets/images/arrow.png'
import flag from '../assets/images/bigflag.svg'

function Detail() {
  return (
    <DetailWrapper>
      <Container>
        <Button><Arrow src={arrow} alt="" /><Word>Back</Word></Button>
        <Content>
          <Image src={flag} alt="" />
          <Text>
            <Title>United States of America</Title>
            <Other>
              <Column1>
                <List>
                  <Item><b>Native name: </b> <Word>Yoyoyo</Word></Item>
                  <Item><b>Population: </b> <Word>Yoyoyo</Word></Item>
                  <Item><b>Region: </b> <Word>Yoyoyo</Word></Item>
                  <Item><b>Sub Region: </b> <Word>Yoyoyo</Word></Item>
                  <Item><b>Capital: </b> <Word>Yoyoyo</Word></Item>
                </List>
              </Column1>
              <Column2>
                <List>
                  <Item><b>Top Level Domain: </b> <Word>Yoyoyo</Word></Item>
                  <Item><b>Currencies: </b> <Word>Yoyoyo</Word></Item>
                  <Item><b>Languages: </b> <Word>Yoyoyo</Word></Item>
                </List>
              </Column2>
            </Other>
            <BorderCountries>
              <List>
                <Item><b>Border Countries: </b> 
                  <WordCountry>Yoyoyo</WordCountry>
                  <WordCountry>Yoyoyo</WordCountry>
                  <WordCountry>Yoyoyo</WordCountry>
                </Item>
              </List>
            </BorderCountries>
          </Text>
        </Content>
      </Container>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  padding-top: 50px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #FFF;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 7px gray;
  cursor: pointer;
  padding: 10px 50px 10px 20px;
`
const Arrow = styled.img`
  width: 20px;
`
const Word = styled.span`
  font-family: 'Nunito Sans';
  font-weight: 600;
  margin-left: 10px;
`

const Content = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Image = styled.img`
  width: 700px;
`
const Text = styled.div`
  
`
const Title = styled.h1`
  margin-left: 40px;
  font-size: 40px;
`
const Other = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const BorderCountries = styled.div`
  
`
const Column1 = styled.div`
`
const List = styled.ul`
`
const Item = styled.li`
  list-style-type: none;
  font-family: 'Nunito Sans';
  font-size: 20px;
  font-weight: 600;
  &:not(:last-child){
    margin-bottom: 7px;
  }
`
const Column2 = styled.div`
`
const WordCountry = styled.span`
  font-size: 18px;
  padding: 5px 15px;
  border: #FFF;
  border-radius: 10px;
  box-shadow: 0 0 6px black;
  &:not(:last-child){
    margin-right: 20px;
  }
`
export default Detail