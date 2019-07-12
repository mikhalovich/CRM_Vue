export default {
  // eslint-disable-next-line
  install(Vue, options) {
    Vue.prototype.$message = (html) => {
      // eslint-disable-next-line
      M.toast({ html });
    };

    Vue.prototype.$error = (html) => {
      // eslint-disable-next-line
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
