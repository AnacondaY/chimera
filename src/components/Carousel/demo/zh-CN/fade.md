### 渐隐切换
设置```effect```为```'fade'```可以将转场的动画变为渐隐。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Carousel className="demo-carousel" effect="fade">
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