import React from 'react';
import { shallow } from 'enzyme';
import Header from 'client/components/header/header';

import Layout from './layout';


it('renders Header component', () => {
  const component = shallow(<Layout />);
  expect(component.find(Header)).toHaveLength(1);
});
