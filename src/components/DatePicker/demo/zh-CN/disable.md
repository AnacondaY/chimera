### 禁用日期
属性```disableDate```可以禁用你不想让用户选择的日期, 比如禁用过去或未来的时间。
```javascript
    class Demo extends React.Component{
        constructor(){
            super();
            this.state = {
                currentDate: new Date()
            }
        }
        disablePast(date){
            return this.state.currentDate.getTime() > date.getTime();
        }
        render(){
            return (
                <DatePicker className="demo-datepicker-input" placeholder="过去日期不可选" disableDate={this.disablePast.bind(this)}/>
            )
        }
    }
```