<template>
  <div class="tabs">
    <el-tag v-for="(item,index) in tags" :key="item.path" size="mini" :closable="item.name !== 'home'" :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changeMenu(item)" @close="handleClose(item,index)">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations(['closeTag']),
    // 点击 tag 跳转
    changeMenu(item) {
      console.log(item)
      this.$router.push({ name: item.name })
    },
    // 点击 tag 删除
    handleClose(item, index) {
      const length = this.tags.length - 1
      this.closeTag(item)
      if (item.name !== this.$route.name) {
        return
      }
      // 删除最后一项的时候
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>