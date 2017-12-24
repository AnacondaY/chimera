### Image list
Thumbnail list only supported by picture uploading.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Upload name="somekey" listMode="image-list"                                          action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="primary">Click to upload</Button>
                </Upload>
            )
        }
    }
```