import { mount } from 'enzyme';
import Upload from '../';

jest.mock('../post');

describe('=== Upload ===', () => {

    test('update correctly', done => {
        const data = jest.fn();
        const props = {
            action: 'http://upload.com',
            beforeUpload: () => false,
            data,
            onChange: () => {
                console.log(123);
                expect(data).not.toBeCalled();
                done();
            },
        };
        const upload = mount(
            <Upload {...props}>
                <button/>
            </Upload>
        );
        upload.find('input').simulate('change', {
            target: {
                files: [{
                    filename: 'bar.jpg'
                }]
            }
        });
    });

});