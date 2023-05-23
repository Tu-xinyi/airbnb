const path = require("path");

const resolve = (pathname) => path.resolve(__dirname, pathname);

const CracoLessPlugin = require("craco-less");

// 通过module将配置的导出
module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack
  webpack: {
    //表示对webpack中的某些东西进行修改
    alias: {
      //别名
      // '@':'src',//错误的 要传入绝对路径
      // '@':path.resolve(__dirname,'src'),每一个都拼接麻烦=> resolve函数
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  }, //修改完毕后 运行不生效 => package.json 还是应用react.scripts启动 => craco 将配置的内容合并到一起去
};
