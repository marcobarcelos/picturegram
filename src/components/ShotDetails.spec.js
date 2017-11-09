import React from 'react';
import { shallow } from 'enzyme';
import ShotDetails from './ShotDetails';

describe('<ShotDetails />', () => {
  const getShot = () => ({
    title: 'Test shot',
    user: {
      name: 'tester'
    },
    images: {
      hidpi: 'http://images.com/img-high.png',
      normal: 'http://images.com/img-normal.png'
    },
    views_count: 10,
    likes_count: 20,
    description: '<script>(function danger() { console.log(\'Malicious script\'); })()</script>Test <b>Sanitize</b>'
  });

  it('should display shot title', () => {
    const shot = getShot();
    const wrapper = shallow(<ShotDetails shot={shot} />);
    const title = wrapper.find('.shot-title').text();
    expect(title).toBe(shot.title);
  });

  it('should display shot author', () => {
    const shot = getShot();
    const wrapper = shallow(<ShotDetails shot={shot} />);
    const title = wrapper.find('.shot-author').text();
    expect(title.includes(shot.user.name)).toBe(true);
  });

  it('should display shot preview image hidpi', () => {
    const shot = getShot();
    const wrapper = shallow(<ShotDetails shot={shot} />);
    const imageSrc = wrapper.find('.shot-preview').prop('src');
    expect(imageSrc).toBe(shot.images.hidpi);
  });

  it('should display shot preview image normal sized as fallback when hidpi not present', () => {
    const shot = getShot();
    delete shot.images.hidpi;
    const wrapper = shallow(<ShotDetails shot={shot} />);
    const imageSrc = wrapper.find('.shot-preview').prop('src');
    expect(imageSrc).toBe(shot.images.normal);
  });

  it('should display shot description securely', () => {
    const shot = getShot();
    const wrapper = shallow(<ShotDetails shot={shot} />);
    const shotDescriptionHtml = wrapper.find('.shot-description').html();

    expect(shotDescriptionHtml).toBe('<span class="shot-description">Test <b>Sanitize</b></span>');
  });
});
