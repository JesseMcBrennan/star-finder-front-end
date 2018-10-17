import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let mockPlanets
  let wrapper

  it('should render all idea cards', () => {
    mockPlanets = [{ name: 'Planet1', mass: '22.90', id: 1 },
          { name: 'Testing2', mass: '35.98', id: 2 }]
    wrapper = shallow(<CardContainer planets={mockPlanets} />)
    expect(wrapper.find('Container')).children.length.toBe(2)
  })

  it('should match the snapshot', () => {
    mockPlanets = [{ name: 'Planet1', mass: '22.90', id: 1 },
          { name: 'Testing2', mass: '35.98', id: 2 }]
    wrapper = shallow(<CardContainer planets={mockPlanets} />)    
    expect(wrapper).toMatchSnapshot()
  })
})