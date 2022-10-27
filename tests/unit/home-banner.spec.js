import { shallowMount } from '@vue/test-utils'

import HomeBanner from '@/components/HomeBanner.vue'

describe('HomeBanner.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeBanner)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('contains an h2 with the text: Healthy, hearty meals await. See you soon!', () => {
    expect(wrapper.find('h2').text()).toEqual('Healthy, hearty meals await.See you soon!')
  })
})