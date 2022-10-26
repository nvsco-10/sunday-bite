import { shallowMount } from '@vue/test-utils'
import MenuItem from '@/components/MenuItem.vue'

describe('MenuItem.vue', () => {
  let wrapper;

  const item = {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 11.99,
    img: 'https://i.ibb.co/TBpGz90/item-1.jpg',
    description: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
  }

  beforeEach(() => {
    wrapper = shallowMount(MenuItem, {
      props: { 
        item 
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('processes valid props data', () => {
    expect(wrapper.text()).toContain(item.title, item.price, item.img, item.description)

    expect(wrapper.find('.name').text()).toEqual('buttermilk pancakes')
    expect(wrapper.find('.menu-img').attributes('src')).toBe('https://i.ibb.co/TBpGz90/item-1.jpg')
    expect(wrapper.find('.price').text()).toContain('11.99')
    expect(wrapper.find('.description').text()).toEqual('I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed')
   
  })
})