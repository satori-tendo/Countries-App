import React from 'react'
import styled from 'styled-components'
import moon from '../assets/images/moon.png'


function Header() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderTitle>CountriesApp</HeaderTitle>
                <Mode>
                    <ModeImage src={moon} />
                    <ModeTitle>Dark Mode</ModeTitle>
                </Mode>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    font-weight: 600;
    background-color: #FFF;
    width: 100%;
`
const HeaderContainer = styled.div`
    max-width: 1440px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
const HeaderTitle = styled.h1`
    font-weight: 800;
`
const Mode = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`
const ModeImage = styled.img`
    width: 23px;
    height: 23px;
    margin-right: 10px;
`
const ModeTitle = styled.span`
    font-weight: 300;
`

export default Header