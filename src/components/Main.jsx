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
`
const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
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
    display: flex;
    flex-wrap: wrap;
`
export default Main