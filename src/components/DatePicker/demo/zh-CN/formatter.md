### 格式化
通过```formatter```函数可以设置自定义格式化的日期。formatter将返回一个```date```参数, 当设置```range```时, ```date```为一个Date数组, 否则为一个Date对象。
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
                    <DatePicker placeholder="年/月/日" className="demo-datepicker-input" formatter={this.format} style={{marginRight: 16}} />
                    <DatePicker placeholder="年/月/日 ~ 年/月/日" className="demo-datepicker-input" range formatter={this.formatRange.bind(this)} />
                </div>
            )
        }
    }
```