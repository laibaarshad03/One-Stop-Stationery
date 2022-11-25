import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/item/${item._id}`}>
                <Card.Img src={item.image} variant='top'/>
            </Link>

            <Card.Body>
                <Link to={`/item/${item._id}`}>
                    <Card.Title as='div'>
                        <strong>{item.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='h3'>
                    ${item.price}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}