import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { Row, Col,Form, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
// import axios from "axios";
import { withRouter } from 'react-router-dom'
import { listItemDetails } from "../../actions/itemActions";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const ItemDetails = ({ match }) => {

    const dispatch = useDispatch()
    const itemDetails = useSelector(state => state.itemDetails)
    const { loading, error, item} = itemDetails
    const [qty, setQty] = useState(0)
    const { id } = useParams();

    const navigate = useNavigate();
    // console.log(id)
    useEffect(() => {
        dispatch(listItemDetails(id))
        // const fetchItem = async () => {            
        //     const { data } = await axios.get(`/api/viewitems/${id}`)
        //     setItem(data)
        // }
        // fetchItem()
    }, [dispatch, match])

    const addToCartHandler = () => {
        // console.log('heeeluuu')
        //navigate(`/api/cart/${id}?qty=${qty}`)
        navigate(`/api/cart/${id}?qty=${qty}`)

    } 

    return (
        <>
        <div><Header/></div>
        <Container>
        <Link className = 'btn btn-light my-3' to='/api/viewitems'>
            Go back
        </Link>
        { loading ? <h2>loading...</h2> : error ? <h3>{error}</h3> :
        <Row>
        <Col md={3}>
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
                    {item.qtyInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Quantity
                                </Col>
                                <Col>
                                <Form.Control as='select' value={qty} onChange={(e) =>
                                setQty(e.target.value)}>
                                    {[...Array(item.qtyInStock).keys()].map((x) => (
                                        <option key={x+1} value={x+1}>
                                            {x+1}
                                        </option>
                                    ))}
                                </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button 
                        onClick={addToCartHandler}
                        className='btn-block' 
                        type='button' 
                        disabled={item.qtyInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
        }
        </Container>
        <div><Footer/></div>
        </>
    )
}


export default ItemDetails