import { shallowMount } from '@vue/test-utils'

import CareersPositions from '@/components/CareersPositions.vue'
import CareersPositionsItem from '@/components/CareersPositionsItem.vue'

describe('CareersPositions.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CareersPositions, {
      props: {
        positionsItems: []
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('shows div with "Sorry, no open positions available" text if positionsItems array is empty', () => {
    expect(wrapper.vm.$props.positionsItems.length).toEqual(0)
    expect(wrapper.find('.no-positions').exists()).toBe(true)
    expect(wrapper.find('.no-positions').text()).toEqual('Sorry, no open positions available..')
  })

  it('hides div with "Sorry, no open positions available" text if positionsItems array is not empty', async () => {
    const items = [{}, {}, {}]
    
    await wrapper.setProps({
      positionsItems: items
    })

    expect(wrapper.vm.$props.positionsItems.length).toBeGreaterThan(0)
    expect(wrapper.vm.$props.positionsItems.length).toEqual(items.length)
    expect(wrapper.find('.no-positions').exists()).toBe(false)
  })

  it('renders list of positions items if positionsItems array is not empty', async () => {
    const items = [{}, {}, {}]
    
    await wrapper.setProps({
      positionsItems: items
    })

    expect(wrapper.vm.$props.positionsItems.length).toBeGreaterThan(0)
    expect(wrapper.vm.$props.positionsItems.length).toEqual(items.length)
    expect(wrapper.vm.$props.positionsItems).toEqual(items)

    const listOfPositions = wrapper.findAllComponents(CareersPositionsItem)
    expect(listOfPositions.length).toEqual(items.length)
  })
})