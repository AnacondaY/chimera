### Disable some date
The cell is unselectable when function ```disableDate``` return ```false```.
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
                <DatePicker className="demo-datepicker-input" placeholder="past date is unselectable" disableDate={this.disablePast.bind(this)}/>
            )
        }
    }
```