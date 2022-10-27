import { shallowMount, flushPromises } from '@vue/test-utils'

import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheHeader)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('contains an img tag that renders the logo', () => {
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('contains nav links to home, menu, and careers', () => {
    expect(wrapper.findAll('.nav-link').length).toEqual(3)

    expect(wrapper.findAll('.nav-link')[0].text()).toEqual('Home')
    expect(wrapper.findAll('.nav-link')[1].text()).toEqual('Menu')
    expect(wrapper.findAll('.nav-link')[2].text()).toEqual('Careers')

    expect(wrapper.findAll('.nav-link')[0].attributes('href')).toEqual('/')
    expect(wrapper.findAll('.nav-link')[1].attributes('href')).toEqual('/menu')
    expect(wrapper.findAll('.nav-link')[2].attributes('href')).toEqual('/careers')
  })

  it('contains a toggle button that toggles the nav menu in smaller screens', async () => {
    // hides menu upon component mount
    expect(wrapper.find('ul').attributes('class')).toEqual('nav-links')
    expect(wrapper.vm.$data.showMenu).toBe(false)
    
    // shows menu
    wrapper.find('.toggle-btn').trigger('click')
    await flushPromises()
    expect(wrapper.find('ul').attributes('class')).toContain('show')
    expect(wrapper.vm.$data.showMenu).toBe(true)

    // hides menu
    wrapper.find('.toggle-btn').trigger('click')
    await flushPromises()
    expect(wrapper.find('ul').attributes('class')).toEqual('nav-links')
    expect(wrapper.vm.$data.showMenu).toBe(false)
  })
})