import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Home() {
    return (
        <Styles>
            <Header />
            
            <div className="inner">
                <Nav />
                <Footer />
            </div>
        </Styles>
    )
}

const Styles = styled.div`
     .inner {
        background-image: url('https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp');
        background-size: cover;
        height: 800px;
        display: flex;
        align-content: space-between;
        flex-direction: column;
     }
`

export default Home
