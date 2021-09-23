import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <Navigation>
            <ul>
                <li>
                    <Link to="/sports">sports</Link>
                </li>
                <li>
                    <Link to="/live-and-real">live &amp; real</Link>
                </li>
                <li>
                    <Link to="/casino">casino</Link>
                </li>
                <li>
                    <Link to="/esports">esports</Link>
                </li>
                <li>
                    <Link to="/vegas">vegas</Link>
                </li>
            </ul>
        </Navigation>
    )
}

const Navigation = styled.nav`
    background: rgba(0,0,0,0.5);

    ul {
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        height: 40px;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
    }
`

export default Nav
