import { shallowMount } from '@vue/test-utils'

import TheFooter from '@/components/TheFooter.vue'

describe('TheFooter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheFooter)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('it shows the contact icons and information - phone, email, address', () => {
    expect(wrapper.findAll('.contact-info').length).toEqual(3)

    expect(wrapper.findAll('.contact-info')[0].text()).toEqual('903.222.3182')
    expect(wrapper.findAll('.contact-info')[1].text()).toEqual('contact@thesundaybite.com')
    expect(wrapper.findAll('.contact-info')[2].text()).toEqual('743 Freedom Lane Modesto, California USA 12345')

    expect(wrapper.findAll('i')[0].attributes('class')).toEqual('fa-solid fa-phone')
    expect(wrapper.findAll('i')[1].attributes('class')).toEqual('fa-solid fa-envelope')
    expect(wrapper.findAll('i')[2].attributes('class')).toEqual('fa-solid fa-location-dot')
  })

  it('contains links to website policies and disclaimers', () => {
    expect(wrapper.find('.policies-links').exists()).toBe(true)
  })
})