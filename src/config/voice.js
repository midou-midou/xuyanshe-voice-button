// 文件存放：public/voice || COS/OOS
// path: 文件名称
// desc: 按钮显示文字
const voiceData = {
    xiaoxi:[
        {
            clfy: '小希叫你起床',
            voice:[
                {
                    path: 'jiaoqichuang-xx.mp3',
                    desc: {
                        zh: '叫起床',
                        en: 'wakeup',
                        jp: ''
                    }
                },
                {
                    path: 'bunengzaishuila-xx.mp3',
                    desc: {
                        zh: '不能再睡啦！快起床吧',
                        en: ''
                    }
                }
            ]
        },
        {
            clfy: '测试用数据',
            voice:[
                {
                    path: 'jiaoqichuang-xx.mp3',
                    desc: {
                        zh: '叫起床test',
                        en: 'wakeup'
                    }
                },
                {
                    path: 'jiaoqichuang-xx.mp3',
                    desc: {
                        zh: '叫起床test123',
                        en: 'wakeup'
                    }
                }
            ]
        }
    ]
}
export default voiceData;