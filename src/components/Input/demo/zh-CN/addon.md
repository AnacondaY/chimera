### 带前后缀的输入框
设置```addonBefore```和```addonAfter```可以添加输入框前后缀。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div>
                    <div className="demo-input"><Input className="demo-input-normal" addonBefore={<Icon type="user"/>}/></div>
                    <div className="demo-input"><Input className="demo-input-normal" addonAfter={<span>元</span>}/></div>
                    <div className="demo-input"><Input className="demo-input-normal" addonBefore={<span>http://</span>} addonAfter={<span>.com</span>} /></div>
                </div>
            )
        }
    }
```
