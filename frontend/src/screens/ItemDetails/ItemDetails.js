import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from "axios";

const ItemDetails = ({ match }) => {

    const [item, setItem] = useState({})
    const { id } = useParams();
    useEffect(() => {
        const fetchItem = async () => {            
            const { data } = await axios.get(`/api/viewitems/${id}`)
            setItem(data)
        }
        fetchItem()
    }, [])

    return (
        <>
        <Link className = 'btn btn-light my-3' to='/'>

        </Link>
        <Row>
            <Col md={6}>
                <Image src={item.image} alt={item.name} fluid/>
            </Col>
            <Col md={6}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{item.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {item.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${item.price}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>${item.price}</strong>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                {item.qtyInStock > 0 ? 'In stock': 'SOLD OUT'}
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={item.qtyInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ItemDetails