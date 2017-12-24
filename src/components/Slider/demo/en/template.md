### Customized template of tooltip
属性```tooltipTemplate```可为```Function```、```String```或```Boolean```, 当设置为```false```时将不显示tooltip。
If attribute ```tooltipTemplate``` set to ```false```, the tooltip will not be rendered.Contrarily, default template will be used.
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