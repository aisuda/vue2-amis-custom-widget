# vue-custom-widget-template
> amis自定义组件模板（vue2.0技术栈）
- 备注：主要用于充当amis-widget-cli中的vue技术栈组件模板

### 目录说明
- src: 自定义组件源码；
- src/public: 存放静态资源，比如 js、css、img等；
- src/assets: 存放组件静态资源，比如 css、img等，此处存放的静态资源会经过webpack构建；
- src/widget: 组件源码；
- src/widget/info-card.vue: 自定义组件代码；
- src/index.js: 用于注册一个amis渲染器，注册成功后编辑器画布区中才会正常展示自定义组件内容；
- src/widget/plugin/info-card-plugin.jsx: 用于注册一个amis-editor插件，注册成功后编辑器左侧组件面板中会展示；
- amis.config.js: amis-widget-cli配置文件。

### 开发说明

1. **安装依赖**
```bash
$ npm i 或者 yarn
```

2. **dev: 本地开发模式（带热更新）**
> dev开发模式：用于在本地editor中调试自定义组件。
```bash
$ npm run dev
```

3. **preview: 组件预览模式（带热更新）**
> preview模式：用于预览自定义组件内容。
```bash
$ npm run preview
```

4. **linkDebug: 外链调试（amis-saas中预览自定义组件）**
> linkDebug模式：用于在amis-saas中预览和调试自定义组件。
```bash
$ npm run linkDebug
```
5. **build2lib: 构建自定义组件输出产物**
> build2lib模式：用于构建发布到 npm 中的文件，默认存放到 当前dist目录中。
```bash
$ npm run build2lib
```

### 配置项说明（amis-widget-cli）
[请查看amis-widget-cli](https://github.com/aisuda/amis-widget-cli)

