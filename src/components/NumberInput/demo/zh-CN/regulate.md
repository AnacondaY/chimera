### 最值和步长
设置```maximum```、```minimum```和```step```可以改变最值和步长。
```javascript
    class Demo extends React.Component {
        render(){
            return <NumberInput className="demo-number-input" maximum={1000} minimum={100} step={25}/>
        }
    }
```