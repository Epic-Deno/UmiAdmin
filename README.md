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

## 目录结构
```
.
├── package.json
├── .umirc.ts
├── .env
├── dist
├── mock
├── public
└── src
    ├── .umi
    ├── layouts/index.tsx
    ├── pages
        ├── index.less
        └── index.tsx
    └── app.ts
```
### 根目录

#### 1. package.json 
    包含所有插件和插件集合， 以<font color="RED">@umi/present</font>、<font color="RED">@umijs/plugin</font>、<font color="RED">umi-preset-</font>、<font>umi-plugin-</font>开头的依赖会被自动注册为插件和插件集。
#### 2. .umirc.ts
    配置文件，包含umi内置功能和插件的配置
#### 3. .env
    环境变量。
    比如： 
    ```
    PORT=8888
    COMPRESS=none
    ```
#### 4. dist目录
执行完build之后的，生成的文件为默认会存放在这里

#### 5. mock目录
    储存mock文件，这个哥目录下的所有js和ts文件会被解析成mock文件

#### 6. public目录
    此目录所有文件会被copy到输出路径

### <font color="RED">/src</font>目录
#### .umi 目录

临时文件目录，比如入口文件、路由等， 都会被临时生成到这里。 ** 不要把.umi目录到git仓库， 他们会在 umi dev 和 umi build时被删除并重新生成。 **

#### layouts/index.tsx

约定式路由的全局布局文件。

#### pages 目录
所有路由组件存放在这里

#### app.ts
运行时配置文件， 可以在这里拓展运行时的能力， 比如修改路由、修改render方法等。