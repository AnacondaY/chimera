### Full screen
The loading component is in full screen.
```javascript
    class Demo extends React.Component{
        
        constructor(){
            super();
            this.state = {
                loading: false
            }
        }

        handleClick(){
            this.setState({
                loading: true
            }, () => {
                this.timer = setTimeout(() => {
                    this.setState({
                        loading: false
                    });
                    clearTimeout(this.timer);
                }, 3000);
            });
        }

        render(){
            return (
                <div>
                    <Button onClick={this.handleClick.bind(this)} type="primary">Disappear in 3000ms</Button>
                    <Loading full loading={this.state.loading} />
                </div>
            )
        }
    }
```