### 垂直模式
纵向滑块。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-slider-vertical">
                    <Slider mode="vertical" defaultValue={36} 
                        tooltipTemplate={val => `当前值:${val}`}
                    />
                    <Slider mode="vertical" step={10} defaultValue={50} showTicks 
                         tooltipTemplate={val => `当前值:${val}`}
                    />
                    <Slider mode="vertical" defaultValue={75} disabled />
                </div>
            )
        }
    }
```