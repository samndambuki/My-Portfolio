import React, {useState} from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button' 




function Portfolio() {
 const [modalShow,setModalShow] = useState(false);  
 const [tempData,setTempData] = useState({});


 function createModal(data){
  retrun (
   <Modal>
    
   </Modal>
  )
 }

 const mapped = portfolioData.map((e,idx)=>{
  return(
   <Card key = {idx} id="portfolio__card__container">
    <Image className='portfolio__image'
    onClick={()=>{
     setTempData({
      image:e.image,
      link:e.link,
      desc:e.desc,
      summary:e.summary,
      tech:e.tech
     })
     setModalShow(true)
    }}

    src={
     e.image
    }
    />
    <div className='portfolio__click__info'>
     &#x1F50E;&#xFE0E;
    </div>
   </Card>
  )
 })

  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1>PORTFOLIO</h1>
      <p>This is my Github page

      <a href="https://github.com/arpanet001" target="_blank" rel='noreferrer'> https://github.com/arpanet001</a>
      </p>
      <Container fluid="lg" style={{padding:"2rem 0"}}>
       <Row>

       </Row>

      </Container>
    </div>

  )
}

export default Portfolio
