import { shallow } from '@kdujs/test-utils'
import ListSpaced from './components/ListSpaced.kdu'

describe('ListSpaced.kdu', () => {
  it('hasn\'t changed snapshot', () => {
    const wrapper = shallow(ListSpaced)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
