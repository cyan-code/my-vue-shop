export default {
  addToCart (state, { detail }) {
    const isExist = state.cart.some(item => item.id === detail.id)
    if (isExist) {
      state.cart.map(item => {
        if (item.id === detail.id) item.count++
        return item
      })
    } else {
      state.cart.push({
        ...detail,
        count: 1,
        checked: true
      })
    }
  },
  toggleCheck (state, { id }) {
    state.cart.map(item => {
      if (item.id === id) item.checked = !item.checked
      return item
    })
  },
  toggleAllCheck (state) {
    const isAllChecked = this.getters.isAllCheck
    state.cart.map(item => {
      if (isAllChecked) {
        item.checked = false
      } else {
        item.checked = true
      }
      return item
    })
  },
  delCartItem (state, { id }) {
    // 注意filter不会改变原数组，需要重新赋值
    state.cart = state.cart.filter(item => item.id !== id)
  },
  changeItemCount (state, { id, count }) {
    return state.cart.map(item => {
      if (item.id === id) item.count = count
      return item
    })
  }
}
