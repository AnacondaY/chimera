### 手动播放
将```autoplay```设置为```false```可以阻止轮播自动播放。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Carousel className="demo-carousel" autoplay={false}>
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