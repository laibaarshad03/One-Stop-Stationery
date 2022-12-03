// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Item from "../../components/Item";
import { listItems } from "../../actions/itemActions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useParams } from 'react-router-dom';

const ViewItems = ( ) => {
    // const [items, setItems] = useState([])

    const dispatch = useDispatch()

    const itemList = useSelector(state => state.itemList)
    const { loading, error, items } = itemList
    
    const category = localStorage.getItem('category')
    
    // const{location, history} = this.props;
    // console.log(history.state)
    //const { state } = this.props.location
    //console.log(state)
    // const { id } = useParams();
    // console.log('category',id)
    useEffect(() => {
        //console.log(category)
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
       
        {items.filter (item=>item.category===category).map((filtereditem) => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Item item={filtereditem} />
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