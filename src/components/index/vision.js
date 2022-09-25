import * as React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import presence from '../../images/presence1.jpg'
import counter from '../../images/counter1.jpg'
import mission from '../../images/mission1.jpg'

const Vision = () => {
    return (
        <Wrapper>
            <h1>OUR VISION &#38; PURPOSE</h1>
            <Container className='vision-cards'>
            <Card className="img-card">
                <Card.Img className='img-full' variant="top" src={presence} />
                <Card.Body>
                <Card.Text>
                    TANGIBLE&nbsp; PRESENCE
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="img-card">
                <Card.Img className='img-full' variant="top" src={counter} />
                <Card.Body>
                <Card.Text>
                    COUNTER-&nbsp; FORMATION
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="img-card">
                <Card.Img className='img-full' variant="top" src={mission}/>
                <Card.Body>
                <Card.Text>
                    SACRIFICIAL&nbsp; MISSION
                </Card.Text>
                </Card.Body>
            </Card>
            </Container>
        </Wrapper>
    )
}

export default Vision

const Wrapper = styled.section`
.vision-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.img-card {
    height: auto;
    width: auto;
}

// .img-full {
//     width: auto;
//     height: auto;
// }

`