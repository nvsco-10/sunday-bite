import { shallowMount } from '@vue/test-utils'

import CareersValues from '@/components/CareersValues.vue'
import CareersValuesItem from '@/components/CareersValuesItem.vue'

describe('CareersValues.vue', () => {
  const values = [
    {
    id: 1,
    title: 'healthy work-life balance',
    desc: 'Lyft farm-to-table cold-pressed semiotics messenger bag. Dreamcatcher chicharrones twee.',
    img: 'https://i.ibb.co/34TFHmb/wellbeing.png'
    },
    {
      id: 2,
      title: 'prioritize our people',
      desc: 'Jianbing artisan mixtape, flexitarian kinfolk same locavore activated charcoal irony seitan.',
      img: 'https://i.ibb.co/5xRBB7Y/positive.png'
    }
  ]

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CareersValues, {
      props: {
        valuesItems: values
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders list of values', () => {
    const listOfValues = wrapper.findAllComponents(CareersValuesItem)
    expect(listOfValues.length).toEqual(values.length)
  })
})
