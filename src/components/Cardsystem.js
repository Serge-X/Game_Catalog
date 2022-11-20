import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import '../styles/Userpage.css';


function Cardsystem({pass, loading}){
    
    return(
        <>
        <br/>
            { pass.map(card =>(  
                <Card  bg="secondary"  text="danger" key={card.id} className="cardExtension"   >
                 {loading ? <Card id="bigspin" bg="secondary"> <Card.Body><Spinner animation="border" id='bigspin' ></Spinner></Card.Body></Card>  :
                    <Card.Body>
                        <Card.Title className="cardExtension3">{card.name}</Card.Title>
                        <Card.Img variant="top" src= {card.background_image===null ? 'blank' :card.background_image  } className='cardImage'/>
                        <Card.Subtitle className="cardExtension2">Generes: {card.genres.map(p => <h6>{p.name} |</h6>)} </Card.Subtitle>
                        <Card.Text>
                            <div id='score'>Metacritic Score:</div> <div id="score">{ card.metacritic===null ? 'No Data': card.metacritic } </div>
                        </Card.Text>
                    </Card.Body>}
                </Card>  ))}
        </>
    );
}
export default Cardsystem;