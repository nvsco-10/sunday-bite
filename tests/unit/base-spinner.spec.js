import { shallowMount } from '@vue/test-utils'

import BaseSpinner from '@/components/BaseSpinner.vue'

describe('BaseSpinner.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseSpinner)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('contains a span with the class: loader', () => {
    expect(wrapper.find('span').attributes('class')).toEqual('loader')
  })
})