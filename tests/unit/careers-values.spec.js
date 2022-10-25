import { shallowMount } from '@vue/test-utils'

import CareersValues from '@/components/CareersValues.vue'
import CareersValuesItem from '@/components/CareersValuesItem.vue'

describe('CareersValues.vue', () => {
    it('renders list of values', () => {
    const values = [{}, {}, {}]

    const wrapper = shallowMount(CareersValues, {
      props: {
        valuesItems: values
      }
    })

    const listOfValues = wrapper.findAllComponents(CareersValuesItem)
    expect(listOfValues.length).toEqual(values.length)
  })
})
