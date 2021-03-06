import Vue from 'vue'
import Vuex from 'vuex'
import Product from '../utils/productClass'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: Array<Product>()
  },
  mutations: {
    createProductList (state): void {
      for (let i = 0; i < 20; i++) {
        let type: number, online: boolean, status: boolean
        switch (i % 3) {
          case 1:
            type = 1
            online = false
            status = true
            break
          case 2:
            type = 2
            online = true
            status = false
            break
          default:
            type = 3
            online = false
            status = false
            break
        }
        const product: Product = new Product(i, type, online, status)
        state.productList.push(product)
      }
    },
    change(state,payload):void {
      state.productList.forEach((item: Product) => {
        let product:Product = item
        if (product.id === payload.id) {
          product.status = payload.status
          product.name = payload.name
          product.online = payload.online
          state.productList.splice(payload.id,1,product)
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
