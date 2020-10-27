<template>
  <div class="about">
    <h1>This is an about page</h1>
      <h3>
        {{product.type===1? '华为NB灯控器-1':''}}
        {{product.type===2? '方大NB灯控器':''}}
        {{product.type===3? '顺舟zigbee灯控器':''}}
        </h3>
       <div>名称 : {{ product.name }}</div>
    <div>
      在线状态 :
      {{ product.online?'在线':'下线' }}
    </div>
    <div>
      开关状态 :
      {{ product.status?'开':'关' }}
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
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    product (): object {
      // console.log(JSON.parse(this.$route.params.product))
      return JSON.parse(this.$route.params.product)
    }
  }
})
</script>
