### 全屏加载
设置```full```可使Loading充满全屏。
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
                    <Button onClick={this.handleClick.bind(this)} type="primary">开始加载,3秒后消失</Button>
                    <Loading full loading={this.state.loading} />
                </div>
            )
        }
    }
```