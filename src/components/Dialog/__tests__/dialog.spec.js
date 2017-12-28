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
                <Dialog {...this.props} visible={this.state.visible} />
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
            <DialogTester>
                xxxx
            </DialogTester>
        );
        show();                
    });

    afterEach(() => {
        hide();
    });  

    test('open correctly', () => {
        expect(document.querySelector('.cmr-dialog')).not.toBeNull();
    });

    test('without prop \'closable\'', () => {
        dialog.setProps({
            closable: false
        });
        expect(document.querySelector('.cmr-dialog-close')).toBeNull();
    });

    test('esc to close', () => {
        const e = new KeyboardEvent('keydown', {
            which: 27            
        });
        document.dispatchEvent(e);
        expect(document.querySelector('.cmr-dialog')).toBeNull();
    });


});