import { shallow } from '@kdujs/test-utils'
import List from './components/List.kdu'

describe('List.kdu', () => {
  it('hasn\'t changed snapshot', () => {
    const wrapper = shallow(List, {
      propsData: {
        items: ['one', 'two', 'three']
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
