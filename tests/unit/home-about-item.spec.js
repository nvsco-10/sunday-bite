import { shallowMount } from '@vue/test-utils'

import HomeAboutItem from '@/components/HomeAboutItem.vue'

describe('HomeAboutItem.vue', () => {
  const item = {
    id: 1,
    label: "organic",
    img: "https://i.ibb.co/mBZyhzD/organic.png"
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeAboutItem, {
      props: {
        item
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('processes valid props data', () => {
    expect(wrapper.text()).toContain(item.label, item.img)
    
    expect(wrapper.find('img').attributes('src')).toEqual(item.img)
    expect(wrapper.find('img').attributes('alt')).toEqual(item.label)
    expect(wrapper.find('p').text()).toEqual(item.label)
  })

})