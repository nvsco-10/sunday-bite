import { shallowMount } from '@vue/test-utils'

import HomeGalleryItem from '@/components/HomeGalleryItem.vue'

describe('HomeGalleryItem.vue', () => {
  const item = {
    id: 1,
    label: "breakfast in a jar",
    img: "https://i.ibb.co/3dT878B/oats.jpg"
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeGalleryItem, {
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
    expect(wrapper.find('h4').text()).toEqual(item.label)
  })

})