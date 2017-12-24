### Formatter
Convert date or date array to string through specific format.
```javascript
    class Demo extends React.Component {
        format(date: Date){
            const year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if(month < 10){
                month = `0${month}`;
            }
            if(day < 10){
                day = `0${day}`;
            }
            return `${year}/${month}/${day}`;
        }

        formatRange(dates: Date[]){
            return dates.map(date => this.format(date)).join(' ~ ');
        }

        render(){
            return (
                <div>
                    <DatePicker placeholder="year/month/date" className="demo-datepicker-input" formatter={this.format} style={{marginRight: 16}} />
                    <DatePicker placeholder="year/month/date ~ year/month/date" className="demo-datepicker-input" range formatter={this.formatRange.bind(this)} />
                </div>
            )
        }
    }
```