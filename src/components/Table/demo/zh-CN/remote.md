### 远程请求
常见场景, 从服务器端获取数据, 配合```Pagination```和```Loading```使用。
```javascript
    const columns = [{
        index: true
    },{
        label: '姓名',
        key: 'name',
    },{
        label: '年龄',
        key: 'age',
    }, {
        label: '军师',
        key: 'staff'
    }, {
        label: '阵营',
        key: 'camp'
    }];

    class Demo extends React.Component {
        constructor(){
            super();
            this.state = {
                data: [],
                fetching: false,
                currentPage: 1,
                pageSize: 20
            }
        }

        //mock remote request
        request(pageIndex: Number, pageSize: Number): Promise{
            return new Promise((resolve, reject) => {
                const timer = setTimeout(() => {
                    clearTimeout(timer);
                    resolve({
                        status: 200,
                        message: '请求成功',
                        data: {
                            total: 1000,
                            pageIndex,
                            pageSize,
                            list:new Array(pageSize).fill(0).map(() => {
                                const seed = Math.floor(Math.random()*3);
                                return {
                                    name:['曹操', '孙权', '刘备'][seed],
                                    age: Math.round(Math.random() * 100),
                                    camp: ['魏国', '吴国', '蜀国'][seed],
                                    staff: ['郭嘉', '周瑜', '诸葛亮'][seed]
                                }
                            })
                        }
                    });
                }, Math.random() * 3000);
            });
        }

        fetchData(page: Number){
            this.setState({
                fetching: true,
                currentPage: page
            }, () => {
                this.request(page, this.state.pageSize).then(response => {
                    if(response.status === 200){
                        const { list, total } = response.data;
                        this.setState({
                            data: list,
                            totalRecords: total,
                            fetching: false
                        });
                    }else{
                        this.setState({
                            fetching: false
                        });
                    }
                })
            });
        }

        handlePageChange(page: Number){
            this.fetchData(page);
        }

        handlePageSizeChange(size: Number){
            this.setState({
                pageSize: size
            }, () => {
                this.fetchData(this.state.currentPage, size);
            });
        }

        componentDidMount(){
            this.fetchData(1);
        }

        render(){
            const { fetching, data, totalRecords, pageSize, currentPage } = this.state;
            return (
                <div className="demo-table">
                    <Loading text="数据加载中..." loading={fetching}>
                        <Table maxHeight={280} columns={columns} data={data}/>
                            <div className="demo-pagination">
                                {totalRecords ?
                                    <Pagination 
                                        totalRecords={totalRecords} 
                                        currentPage={currentPage}
                                        pageSize={pageSize}
                                        layout={['total','jumper', 'regulator', 'pages']} 
                                        onChange={this.handlePageChange.bind(this)}
                                        onPageSizeChange={this.handlePageSizeChange.bind(this)}
                                    /> : null
                                }
                            </div>
                    </Loading>
                </div>
            )
        }
    }
```
