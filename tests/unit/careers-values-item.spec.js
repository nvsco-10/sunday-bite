import { shallowMount } from '@vue/test-utils'

import CareersValuesItem from '@/components/CareersValuesItem.vue'

describe('CareersValuesItem.vue', () => {
  const item = {
    id: 5,
    title: 'cherish teamwork',
    desc: 'Jianbing artisan mixtape, flexitarian kinfolk same locavore activated charcoal irony.',
    img: 'https://i.ibb.co/tsX7Cq2/teamwork.png'
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CareersValuesItem, {
      props: {
        item
      }
    })
  })


  it('processes valid props data', () => {
    expect(wrapper.text()).toContain(item.title, item.desc, item.img)
    
    expect(wrapper.find('img').attributes('src')).toBe(item.img)
    expect(wrapper.find('h5').text()).toBe(item.title)
    expect(wrapper.find('p').text()).toBe(item.desc)
  })
})