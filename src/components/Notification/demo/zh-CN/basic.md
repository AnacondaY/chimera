### 基础用法
最简单的通知。
```javascript
    class Demo extends React.Component{
        show(){
            notification('通知', '这是一条通知');
        }
        render(){
            return (
                <Button onClick={() => this.show()}>普通通知</Button>
            )
        }
    }
```