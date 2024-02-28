/*! For license information please see infoCardPlugin.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.amisWidget = t())
    : (e.amisWidget = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {
        d: function (t, n) {
          for (var o in n)
            e.o(n, o) &&
              !e.o(t, o) &&
              Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        r: function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        },
      },
      t = {};
    e.r(t),
      e.d(t, {
        InfoCardPlugin: function () {
          return o;
        },
        default: function () {
          return a;
        },
      });
    var n = require('amis-widget'),
      o = function () {
        (this.rendererName = 'vue-info-card'),
          (this.$schema = '/schemas/UnkownSchema.json'),
          (this.name = 'vue组件'),
          (this.description = '信息展示卡片'),
          (this.tags = ['自定义']),
          (this.icon = 'fa fa-file-code-o'),
          (this.scaffolds = [
            {
              type: 'vue-info-card',
              label: 'vue组件1',
              name: 'info-card1',
              scaffold: {
                type: 'vue-info-card',
                label: 'vue组件1',
                title:
                  'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                backgroundImage:
                  'https://suda.cdn.bcebos.com/widget-tpl/%E6%99%BA%E8%83%BD%E7%94%9F%E6%80%81.png',
                img_count: 5,
                comment_count: 2021,
              },
            },
            {
              type: 'vue-info-card',
              label: 'vue组件2',
              name: 'info-card2',
              tags: ['自定义2'],
              description: '信息展示卡片2',
              scaffold: {
                type: 'vue-info-card',
                label: 'vue组件2',
                title:
                  '爱速搭是百度智能云推出的低代码开发平台，它灵活性强，对开发者友好，在百度内部大规模使用，有超过 4w 内部页面是基于它制作的，是百度内部中台系统的核心基础设施。',
                backgroundImage:
                  'https://suda.cdn.bcebos.com/widget-tpl/%E4%BA%92%E9%80%9A%E4%BA%92%E8%81%94.png',
                img_count: 3,
                comment_count: 2022,
              },
            },
          ]),
          (this.previewSchema = {
            type: 'vue-info-card',
            label: 'vue-info-card',
          }),
          (this.panelTitle = '配置'),
          (this.panelControls = [
            {
              type: 'textarea',
              name: 'title',
              label: '卡片title',
              value:
                'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
            },
            {
              type: 'text',
              name: 'backgroundImage',
              label: '展示图片',
              value:
                'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
            },
            {
              type: 'input-number',
              name: 'img_count',
              label: '图片数量',
              value: 3,
            },
            {
              type: 'input-number',
              name: 'comment_count',
              label: '评论数',
              value: 2021,
            },
          ]);
      };
    (0, n.registerAmisEditorPlugin)(o);
    var a = o;
    return t;
  })();
});
