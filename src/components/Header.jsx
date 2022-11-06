import React from 'react'
import styled from 'styled-components'
import moon from '../assets/images/moon.png'

function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>CountriesApp</HeaderTitle>
      <Mode>
        <ModeImage src={moon} alt="" />
        <ModeTitle>Dark Mode</ModeTitle>
      </Mode>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
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