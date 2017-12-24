### Status
Setting attribute ```status``` can specify the status of current step.
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <div className="demo-steps">
                    <Steps currentIndex={1} status="error">
                        <Steps.Step icon="user" title="Register Info" description="Please complete basic info" />
                        <Steps.Step icon="setting" title="Individual Info" description="Please complete individual info" />
                        <Steps.Step icon="picture" title="Avatar Uploading" description="Please upload your avatar" />      
                    </Steps>
                    <Steps currentIndex={2} status="success">
                        <Steps.Step icon="user" title="Register Info" description="Please complete basic info" />
                        <Steps.Step icon="setting" title="Individual Info" description="Please complete individual info" />
                        <Steps.Step icon="picture" title="Avatar Uploading" description="Please upload your avatar" />      
                    </Steps>
                </div>
            )
        }
    }
```