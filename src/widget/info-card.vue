<template>
  <div>
    <div class="news-card">
      <div class="news-title">
        {{ title }}
      </div>
      <div class="item-imgbox">
        <div
          class="news-img"
          :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
        ></div>
        <div v-if="img_count > 0" class="img-count">
          {{ img_count }}
        </div>
      </div>
      <div class="news-info">
        <div class="left media-mark">爱速搭 · 低代码平台</div>
        <div v-if="comment_count && comment_count != 0" class="cmt-num right">
          {{ agreeDataFormat(comment_count) }}评
        </div>
      </div>
      <rate v-model="rateVal"></rate>
    </div>
    <div class="demo2">
      <Link href="https://element.eleme.io" target="_blank">默认链接</Link>
      <Link type="primary">主要链接</Link>
      <Link type="success">成功链接</Link>
      <Link type="warning">警告链接</Link>
      <Link type="danger">危险链接</Link>
      <Link type="info">信息链接</Link>
    </div>
    <div class="demo3">
      <Menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <Submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <MenuItemGroup>
            <template slot="title">分组一</template>
            <MenuItem index="1-1">选项1</MenuItem>
            <MenuItem index="1-2">选项2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <MenuItem index="1-3">选项3</MenuItem>
          </MenuItemGroup>
          <Submenu index="1-4">
            <template slot="title">选项4</template>
            <MenuItem index="1-4-1">选项1</MenuItem>
          </Submenu>
        </Submenu>
        <MenuItem index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>
<script>
// 按需引入element-ui中的组件
import { Rate, Link, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';

export default {
  data() {
    return {
      isAlive: true,
      isFirstVisit: true,
      img_count: 3,
      title:
        'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
      backgroundImage:
        'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
      comment_count: 2021,
      rateVal: 3,
    };
  },
  components: {
    Rate,
    Link,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
  },
  mounted() {
    this.isFirstVisit = false;
  },
  activated() {
    this.isAlive = true;
  },
  deactivated() {
    this.isAlive = false;
  },
  methods: {
    agreeDataFormat(agreeData) {
      if (agreeData && agreeData <= 9999) {
        return agreeData;
      } else if (agreeData && agreeData > 9999) {
        return `${Math.floor(agreeData / 1000) / 10}w`;
      }
    },
  },
};
</script>
<style lang="scss">
.news-card {
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  margin: 0 12px;
  padding-bottom: 12px;

  .news-title {
    padding: 6px 0;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height: 22px;
    color: #5f5e5e;
  }

  .item-imgbox {
    position: relative;
    height: 395px;
    background: #f0f0f0;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;

    .news-img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background-size: cover;
    }

    .img-count {
      position: absolute;
      top: 0;
      right: 0;
      padding: 6px 8px;
      color: #fff;
      min-width: 60px;
      text-align: center;
      line-height: 1.2;
      background: rgba(0, 0, 0, 0.4);
      font-size: 25px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }

  .news-info {
    font-family: PingFangSC-Light;
    height: 28px;
    box-sizing: border-box;
  }

  .media-mark,
  .cmt-num {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    font-family: PingFangSC-Light;
    font-size: 18px;
    color: #828282;
  }
}
</style>
