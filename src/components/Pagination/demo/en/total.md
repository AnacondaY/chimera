### Total
The template of total infomation is renderer by attribute ```totalRender```.
```javascript
    class Demo extends React.Component {
        renderSummary(total: Number){
            return (
                <div className="demo-pagination-total">
                    <Icon type="math"/>Total :{total}
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