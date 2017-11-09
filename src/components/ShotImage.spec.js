import React from 'react';
import { shallow } from 'enzyme';
import ShotImage from './ShotImage';

describe('<ShotImage />', () => {
  const getImage = () => ({
    alt: 'Image description',
    images: {
      teaser: 'http://images.com/teaser.png',
      hidpi: 'http://images.com/img-high.png',
      normal: 'http://images.com/img-normal.png'
    }
  });

  it('should display teaser image', () => {
    const image = getImage();
    const wrapper = shallow(<ShotImage alt={image.alt} images={image.images} />);
    expect(wrapper.find('.shot-teaser.visible').exists()).toBe(true);
    expect(wrapper.find('.shot-teaser').prop('src')).toBe(image.images.teaser);
  });

  it('should display teaser image alt description', () => {
    const image = getImage();
    const wrapper = shallow(<ShotImage alt={image.alt} images={image.images} />);
    expect(wrapper.find('.shot-teaser').prop('alt')).toBe(image.alt);
  });

  it('should display preview image when image loaded', () => {
    const image = getImage();
    const wrapper = shallow(<ShotImage alt={image.alt} images={image.images} />);
    wrapper.find('.shot-preview').simulate('load');
    expect(wrapper.find('.shot-preview.visible').exists()).toBe(true);
    expect(wrapper.find('.shot-preview').prop('src')).toBe(image.images.hidpi);
  });

  it('should display shot preview image normal sized as fallback when hidpi not present', () => {
    const image = getImage();
    delete image.images.hidpi;
    const wrapper = shallow(<ShotImage alt={image.alt} images={image.images} />);
    wrapper.setState({ displayHighResImage: true });
    expect(wrapper.find('.shot-preview.visible').exists()).toBe(true);
    expect(wrapper.find('.shot-preview').prop('src')).toBe(image.images.normal);
  });
});
