### 不同尺寸
Button组件提供三种大小的尺寸, 分别为```large```,```middle```和```small```,均由```size```属性控制, 默认为```middle```。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-button-size">
                    <Button size="large">大型按钮</Button>
                    <Button>中型按钮</Button>
                    <Button size="small">小型按钮</Button>
                </div>
            )
        }
    }
```