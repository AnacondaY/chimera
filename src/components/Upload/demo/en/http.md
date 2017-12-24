### Request infomation
The infomation of HTTP request can be customized by attributes ```data```, ```headers``` or ```withCredentials```.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Upload 
                    action="//jsonplaceholder.typicode.com/posts/"
                    headers={{
                        'customized-header': 'some content'
                    }}
                    withCredentials
                    data={{
                        x: 1,
                        y: 'qqq'
                    }}
                >
                    <Button type="primary">Click to upload</Button>
                </Upload>
            )
        }
    }
```