import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Nav from '../components/Nav'

function Home() {
    return (
        <Styles>
            <Header />
            
            <div className="inner">
                <Nav />
            </div>
        </Styles>
    )
}

const Styles = styled.div`
     .inner {
         background-image: url('../assets/hunch.webp');
         background-size: cover;
     }
`

export default Home
