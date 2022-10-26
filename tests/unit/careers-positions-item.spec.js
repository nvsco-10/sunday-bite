import { shallowMount } from '@vue/test-utils'

import CareersPositionsItem from '@/components/CareersPositionsItem.vue'

describe('CareersPositionsItem.vue', () => {
  const item = {
    "title": "marketing assistant",
    "positionType": "full-time",
    "location": "remote",
    "locationAddress": "dallas,tx"
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CareersPositionsItem, {
      props: {
        item
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('processes valid props data', () => {
    expect(wrapper.text()).toContain(item.title, item.positionType, item.datePosted, item.location, item.locationAddress)
    
    expect(wrapper.find('.title').text()).toEqual(item.title)
    expect(wrapper.find('.location').text()).toContain(item.location)
    expect(wrapper.find('.location-address').text()).toContain(item.locationAddress)
  })
})