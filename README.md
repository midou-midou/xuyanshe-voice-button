# <center>虚研社按钮-(⊙_⊙)!</center>

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MIMONATCH/xuyanshe-voice-button?style=flat-square) ![GitHub package.json version](https://img.shields.io/github/package-json/v/MIMONATCH/xuyanshe-voice-button?style=flat-square) ![GitHub](https://img.shields.io/github/license/MIMONATCH/xuyanshe-voice-button?style=flat-square) 

> 欢迎各位帅老弟弟来到虚研社按钮项目，这个项目是记录虚研社小希小桃，小柔，兰音，艾露露各种好玩声音的网站

指路：

- [小希小桃Channel](https://space.bilibili.com/5563350)
- [小柔Channel](https://space.bilibili.com/1734978373)
- [兰音Renie](https://space.bilibili.com/698029620)
- [艾露露Ailurus](https://space.bilibili.com/1501380958)

**声明：本作品为粉丝作品，与虚研社官方等账号无任何关联**

提交PR请到Github仓库，gitee仓库仅作为同步仓库

## 在线演示 Demo

Demo [点这里](https://xynbtn.gitee.io)

## TODO

- [x] i18n 国际化
- [x] Dark mode 夜间模式
- [ ] RSS
- [ ] 更多音声资源
- [ ] 粉丝音声组件
- [ ] 友链
- [ ] ……

## 安装

#### npm

```sh
npm install
```

#### yarn

```
yarn install
```

## 开发

#### npm

```sh
npm run start
```

#### yarn

```
yarn start
```

如需要配置则要运行eject命令

## 配置

所有的配置都在`src/config`目录下

### 新音声配置添加

在配置目录下的`voice.js`文件中，在`voiceData`对象下添加如下的配置

```js
 xiaoxi:[
        {
            clfy: {zh:'小希叫你起床',en:'',jp:''},      // clfy: 音声的分类
            alias: {zh:'',en:'',jp:''},				  // ailas: 音声分类信息整活解释
            voice:[
                {
                    path: 'bunengzaishuila-xx.mp3',   // 音声文件名，音声的完整路径会根据siteInfo配置中的cloud字段自动拼装
                    desc: {     					  // 按钮显示的文字，根据i18n，需要三种语言
                        zh: '不能再睡啦！快起床吧',
                        en: '',
                        jp: ''
                    }
                }
            ]
        },
    ]
```

### 新音声文件上传

暂时不支持网站直接上传到腾讯COS，请各位朋友发送到我的邮箱 huzi19980410@gmail.com

音频的格式仅支持 **mp3**

## 提交

- **PR请提交到dev分支，main分支暂不支持PR**
- **git commit请遵循commit规范**
- **issue的提交可以在gitee或GitHub上提交**

## License

MIT

Copyright © 2021 [midou](https://github.com/MIMONATCH)

