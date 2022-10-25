import { shallowMount } from '@vue/test-utils'
import MenuItem from '@/components/MenuItem.vue'

describe('MenuItem.vue', () => {
  it('renders props.item when passed', () => {
    const item = {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 11.99,
      img: "https://i.ibb.co/TBpGz90/item-1.jpg",
      description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    }

    const wrapper = shallowMount(MenuItem, {
      props: { item }
    })
    
    expect(wrapper.text()).toContain(item.title, item.category, item.price, item.img, item.description)
  })
})