### Customized icon
The icon of step can be customized by setting attribute ```icon```.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Steps>
                    <Steps.Step icon="user" title="Register Info" description="Please complete basic info" />
                    <Steps.Step icon="setting" title="Individual Info" description="Please complete individual info" />
                    <Steps.Step icon="picture" title="Avatar Uploading" description="Please upload your avatar" />      
                </Steps>
            )
        }
    }
```  