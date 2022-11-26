import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Item from "../../components/Item";

const ViewItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const { data } = await axios.get('/api/viewitems')

            setItems(data)
        }
        fetchItems()
    }, [])

    return (
        <>
        <h1>ITEMS</h1>
        <Row>
            {items.map((item) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Item item={item} />
                </Col>
            ) )}
        </Row>
        </>
    )
      
}

export default ViewItems