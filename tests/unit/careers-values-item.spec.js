import { shallowMount } from '@vue/test-utils'

import CareersValuesItem from '@/components/CareersValuesItem.vue'

describe('CareersValuesItem.vue', () => {
  const item = {
    id: 5,
    title: "cherish teamwork",
    desc: "Jianbing artisan mixtape, flexitarian kinfolk same locavore activated charcoal irony.",
    img: "https://i.ibb.co/tsX7Cq2/teamwork.png"
  }

  it('renders image when passed props.item', () => {
    const wrapper = shallowMount(CareersValuesItem, {
      props: {
        item
      }
    })

    expect(wrapper.find('img').attributes('src')).toBe(item.img)
  })

  it('renders props.item when passed', () => {
    const wrapper = shallowMount(CareersValuesItem, {
      props: {
        item
      }
    })

    expect(wrapper.text()).toContain(item.title, item.desc, item.img)
  })
})