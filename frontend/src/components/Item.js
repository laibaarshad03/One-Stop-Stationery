import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Card className="my-3 p-3 rounded" style={{height:"350px"}}>
            <Link to={`/api/viewitems/${item._id}`}>
                <Card.Img style={{height:"220px"}} src={item.image} variant='top'/>
                </Link>
                <Card.Body>
                        <Card.Title as='div'>
                            <strong>{item.name}</strong>
                        </Card.Title>
                    <Card.Text as='h3'>
                        ${item.price}
                    </Card.Text>
                </Card.Body>
            
        </Card>

    )
}

export default Item