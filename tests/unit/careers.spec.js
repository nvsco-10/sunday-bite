import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import Careers from '@/views/Careers.vue'

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

  it('gets list of company values', () => {
    expect(wrapper.vm.$data.valuesItems.length).toBeGreaterThan(3)
  })

  it('calls api to get positions items', async () => {
    wrapper.vm.fetchPositions()
    await flushPromises()
    expect(wrapper.vm.$data.positionsItems).toEqual(MOCK_POSITIONS)
  })
})