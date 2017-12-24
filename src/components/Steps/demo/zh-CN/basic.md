### 基本用法
简单的步骤条。
```javascript
    class Demo extends React.Component{
        render(){
            return (
                <Steps currentIndex={1}>
                    <Steps.Step title="Step1" description="Step1 Description" />
                    <Steps.Step title="Step2" description="Step2 Description" />
                    <Steps.Step title="Step3" description="Step3 Description" />
                </Steps>
            )
        }
    }
```