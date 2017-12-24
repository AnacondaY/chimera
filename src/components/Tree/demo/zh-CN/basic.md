### 基础用法
简单的树形控件。
```javascript
    class Demo extends React.Component {

        render(){
            return (
                <Tree>
                    <Tree.Branch label="1">
                        <Tree.Branch label="1-1"></Tree.Branch>
                        <Tree.Branch label="1-2"></Tree.Branch>
                    </Tree.Branch>
                </Tree>
            )
        }

    }
```