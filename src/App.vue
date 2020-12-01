<template>
  <div id="app">
    <div class="header">
      <van-nav-bar
        title="myApp"
        left-text="返回"
        right-text="按钮"
        left-arrow
      />

    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <router-view name="nav-bar" />
    </div>
  </div>
</template>

<script>
// import Router from '@/router'
export default {
}

</script>

<style lang="scss">
// 清除默认样式
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

td:not([align]),
th:not([align]) {
  text-align: left;
}
// 清除布局结束
html,body,#app {
  height: 100%;
}
#app {
  display:flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow-x: hidden;
}
.footer {
  height: 50px;
}
// .van-nav-bar__content {
//   background-color: cadetblue;
// }
</style>
