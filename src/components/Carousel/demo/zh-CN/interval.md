### 轮播时间
设置```interval```可以控制轮播项切换的时间间隔。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Carousel className="demo-carousel" interval={5000}>
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