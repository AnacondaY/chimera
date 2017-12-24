### 切换速度
属性```speed```可以控制转场的速度, 建议设置其数值比```interval```小很多。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Carousel className="demo-carousel" speed={1000}>
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