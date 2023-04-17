<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <Tag></Tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Tag from '@/components/Tag.vue'
export default {
  data() {
    return {}
  },
  components: {
    Aside,
    Header,
    Tag
  }
}
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>