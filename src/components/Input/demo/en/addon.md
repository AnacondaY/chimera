### Prefix/Suffix of Input
The prefix an suffix of Input are added by setting attribute ```addonBefore``` and ```addonAfter```.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div>
                    <div className="demo-input"><Input className="demo-input-normal" addonBefore={<Icon type="user"/>}/></div>
                    <div className="demo-input"><Input className="demo-input-normal" addonAfter={<span>dollars</span>}/></div>
                    <div className="demo-input"><Input className="demo-input-normal" addonBefore={<span>http://</span>} addonAfter={<span>.com</span>} /></div>
                </div>
            )
        }
    }
```
