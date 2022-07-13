import { mount, shallow } from '@kdujs/test-utils'
import Empty from './components/Empty.kdu'

describe('Empty.kdu', () => {
  it('properly serializes a shallowly-rendered wrapper', () => {
    const wrapper = shallow(Empty)
    expect(wrapper).toMatchSnapshot()
  })

  it('properly serializes a fully-mounted wrapper', () => {
    const wrapper = mount(Empty)
    expect(wrapper).toMatchSnapshot()
  })
})
