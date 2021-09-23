import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.webp'

function Header() {
    return (
        <Section>
            <Link to="/">
                <img src={Logo} alt="Betway" height="25" />
            </Link>
            <div>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </Section>
    )
}

const Section = styled.header`
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 1rem;    

    button {
        padding: 4px 8px;
        border: 1px solid #00a826;
        margin-left: 4px;
        border-radius: 2px;
        font-weight: bold;
        cursor: pointer;

        &:first-of-type {
            background: #00a826;
            color: #fff;
        }

        &:last-of-type {
            color: #00a826;
        }
    }
`

export default Header
