### Basic
Basic usage of Carousel.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Carousel className="demo-carousel" onChange={index => console.log('currentIndex：', index)}>
                    <Carousel.Item>
                        <div className="demo-carousel-item">1</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="demo-carousel-item">2</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="demo-carousel-item">3</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="demo-carousel-item">4</div>
                    </Carousel.Item>
                </Carousel>
            )
        }
    }
```