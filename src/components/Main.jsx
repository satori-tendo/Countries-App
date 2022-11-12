import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Main() {
    return (
        <MainWrappper >
            <MainContainer>
                <FirstRow>
                    <Input placeholder='Search for a country...' />
                    <Select>
                        <option value="">Filter by Region</option>
                        <option value="1">Africa</option>
                        <option value="2">America</option>
                        <option value="3">Asia</option>
                        <option value="4">Europe</option>
                        <option value="5">Oceania</option>
                    </Select>
                </FirstRow>
                <Countries>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Countries>
            </MainContainer>
        </MainWrappper>
    )
}



const MainWrappper = styled.div`
    padding: 60px 0px 0px 0px;
`
const MainContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width: 1460px) {
        max-width: 1200px;
    }
    @media (max-width: 1200px) {
        max-width: 970px;
    }
    @media (max-width: 992px) {
        max-width: 750px;
    }
    @media (max-width: 767px) {
        max-width: none;
    }
`
const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 70px;
    @media (max-width: 767px) {
        
    }
`
const Input = styled.input`
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 20px;
    border: 1px solid white;
    padding: 15px;
    width: 500px;
    outline: none;
    border-radius: 10px;
    box-shadow: 0px 0px 3px gray;
    @media (max-width: 720px) {
     margin-bottom: 30px;
    }
`
const Select = styled.select`
    font-family: 'Nunito Sans';
    font-weight: 300;
    font-size: 16px;
    border: 1px solid white;
    padding: 15px;
    width: 200px;
    outline: none;
    border-radius: 10px;
    box-shadow: 0px 0px 3px gray;
`
const Countries = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 320px);
    column-gap: 53px;
    row-gap: 70px;
    @media (max-width: 1460px) {
        grid-template-columns: repeat(3, 320px);
        column-gap: 80px;
        max-width: 1100px;
    }
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 320px);
        column-gap: 110px;
        max-width: 750px;
    }
    @media (max-width: 992px) {

    }
    @media (max-width: 767px) {
        grid-template-columns: 320px;
        max-width: 320px;
    }
`
export default Main