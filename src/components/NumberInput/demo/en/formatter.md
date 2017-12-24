### Formatter and parser
Render value in the format specified by attribute ```formatter``` and parse template to number by attribute ```parser```.
```javascript
    class Demo extends React.Component {
        format(value: Number): String{
            return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        parse(value: Number): String{
            return String(value).replace(/\$\s?|(,*)/g, '');
        }
        render(){
            return (
                <NumberInput className="demo-number-input" 
                    formatter={this.format}
                    parser={this.parse}
                />
            )
        }
    }
```