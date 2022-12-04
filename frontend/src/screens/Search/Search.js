// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Item from "../../components/Item";
import { listItems } from "../../actions/itemActions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


const Search = ( ) => {

    const dispatch = useDispatch()

    const itemList = useSelector(state => state.itemList)
    const { loading, error, items } = itemList
   
    const keyword = localStorage.getItem('keyword')

    useEffect(() => {
        dispatch(listItems())
    }, [dispatch])

    return (
        <>
        <Header/>
        <Container>
        <Link className = 'btn btn-light my-3' to='/'>
            Back to Home Screen
        </Link>
        { loading ? <h2>loading...</h2> : error ? <h3>{error}</h3> :
        <Row>
        <h4>Search Results for {keyword} </h4>
        {items.filter(item => {
            const name= item.name;
            const des=item.description;
            if (name.includes(keyword) || des.includes(keyword))
            {
                return item;
            }
        }).map((fi) => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Item item={fi} />
            </Col>
        ) )}
        </Row>
        } 
        </Container>
        <Footer/>
        </>
    )
}

export default Search