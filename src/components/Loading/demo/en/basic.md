### Basic
A simple Loading.
```javascript
    class Demo extends React.Component{

        constructor(){
            super();
            this.state = {
                loading: false
            }
        }

        handleChange(checked: Boolean){
            this.setState({
                loading: checked
            })
        }

        render(){
            return (
                <div>
                    <Toggle checked={this.state.loading} onChange={this.handleChange.bind(this)} />
                    <div className="demo-loading">
                        <Loading loading={this.state.loading}>
                            <ul className="demo-loading-list">
                                {new Array(5)
                                    .fill(0)
                                    .map((item, i) => {
                                        return (
                                            <li key={i}>list item content</li>
                                        )
                                    })
                                }
                            </ul>
                        </Loading>
                    </div>
                </div>
            )
        }

    }
```