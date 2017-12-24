### 不同尺寸
设置```size```可以控制日期选择器的尺寸。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-datepicker-list">
                    <DatePicker placeholder="大尺寸选择器" className="demo-datepicker" size="large" />
                    <DatePicker placeholder="中尺寸选择器" className="demo-datepicker" />
                    <DatePicker placeholder="小尺寸选择器" className="demo-datepicker" size="small" />
                </div>
            )
        }
    }
```