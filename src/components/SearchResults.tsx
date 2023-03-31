import React, {FC, useEffect, useState} from 'react'
import { Container, Country } from './Main'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from './Card'
import Loading from './Loading'
import { Countries } from './Main'
import styled from 'styled-components'




const SearchResults: FC = () => {

    const [results, setResults] = useState<Country[]>([])
    const [isFetching, setIsFetchingg] = useState<boolean>(true)

    const params = useParams()
    const value: string | undefined = params.string

    useEffect(() => {

        axios.get(`https://restcountries.com/v3.1/name/${value}`)
            .then(response => {
                console.log(response.data);
                
                setResults(response.data)
                setIsFetchingg(false)
            })
    }, [])

  return (

      
      <Container>
        <Link to={'/'}>
            <button>back</button>
        </Link>
        {isFetching && <Loading />}
        <HeaderTitle>
            Search for: {value}
        </HeaderTitle>
        <Countries>
            {results.map( //@ts-ignore
                i => <Card key={i.area} flags={i.flags.svg} name={i.name.common} population={i.population}
                    region={i.region} capital={i.capital} />
            )}
        </Countries>
    </Container>
  )
}


const HeaderTitle = styled.h1`
    margin-bottom: 50px;
    font-weight: 800;
`

export default SearchResults