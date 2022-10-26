import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import Menu from '@/views/Menu.vue'
import MenuItem from '@/components/MenuItem.vue'

const MOCK_MENU_ITEMS = [
  {
    "id": 1,
    "title": "buttermilk pancakes",
    "category": "breakfast",
    "price": 11.99,
    "img": "https://i.ibb.co/TBpGz90/item-1.jpg",
    "description": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    "id": 2,
    "title": "smoothie bowl",
    "category": "breakfast",
    "price": 12.99,
    "img": "https://i.ibb.co/7rygTD3/item-2.jpg",
    "description": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
  },
  {
    "id": 3,
    "title": "turkey club",
    "category": "entrees",
    "price": 14.99,
    "img": "https://i.ibb.co/dMpfTQB/item-5.jpg",
    "description": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
  },
  {
    "id": 4,
    "title": "berries & cream",
    "category": "dessert",
    "price": 8.99,
    "img": "https://i.ibb.co/bRZBT8h/item-10.jpg",
    "description": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
  }
]

// https://medium.com/fernandodof/how-to-mock-fetch-calls-with-jest-a666ae1e7752
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_MENU_ITEMS)
}))

describe('Menu.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Menu)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('calls api to get menu items', async () => {
    wrapper.vm.fetchMenu()
    await flushPromises()
    expect(wrapper.vm.$data.menuItems).toEqual(MOCK_MENU_ITEMS)
  })

  it('renders list of menu items', () => {
    const listOfMenuItems = wrapper.findAllComponents(MenuItem)
    expect(listOfMenuItems.length).toEqual(MOCK_MENU_ITEMS.length)
  })

  it('shows all menu items when all category clicked', () => {
    wrapper.find('#all').trigger('click')
    expect(wrapper.vm.$data.filteredMenuItems).toEqual(MOCK_MENU_ITEMS)
  })

  it('filters menu to show breakfast items when breakfast category clicked', () => {
    const breakfastItems = [
      {
      "id": 1,
      "title": "buttermilk pancakes",
      "category": "breakfast",
      "price": 11.99,
      "img": "https://i.ibb.co/TBpGz90/item-1.jpg",
      "description": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
      },
      {
        "id": 2,
        "title": "smoothie bowl",
        "category": "breakfast",
        "price": 12.99,
        "img": "https://i.ibb.co/7rygTD3/item-2.jpg",
        "description": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
      }
    ]

    wrapper.find('#breakfast').trigger('click')
    expect(wrapper.vm.$data.filteredMenuItems).toEqual(breakfastItems)
  })

  it('filters menu to show entrees when entrees category clicked', () => {
    const entreesItems = [
      {
        "id": 3,
        "title": "turkey club",
        "category": "entrees",
        "price": 14.99,
        "img": "https://i.ibb.co/dMpfTQB/item-5.jpg",
        "description": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
      }
    ]

    wrapper.find('#entrees').trigger('click')
    expect(wrapper.vm.$data.filteredMenuItems).toEqual(entreesItems)
  })

  it('filters menu to show desserts when dessert category clicked', () => {
    const dessertItems = [
      {
        "id": 4,
        "title": "berries & cream",
        "category": "dessert",
        "price": 8.99,
        "img": "https://i.ibb.co/bRZBT8h/item-10.jpg",
        "description": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
      }
    ]

    wrapper.find('#dessert').trigger('click')
    expect(wrapper.vm.$data.filteredMenuItems).toEqual(dessertItems)
  })
})