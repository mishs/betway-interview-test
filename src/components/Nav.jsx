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
        justify-content: space-between;
        padding: 0;
    }

    li {
        padding: 10px 20px;
        border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px solid #00a826;
        }
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
    }
`

export default Nav
