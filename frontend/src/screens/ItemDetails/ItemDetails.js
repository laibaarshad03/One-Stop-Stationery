import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
// import axios from "axios";
import { listItemDetails } from "../../actions/itemActions";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ItemDetails = ({ match }) => {

    const dispatch = useDispatch()

    const itemDetails = useSelector(state => state.itemDetails)
    const { loading, error, item} = itemDetails
    // const [item, setItem] = useState({})
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        dispatch(listItemDetails(id))
        // const fetchItem = async () => {            
        //     const { data } = await axios.get(`/api/viewitems/${id}`)
        //     setItem(data)
        // }
        // fetchItem()
    }, [dispatch, match])

    return (
        <>
        <div><Header/></div>
        <Container>
        <Link className = 'btn btn-light my-3' to='/api/viewitems'>
            Go back
        </Link>
        { loading ? <h2>loading...</h2> : error ? <h3>{error}</h3> :
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
        }
        </Container>
        <div><Footer/></div>
        </>
    )
}

export default ItemDetails