### 格式化
将输入值进行格式化。配合```formatter```和```parser```使用。
```javascript
    class Demo extends React.Component {
        format(value: Number): String{
            return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        parse(value: Number): String{
            console.log(value);
            return String(value).replace(/\$\s?|(,*)/g, '');
        }
        render(){
            return (
                <NumberInput className="demo-number-input" 
                    defaultValue={0}
                    formatter={this.format}
                    parser={this.parse}
                />
            )
        }
    }
```