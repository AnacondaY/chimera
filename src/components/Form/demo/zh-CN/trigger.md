### 触发时机
表单默认采用```change```事件触发验证, 同时支持```blur```和手动触发。
```javascript
    const { Schema, enhanceForm, Field, InputField } = Form;
    const schema = {
        value1: Schema.string().minLength(8).maxLength(18).required('必填'),
        value2: Schema.string().minLength(6).maxLength(14).required('必填'),
        value3: Schema.string().email().required('必填')
    }
    class DemoForm extends React.Component {
        render(){
            return (
                <Form style={{width: 480}} labelWidth={84}>
                    <InputField name="value1" label="onChange:" required autoComplete="off" />
                    <InputField name="value2" label="onBlur:" required autoComplete="off" validateTrigger="blur"/>
                    <InputField name="value3" label="onSubmit:" required autoComplete="off" validateTrigger={null} />
                    <Field>
                        <Button type="success" onClick={this.props.cmrForm.validateForm.bind(this)}>提交</Button>
                    </Field>
                </Form>
            )
        }
    }
    const Demo = enhanceForm(schema)(DemoForm);
```