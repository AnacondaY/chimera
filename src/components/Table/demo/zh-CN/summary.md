### 总和统计
用于在尾行统计各列数值的总和。
```javascript
    const columns = [{
        index: true
    },{
        label: '商品',
        key: 'product'
    }, {
        label: '类别',
        key: 'category'
    }, {
        label: '库存量',
        key: 'count'
    }, {
        label: '单价',
        key: 'price'
    }, {
        label: '月销量',
        key: 'sale'
    }];

    const data = [{
        product: '肉松饼',
        category: '零食',
        count: 1829,
        price: 35,
        sale: 333
    }, {
        product: '优酸乳',
        category: '饮料',
        count: 992,
        price: 36,
        sale: 211
    }, {
        product: '橄榄油',
        category: '粮油',
        count: 321,
        price: 78,
        sale: 99
    }, {
        product: '方便面',
        category: '副食',
        count: 1278,
        sale: 400,
        price: 3
    }];

    class Demo extends React.Component {
        render(){
            return (
                <Table columns={columns} data={data} summaryRender bordered />
            )
        }
    }
```