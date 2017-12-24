### 尺寸
当为环形模式时, 设置```diameter```可以控制其直径大小; 设置```strokeWidth```可以控制环的粗细。当为直线模式时, ```width```可以控制进度条宽度。
```javascript
    class Demo extends React.Component {
        render(){
            return (
                <div>
                    <div className="demo-progress-list">
                        <Progress mode="circle" progress={30} diameter={70} />
                        <Progress mode="circle" progress={100} status="success" diameter={80} />
                        <Progress mode="circle" progress={50} status="paused" diameter={90} />
                        <Progress mode="circle" progress={75} status="error" diameter={100} />
                    </div>
                    <div className="demo-progress-list">
                        <Progress mode="circle" progress={30} strokeWidth={4} diameter={80} />
                        <Progress mode="circle" progress={100} status="success" strokeWidth={6} diameter={80} />
                        <Progress mode="circle" progress={50} status="paused" strokeWidth={8} diameter={80} />
                        <Progress mode="circle" progress={75} status="error" strokeWidth={10}  diameter={80} />
                    </div>
                    <div className="demo-progress-list">
                        <Progress progress={30} outside width={150}/>
                        <Progress progress={50} outside status="paused" width={180}/>
                        <Progress progress={100} outside status="success" width={200}/>
                        <Progress progress={75} outside status="error" width={240}/>
                    </div>
                </div>
            )
        }
    }
```