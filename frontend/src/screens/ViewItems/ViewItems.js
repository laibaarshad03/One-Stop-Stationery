// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Item from "../../components/Item";
import { listItems } from "../../actions/itemActions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ViewItems = () => {
    // const [items, setItems] = useState([])
    const dispatch = useDispatch()

    const itemList = useSelector(state => state.itemList)
    const { loading, error, items } = itemList

    useEffect(() => {
        dispatch(listItems())
        // const fetchItems = async () => {
        //     const { data } = await axios.get('/api/viewitems')

        //     setItems(data)
        // }
        // fetchItems()
    }, [dispatch])

    return (
        <>
        <div><Header/></div>
        <Container>
        { loading ? <h2>loading...</h2> : error ? <h3>{error}</h3> :
        <Row>
        {items.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Item item={item} />
            </Col>
        ) )}
        </Row>
        } 
        </Container>
        <div><Footer/></div>
        </>
    )
}

export default ViewItems