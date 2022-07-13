import { mount, shallow } from '@kdujs/test-utils'
import Parent from './components/Parent.kdu'

describe('Parent.kdu', () => {
  it('mount snapshot', () => {
    const wrapper = mount(Parent)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('shallow snapshot', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('properly serializes a shallowly-rendered wrapper', () => {
    const wrapper = shallow(Parent)
    expect(wrapper).toMatchSnapshot()
  })

  it('properly serializes a fully-mounted wrapper', () => {
    const wrapper = mount(Parent)
    expect(wrapper).toMatchSnapshot()
  })
})
