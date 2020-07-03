import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'
import Greeting from '@/components/Greeting.vue'

describe('Homepage', () => {
  const wrapper = mount(index)
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('contain class hi', () => {
    expect(wrapper.classes('hi')).toBeTruthy()
  })
  test('contain component Greeting', () => {
    expect(wrapper.findComponent(Greeting).exists()).toBeTruthy()
  })
})
