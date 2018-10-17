import React from 'react';
import { shallow } from 'enzyme';
import IdeaContainer from './IdeaContainer';

describe('IdeaContainer', () => {
  let mockIdeas
  let wrapper

  it('should render all idea cards', () => {
    mockIdeas = [{ title: 'Testing1', body: 'I used to hate it, but now I love it.', id: Date.now() },
          { title: 'Testing2', body: 'Now that I love it, I am unstoppable.', id: Date.now() }]
    wrapper = shallow(<IdeaContainer ideas={mockIdeas} />)
    expect(wrapper.find('Container')).children.length.toBe(2)
  })

  it('should match the snapshot', () => {
    mockIdeas = [{ title: 'Testing1', body: 'I used to hate it, but now I love it.', id: Date.now() },
          { title: 'Testing2', body: 'Now that I love it, I am unstoppable.', id: Date.now() }]
    wrapper = shallow(<IdeaContainer ideas={mockIdeas} />)    
    expect(wrapper).toMatchSnapshot()
  })
})