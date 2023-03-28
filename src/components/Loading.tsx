import React from 'react'
import loadingGif from '../assets/loading-gif.gif'
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper>
        <LoadingImg src={loadingGif} alt="" />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
`
const LoadingImg = styled.img`
    position: absolute;
    top: 45%;
    left: 45%;
`

export default Loading