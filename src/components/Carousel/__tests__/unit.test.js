import Carousel from '../';

describe('===== Carousel Unit Test =====', () => {

    let carousel;

    beforeEach(() => {
        carousel = mount(
            <Carousel>
                <Carousel.Item/>
                <Carousel.Item/>
                <Carousel.Item/>
            </Carousel>
        );
    })

    test('carousel renders correctly', () => {
        expect(carousel.find('.cmr-carousel-item').length).toEqual(5);
    });

});