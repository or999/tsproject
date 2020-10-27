<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg='msg'/>
    <ul class="produstList">
      <li v-for="(item,index) in products" :key="index">
        <h3>
        {{item.type===1? '华为NB灯控器-1':''}}
        {{item.type===2? '方大NB灯控器':''}}
        {{item.type===3? '顺舟zigbee灯控器':''}}
        </h3>
       <div>名称 : {{ item.name }}</div>
    <div>
      在线状态 :
      {{ item.online?'在线':'下线' }}
    </div>
    <div>
      开关状态 :
      {{ item.status?'开':'关' }}
    </div>
    <div>
      灯控器地址 ：
      {{ item.address }}
    </div>
       <button @click="toAbout(item)">
          详情
        </button>
         <button
        >编辑</button
      >
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg='Welcome to My Vue.js + TypeScript spa'
  products=this.$store.state.productList
  toAbout (item: object): void{
    this.$router.push({
      name: 'About',
      params: {
        product: JSON.stringify(item)
      }
    })
  }
}
</script>
