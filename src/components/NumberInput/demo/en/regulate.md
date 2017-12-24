### Maximum, minimum and step
Customize the ```maximum```、```minimum``` and ```step``` of numberic input.
```javascript
    class Demo extends React.Component {
        render(){
            return <NumberInput className="demo-number-input" maximum={1000} minimum={100} step={25}/>
        }
    }
```