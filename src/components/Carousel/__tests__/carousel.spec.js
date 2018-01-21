import { mount, shallow } from 'enzyme';
import Carousel from '../';

describe('=== Carousel ===', () => {

    test('render on default props', () => {
        const carousel = mount(
            <Carousel>
                <Carousel.Item>1</Carousel.Item>
                <Carousel.Item>2</Carousel.Item>
                <Carousel.Item>3</Carousel.Item>
            </Carousel>
        );

        expect(carousel.find('.cmr-carousel-item')).toHaveLength(5);
        expect(carousel.find('.cmr-carousel-indicator')).toHaveLength(3);
        expect(carousel.find('.cmr-carousel-controller')).toHaveLength(1);
        carousel.unmount();
    });

    test('play correctly', () => {
        const carousel = mount(
            <Carousel autoplay={false}>
                <Carousel.Item>1</Carousel.Item>
                <Carousel.Item>2</Carousel.Item>
                <Carousel.Item>3</Carousel.Item>
            </Carousel>
        );
        
        expect(carousel.state('acturalIndex')).toBe(0);
        carousel.find('.cmr-carousel-controller-right').simulate('click');
        expect(carousel.state('acturalIndex')).toBe(1);
        
    });

});