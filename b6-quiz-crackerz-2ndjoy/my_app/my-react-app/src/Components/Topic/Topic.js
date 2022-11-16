import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Topic = ({ dt }) => {
    const { name, logo, id } = dt;
    // console.log(dt);
    // console.log(id);
    return (
        <div className='cards'>



            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} className='bg-dark' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary"><Link to={`/topics/${id}`} className='text-white text-decoration-none'>Start Practising</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;