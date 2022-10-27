import { shallowMount } from '@vue/test-utils'

import HomeHero from '@/components/HomeHero.vue'

describe('HomeHero.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeHero)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('contains an h1 with the text: The Sunday Bite', () => {
    //h1 has a line break
    expect(wrapper.find('h1').text()).toContain('TheSunday Bite')
  })

  it('contains a p tag with the tagline: Delicious food for every mood', () => {
    expect(wrapper.find('p').text()).toContain('Delicious food for every mood')
  })

  it('contains a link button with the text ORDER NOW and opens up https://www.doordash.com/ in a new tab' , () => {
    expect(wrapper.find('a').text()).toEqual('ORDER NOW')
    expect(wrapper.find('a').attributes('class')).toEqual('btn')
    expect(wrapper.find('a').attributes('href')).toEqual('https://www.doordash.com/')
    expect(wrapper.find('a').attributes('target')).toEqual('_blank')
  })

  it('contains an img tag that renders the hero image of the sunday bite poke bowl', () => {
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('alt')).toContain('the sunday bite poke bowl')
  })
})