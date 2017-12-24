### 强化表单项
系统提供```InputField```, ```SelectField```, ```CheckboxField```等常用强化表单项, 当这些组件不能满足业务需求时, 你可以封装自定义的强化表单项。
```javascript
    const { enhanceForm, enhanceControl, Field, Schema } = Form;
    const EnhancedInput = enhanceControl(Input);
    
    const mockRequest = (value: mixed) => new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            if(value === '123456'){
                resolve();
            }else{
                reject();
            }
            clearTimeout(timer);
        }, Math.random() * 2000);
    });
    
    const schema = {
        validateCode: Schema.string().minLength(6).maxLength(6).required().async(mockRequest, '验证码错误')
    }
    class DemoForm extends React.Component {
        showCode(){
            message.info('验证码: 123456');
        }
        render(){
            const errors = this.props.errors;
            return (
                <Form style={{width: 480}} labelWidth={84}>
                    <Field label="验证码:" required status={errors && errors['validateCode'] && 'error'}
                        feedback={errors && errors['validateCode'] && errors['validateCode'][0]}
                    >
                        <EnhancedInput name="validateCode" placeholder="六位数字验证码" validateTrigger="blur" style={{width: 180, marginRight: 12}} />
                        <Button onClick={this.showCode.bind(this)} type="primary">获取验证码</Button>
                    </Field>
                </Form>
            )
        }
    }
    const Demo = enhanceForm(schema)(DemoForm);
```