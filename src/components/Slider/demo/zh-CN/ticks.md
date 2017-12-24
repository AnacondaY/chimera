### 最值与步长
设置```maximum```, ```minimum```和```step```可以改变最大值、最小值和步长。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-slider">
                    <Slider showTicks step={50} maximum={1000} minimum={100} />
                </div>
            )
        }
    }
```