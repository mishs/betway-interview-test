import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

function Footer() {
    const [banner, setBanner] = useState("");
    const {topText, offer, cta} = banner;

    useEffect(() => {
        axios.get('http://localhost:8000/api/getBanner')
        .then((response) => {
            const data = response.data
            setBanner(data)
        })
        .catch((error) => {
            console.log('error: ', error);
        })
    },[]);

    const handleClick = () => {
        console.log('banner cta clicked')
    }

    return (
        <Styles>
            <span>{topText}</span>
            <p>{offer}</p>
            <button 
                onClick={() => 
                handleClick()}>
                {cta}
            </button>
        </Styles>
    )
}

const Styles = styled.footer`
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    margin-top: auto;
    padding: 20px;

    span {
        text-transform: uppercase;
        font-size: 14px;
    }

    p {
        font-size: 20px;
        font-weight: bold;
    }

    button {
        padding: 10px 16px;
        border: none;
        margin-left: 4px;
        border-radius: 2px;
        font-weight: bold;
        cursor: pointer;
        background: #00a826;
        color: #fff;
        width: 300px;
    }
`

export default Footer
