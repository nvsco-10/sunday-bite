import { shallowMount } from '@vue/test-utils'

import HomeGallery from '@/components/HomeGallery.vue'
import HomeGalleryItem from '@/components/HomeGalleryItem.vue'

describe('HomeGallery.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeGallery)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders a list of about items', async () => {
    const items = [{}, {}, {}]

    await wrapper.setData({
      galleryItems: items
    })

    expect(wrapper.vm.$data.galleryItems).toEqual(items)

    const listOfGalleryItems = wrapper.findAllComponents(HomeGalleryItem)
    expect(listOfGalleryItems.length).toEqual(items.length)
    
  })
})