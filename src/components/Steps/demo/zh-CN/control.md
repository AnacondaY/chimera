### 切换步骤
用于控制流程进度。
```javascript
    class Demo extends React.Component {
        
        constructor(){
            super();
            this.state = {
                activeIndex: 0
            }
        }

        changeStep(delta){
            this.setState(({activeIndex}) => {
                activeIndex += delta;
                if(activeIndex < 0){
                    activeIndex = 0;
                }else if(activeIndex > 2){
                    activeIndex = 2;
                }
                return {
                    activeIndex
                }
            })
        }

        render(){
            return (
                <div className="demo-steps">
                    <Steps currentIndex={this.state.activeIndex}>
                        <Steps.Step title="Step1" description="Step1 Description" />
                        <Steps.Step title="Step2" description="Step2 Description" />
                        <Steps.Step title="Step3" description="Step3 Description" />
                    </Steps>
                    <Steps mode="vertical" currentIndex={this.state.activeIndex}>
                        <Steps.Step title="Step1" description="Step1 Description" />
                        <Steps.Step title="Step2" description="Step2 Description" />
                        <Steps.Step title="Step3" description="Step3 Description" />
                    </Steps>
                    <Button.Group type="primary">
                        <Button onClick={this.changeStep.bind(this, -1)}>上一步</Button>
                        <Button onClick={this.changeStep.bind(this, 1)}>下一步</Button>
                    </Button.Group>
                </div>
            )
        }

    }
```