# umi project

## 开始项目

安装依赖：
```bash
$ yarn
```

运行依赖：
```bash
$ yarn start
```
## 快速上手
默认的脚手架内置了@umijs/preset-react,包含布局、权限、国际化、dva、建议数据流等常用功能。如果需要使用ant-design-pro的布局，只需要编辑<font color="RED">.umirc.ts</font>配置<font color="RED">layout: {}</font>
```
import { defineConfig } from 'umi';

export default defineConfig({
  + layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
```
<font color="ORANGE">umi在编译慢的时候需要上面配置文件中添加：</font><font color="RED">mfsu: {}</font>