import React from "react";
import { Row, Col } from "react-bootstrap";
import Item from '../components/Item'
import items from "../../../../backend/data/items";

const ViewItems = () => {
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