export default {
  // 计算总价
  sumPrice (state) {
    const cart = state.cart
    return cart.reduce((sum, item) => {
      if (item.checked) {
        sum += item.price * item.count
      }
      return sum
    }, 0)
  },
  isAllCheck ({ cart }) {
    if (cart.length === 0) {
      return false
    } else {
      return cart.every(item => item.checked)
    }
  },
  // 购物车图标显示件数
  cartNotifyNum (state) {
    return state.cart.reduce((res, item) => {
      return res + item.count
    }, 0)
  },
  isSubmitDisabled (state) {
    const isAllUnchecked = state.cart.every(item => item.checked === false)
    if (state.cart.length === 0 || isAllUnchecked) {
      return true
    } else {
      return false
    }
  }
}
