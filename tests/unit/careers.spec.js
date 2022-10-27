import { shallowMount } from '@vue/test-utils'

import Careers from '@/views/Careers.vue'
import CareersValues from '@/components/CareersValues.vue'
import CareersPositions from '@/components/CareersPositions.vue'

const MOCK_POSITIONS = [
  {
    "title": "marketing assistant",
    "positionType": "full-time",
    "location": "remote"
  },
  {
    "title": "host",
    "positionType": "full-time",
    "location": "on-site"
  },
  {
    "title": "web developer",
    "positionType": "full-time",
    "location": "remote"
  }
]

// https://medium.com/fernandodof/how-to-mock-fetch-calls-with-jest-a666ae1e7752
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_POSITIONS)
}))

describe('Careers.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Careers)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('gets list of company values', async () => {
    const values = [{},{},{}]

    await wrapper.setData({
      valuesItems: values
    })

    expect(wrapper.vm.$data.valuesItems.length).toEqual(values.length)
    expect(wrapper.vm.$data.valuesItems).toEqual(values)
  })

  it('renders CareersValues component', () => {
    expect(wrapper.findComponent(CareersValues).exists()).toBe(true)
  })

  it('calls api to get positions items', async () => {
    expect(wrapper.vm.$data.positionsItems).toEqual(MOCK_POSITIONS)
  })

  it('renders CareersPositions component', () => {
    expect(wrapper.findComponent(CareersPositions).exists()).toBe(true)
  })

  it('contains a link button that scrolls down to positions', () => {
    expect(wrapper.find('a').attributes('class')).toEqual('btn')
    expect(wrapper.find('a').attributes('href')).toEqual('#positions')
  })
})