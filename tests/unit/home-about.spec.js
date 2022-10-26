import { shallowMount } from '@vue/test-utils'

import HomeAbout from '@/components/HomeAbout.vue'
import HomeAboutItem from '@/components/HomeAboutItem.vue'

describe('CareersPositions.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeAbout)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('has a span that contains the text "Howdy!"', () => {
    expect(wrapper.find('span').text()).toEqual('Howdy!')
  })

  it('renders a list of about items', async () => {
    const items = [{}, {}, {}]

    await wrapper.setData({
      aboutItems: items
    })

    expect(wrapper.vm.$data.aboutItems).toEqual(items)

    const listOfAboutItems = wrapper.findAllComponents(HomeAboutItem)
    expect(listOfAboutItems.length).toEqual(items.length)
    
  })
})