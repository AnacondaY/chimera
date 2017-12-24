### 可清除输入框
设置```cleanable```输入时右侧会显示清除按钮, 点击可清除输入内容。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <Input className="demo-input-normal" placeholder="输入时可清除" cleanable/>
            )
        }
    }
```