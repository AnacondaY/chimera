### 垂直模式
步骤条纵向展示。
```javascript
    class Demo extends React.Component {

        render(){
            return (
                <div className="demo-steps-vertical">
                    <Steps currentIndex={1} mode="vertical">
                        <Steps.Step title="Step1" description="Step1 Description" />
                        <Steps.Step title="Step2" description="Step2 Description" />
                        <Steps.Step title="Step3" description="Step3 Description" />
                    </Steps>
                    <Steps currentIndex={1} mode="vertical" status="error">
                        <Steps.Step title="Step1" description="Step1 Description" />
                        <Steps.Step title="Step2" description="Step2 Description" />
                        <Steps.Step title="Step3" description="Step3 Description" />
                    </Steps>
                    <Steps currentIndex={2} mode="vertical" status="success">
                        <Steps.Step title="Step1" description="Step1 Description" />
                        <Steps.Step title="Step2" description="Step2 Description" />
                        <Steps.Step title="Step3" description="Step3 Description" />
                    </Steps>
                </div>
            )
        }

    }
```