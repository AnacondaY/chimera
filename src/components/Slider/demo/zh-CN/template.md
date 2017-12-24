### 自定义Tooltip模板
属性```tooltipTemplate```可为```Function```、```String```或```Boolean```, 当设置为```false```时将不显示tooltip, 为```true```时启用默认渲染模板。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-slider">
                    <Slider defaultValue={30} tooltipTemplate={value => `当前值: ${value}`} />
                    <Slider defaultValue={45} tooltipTemplate="设置为String" />
                    <Slider defaultValue={65} tooltipTemplate={false} />
                </div>
            )
        }
    }
```