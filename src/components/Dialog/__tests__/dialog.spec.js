import { mount, shallow, render } from 'enzyme';
import Dialog from '../';

describe('=== Dialog ===', () => {

    class DialogTester extends React.Component {
        constructor(){
            super();
            this.state = {
                visible: false
            };
        }
        render(){
            return (
                <Dialog/>
            );
        }
    }

    let dialog;

    const show = () => {
        dialog.setState({
            visible: true
        });
    };

    const hide = () => {
        dialog.setState({
            visible: false
        });
    };

    beforeEach(() => {
        dialog = mount(
            <Dialog>
                xxxx
            </Dialog>
        );
        show();
    });

    afterEach(() => {
        hide();
    });  

    // test('open correctly', () => {
    //     expect(document.querySelector('.cmr-dialog')).not.toBeNull();
    // });

    test('with prop \'closable\'', () => {
        dialog.setState({
            title: 'xxx'
        });
        expect(dialog.instance().pop.node.querySelector('.cmr-dialog-body')).not.toBeNull();
    });

    // test('with prop \'footer\'', () => {
    //     const dialog = mount(<Dialog footer="xxxx" />);
    //     expect(dialog.find('.cmr-dialog').hasClass('cmr-dialog-has-footer')).toBeTruthy();
    // });

});