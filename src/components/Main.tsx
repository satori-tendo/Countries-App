import React, {useEffect, useState, FC} from 'react'
import styled from 'styled-components'
import Card from './Card.tsx'
import axios from 'axios'
import Loading from './Loading'


export interface Country {
    name: {common: string, official: string}
    flags: {png: string}
    population: number
    capital: string[]
    region: string
  }

const Main: FC = () => {


    const [countries, setCountries] = useState<Country[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(true)

    const [inputValue, setInputValue] = useState<string>('')
    const inputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => { // посмотреть как типизировать. если это вообще типизируется
        axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            setCountries(response.data)
            setIsFetching(false)
          })
      }, [])
    

    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            setIsFetching(true)
            axios.get(`https://restcountries.com/v3.1/name/${inputValue}`)
                .then(response => {
                    setCountries(response.data)
                    setIsFetching(false)
                })
        }
    }

    console.log(countries);

    return (
        <MainWrappper >
            {isFetching && <Loading />}
            {!isFetching && 
            <Container>
                <FirstRow>
                    <Input name='input' placeholder='Search for a country...' value={inputValue}
                        onChange={inputOnChange} onKeyDown={onKeyDownHandler} />
                        
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
                    
                    {countries.map(i => <Card flag={i.flags.png} key={countries[i]}
                        name={i.name.common} population={i.population} region={i.region}
                        capital={i.capital}/>)}
                </Countries>
            </Container>}
        </MainWrappper>
    )
}



const MainWrappper = styled.div`
    padding: 60px 0px 0px 0px;
`
export const Container = styled.div`
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
const Input = styled.input.attrs({type: 'text', })`
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