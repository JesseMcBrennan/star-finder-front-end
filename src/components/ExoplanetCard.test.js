import React from 'react';
import { shallow } from 'enzyme';
import ExoplanetCard from './ExoplanetCard.js';

describe('ExoplanetCard', () => {
    const mockPlanet = { name: 'Planet1', mass: '35.98', id: 1 }
  // beforeEach(() => {
  // })

  it('should have a name, mass, and delete button', () => {
    let wrapper = shallow(<ExoplanetCard {...mockPlanet}
                key={mockExoplanet.id}
                removePlanet={jest.fn()}
                />)
    expect(wrapper.find('Card')).children.toBe(3)
  })

  it('should match the snapshot', () => {
    let wrapper = shallow(<ExoplanetCard {...mockPlanet}
                key={mockPlanet.id}
                removePlanet={jest.fn()}
                />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke the removePlanet function when the delete button is clicked', () => {
    const mockEvent = jest.fn()
    let wrapper = shallow(<ExoplanetCard {...mockPlanet}
                key={mockPlanet.id}
                removePlanet={mockEvent}
                />)
    wrapper.find('Card').simulate('click')
    expect(mockEvent).toHaveBeenCalled();
    expect(mockEvent).toHaveBeenCalledWith(mockPlanet.id);

  })

})