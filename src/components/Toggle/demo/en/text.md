### Template
Customized text of Toggle in checked or unchecked state.
```javascript
    class Demo extends React.Component {

        render(){
            return (
                <div>
                    <Toggle onText="On" offText="Off"/>
                    <Toggle onText={<Icon type="success"/>} offText={<Icon type="error"/>}/>
                </div>
            )
        }

    }
```