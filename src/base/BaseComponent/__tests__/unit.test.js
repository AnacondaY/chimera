import BaseComponent from '../';

describe('===== BaseComponent Unit Test =====', () => {

    let node;

    beforeAll(() => {
        class Demo extends BaseComponent {
            render(){
                return (
                    <div className={this.classNames('cmr-demo')} style={this.styles({marginLeft: 2})}/>
                );
            }
        }
        node = mount(<Demo className="cmr-demo-type cmr-demo-mode" style={{position: 'absolute'}} />).getDOMNode();
    })

    test('className renders correctly', () => {
        expect(node.className).toEqual('cmr-demo-type cmr-demo-mode cmr-demo');
    });


    test('style renders correctly', () => {
        expect(node.style.marginLeft).toEqual('2px');
        expect(node.style.position).toEqual('absolute');
    });

    afterAll(() => {
        node = null;
    })

});