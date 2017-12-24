import glob from 'glob';
import { render } from 'enzyme';

export default function testHelper(component, options = {skip:false, only:false, ext: 'md'}){
    const {skip, only, ext} = options;
    const files = glob.sync(`../../src/components/${component}/examples/*.${ext}`);
    files.forEach((file) => {
        const method = skip ? test.skip : (only ? test.only : test);
        method(`render ${file} correctly`, () => {
            const example = require(`../${file}`);
            expect(render(example)).toMatchSnapshot();
        })
    })
}