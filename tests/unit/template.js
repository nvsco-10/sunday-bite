import { shallowMount } from '@vue/test-utils'

import CareersPositions from '@/components/CareersPositions.vue'

describe('CareersPositions.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount()
  })

  afterEach(() => {
    wrapper.unmount()
  })
})