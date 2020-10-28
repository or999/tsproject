<template>
  <div>
      <h3>
        {{product.type===1? '华为NB灯控器-1':''}}
        {{product.type===2? '方大NB灯控器':''}}
        {{product.type===3? '顺舟zigbee灯控器':''}}
        </h3>
       <div>名称 : {{ name }}</div>
       <input type="text" v-model="name">
    <div>
      在线状态 :
      {{ online ?'在线':'下线' }}
       <button @click="changeOline">切换</button>
    </div>
    <div>
      开关状态 :
      {{ status ?'开放':'关闭' }}
      <button @click="changeStatus">切换</button>
    </div>
    <div>
     亮度 :
      {{ product.brightness }}
    </div>
     <div>
      电压 (V)
      {{ product.voltage }}
    </div>
     <div>
     电流(A)
      {{ product.electric }}
    </div>
     <div>
     功率因子:
      {{ product.powerFactor }}
    </div>
     <div>
      有功功率 (W)
      {{ product.activePower }}
    </div>
     <div>
      赫兹(Hz)
      {{ product.hz }}
    </div>
     <div>
      工作时间(h)
      {{ product.workTime }}
    </div>
      <div>
      灯控器地址：
      {{ product.address }}
    </div>
    <button @click="submit">提交修改</button>
    <button @click="back">返回</button>
  </div>
</template>
<script lang="ts">
import Product from '../utils/productClass'
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      product: Product,
      status: true,
      name: '',
      online: true,
      id: 0
    }
  },
  created () {
    this.init()
  },
  methods: {
    init (): void{
      this.product = JSON.parse(this.$route.params.product)
      const { id, name, status, online } = JSON.parse(this.$route.params.product)
      this.status = status
      this.name = name
      this.online = online
      this.id = id
    },
    submit (): void{
      const { id, status, name, online } = this
      this.$store.commit('change', { id, status, name, online })
      window.alert('修改成功！点击返回查看')
    },
    changeStatus (): void{
      this.status = !this.status
    },
    changeOline (): void{
      this.online = !this.online
    },
    back (): void{
      this.$router.back()
    }
  }
})
</script>
<style>

</style>
