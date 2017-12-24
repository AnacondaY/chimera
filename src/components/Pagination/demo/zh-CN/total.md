### 总数
自定义总数信息模板。
```javascript
    class Demo extends React.Component {
        renderSummary(total: Number){
            return (
                <div className="demo-pagination-total">
                    <Icon type="math"/>总页数:{total}
                </div>
            );
        }
        render(){
            return (
                <Pagination pageSize={10} totalRecords={2000} layout={['pages', 'total']}
                    totalRender={this.renderSummary.bind(this)}
                />
            )
        }
    }
```