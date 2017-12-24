### 不包含
设置```exclude```为, 将不高亮显示数值小于当前数值部分。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-slider">
                    <Slider defaultValue={35} exclude />
                    <Slider defaultValue={65} exclude disabled />
                </div>
            )
        }
    }
```