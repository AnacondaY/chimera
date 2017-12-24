### 排列方式
支持水平、垂直和内联三种表单排列方式。
* 水平排列: 标签和控件齐平(默认)。
* 垂直排列: 标签和控件分行展示。
* 内联排列: 表单项水平展示。

```javascript
    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                gender: 'male',
                mode: 'horizontal'
            }
        }
        changeMode(value: String){
            this.setState({
                mode: value
            });
        }
        handleChange(gender){
            this.setState({
                gender
            })
        }
        handleSubmit(evt){
            evt.preventDefault();
            message.success('注册成功', 3000);
        }
        render(){
            const { gender, mode } = this.state;
            return (
                <div style={{width: 480}}>
                    <div style={{marginBottom: 18}}>
                        <Radio.Group value={mode} onChange={this.changeMode.bind(this)}>
                            <Radio.Button value="horizontal">水平表单</Radio.Button>
                            <Radio.Button value="vertical">垂直表单</Radio.Button>
                        </Radio.Group>
                    </div>
                    <Form mode={mode} labelWidth={84} onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Field label="用户名:">
                            <Input placeholder="6到18位英文、数字或下划线"/>
                        </Form.Field>
                        <Form.Field label="密码:">
                            <Input htmlType="password" placeholder="至少6位字符" />
                        </Form.Field>
                        <Form.Field label="密码问题:">
                            <Select defaultValue="1" placeholder="用于找回密码">
                                <Select.Option value="1" label="你的生日是几月几号" />
                                <Select.Option value="2" label="你家的门牌号" />
                                <Select.Option value="3" label="你就读学校的名称"/>
                            </Select>
                        </Form.Field>
                        <Form.Field label="性别:">
                            <Radio.Group value={gender} onChange={this.handleChange.bind(this)}>
                                <Radio value="male">男</Radio>
                                <Radio value="femaile">女</Radio>
                            </Radio.Group>
                        </Form.Field>
                        <Form.Field label="爱好:">
                            <Checkbox>吃饭</Checkbox>
                            <Checkbox>睡觉</Checkbox>
                            <Checkbox>骑车</Checkbox>
                            <Checkbox>打球</Checkbox>
                        </Form.Field>
                        <Form.Field label="自我介绍:">
                            <Input textarea placeholder="说两句吧。。。" />
                        </Form.Field>
                        <Form.Field>
                            <Button htmlType="submit" type="primary">注册</Button>
                        </Form.Field>
                    </Form>
                </div>
            )
        }
    }
```