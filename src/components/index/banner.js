import * as React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import banner from '../../images/banner.jpg'


const Banner = () => {
    return (
        <Wrapper>
            <div className='title'>
                <h1>
                    PRACTICING THE WAY OF JESUS&nbsp; FOR THE RENEWAL OF THE CITY
                </h1>
                <Button variant="dark">Join Us</Button>
            </div>
        </Wrapper>
    )
}

export default Banner

const Wrapper = styled.section`

.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
      @media only screen and (max-width: 767px){
          font-size 2rem;
      }
      @media only screen and (max-width: 1200px){
          font-size 4rem;
      }
      z-index: 1;
  }

  .main {
      height:auto;
      z-index: 0;
      border-radius: 3px;
  }
`