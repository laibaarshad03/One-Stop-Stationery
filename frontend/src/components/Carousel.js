import Carousel from 'react-bootstrap/Carousel'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1554938521-9e0763797568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHBhaW50cyUyMGJydXNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
          width="100%"
          style={{ height: "550px", width: "100%" }}
        />
        <Carousel.Caption>
          <h3>Find everything only at one stop!</h3>
          <p>Brushes, pencils, erasers, sketchbooks and much more.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1627873828998-50b7aeec7ffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlbmNpbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>You can never have to much of stationery!</h3>
          <p>Hey! You are at the right place.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;