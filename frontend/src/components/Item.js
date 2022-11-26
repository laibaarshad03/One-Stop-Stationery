import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/api/viewitems/${item._id}`}>
                <Card.Img src={item.image} variant='top'/>
                <Card.Body>
                        <Card.Title as='div'>
                            <strong>{item.name}</strong>
                        </Card.Title>
                    <Card.Text as='h3'>
                        ${item.price}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>

    )
}

export default Item