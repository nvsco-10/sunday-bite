import { shallowMount } from '@vue/test-utils'

import Home from '@/views/Home.vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeAbout from '@/components/HomeAbout.vue'
import HomeGallery from '@/components/HomeGallery.vue'
import HomeBanner from '@/components/HomeBanner.vue'

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Home)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the hero component', () => {
    expect(wrapper.findComponent(HomeHero).exists()).toBe(true)
  })

  it('renders the about component', () => {
    expect(wrapper.findComponent(HomeAbout).exists()).toBe(true)
  })

  it('renders the gallery component', () => {
    expect(wrapper.findComponent(HomeGallery).exists()).toBe(true)
  })

  it('renders the banner component', () => {
    expect(wrapper.findComponent(HomeBanner).exists()).toBe(true)
  })
})