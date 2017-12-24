### Size
There are three different size of datepicker.
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div className="demo-datepicker-list">
                    <DatePicker placeholder="large" className="demo-datepicker" size="large" />
                    <DatePicker placeholder="middle" className="demo-datepicker" />
                    <DatePicker placeholder="small" className="demo-datepicker" size="small" />
                </div>
            )
        }
    }
```