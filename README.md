# jest-serializer-kdu

Jest Kdu snapshot serializer

## Installation

```
npm install --save-dev jest-serializer-kdu
```

## Usage

You need to tell Jest to use the serializer. Add this to your Jest config:

```
"snapshotSerializers": [
  "<rootDir>/node_modules/jest-serializer-kdu"
]
```

And your snapshot tests will be pretty printed 💅

```js
import { shallow } from 'avoriaz'
import Basic from './Basic.kdu'
import { createRenderer } from 'kdu-server-renderer'

describe('Basic.kdu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
```
