### Basic
A simple Upload. Attribute ```action``` is required.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="primary">Click to upload</Button>
                </Upload>
            )
        }
    }
```