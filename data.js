// ==============================================
// 班级回忆录 数据配置文件
// ==============================================
// 1. 首屏随机经典语录
const quoteList = [
    "山水万程，皆有好运。",
    "愿我们在彼此看不见的岁月里，熠熠生辉。",
    "夏天的遇见，就在夏天告别吧。",
    "分头走，山顶见。",
    "前程似锦，万事顺意。",
    "感谢这一年的彼此照亮。",
    "故事不长，但很难忘。"
];
// 2. 神秘人士语录
const memberList = [
    { id: 1, name: "神秘人01" },
    { id: 2, name: "神秘人02" },
    { id: 3, name: "神秘人03" },
    { id: 4, name: "神秘人04" },
    { id: 5, name: "神秘人05" },
    { id: 6, name: "神秘人06" },
    { id: 7, name: "神秘人07" },
    { id: 8, name: "神秘人08" },
    { id: 9, name: "神秘人09" },
    { id: 10, name: "神秘人10" },
    { id: 11, name: "神秘人11" },
    { id: 12, name: "神秘人12" },
    { id: 13, name: "神秘人13" },
    { id: 14, name: "神秘人14" },
    { id: 15, name: "神秘人15" }
];
const signPool = [
    "山顶见。",
    "前程似锦，万事顺意。",
    "第sin个",
    "大家是不是有恐高症呀",
    "所以这个是（突然好大声）氢氧化钠！",
    "如果你说生物老师的话，那别的老师就是非生物老师",
    "大家把白本拿出来",
    "孩子们别光听呀！动笔呀！",
    "这个是真正的哲学~",
    "反正遇到不会的题你就跳嘛",
    "是什么呀~",
    "这么舒服~↑",
    "Let's gooooooo~!",
    "收到，明天上课点你回答问题",
    "你已经赚到了"
];
// 3. 相册图片 全部CDN英文路径
const galleryList = [
    // 军训
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/train1.jpeg", category: "junxun", alt: "军训日常" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/train-group1.jpeg", category: "junxun", alt: "军训大合照" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/train-group2.jpeg", category: "junxun", alt: "班级军训合影" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/train-line.jpeg", category: "junxun", alt: "军训列队" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/show.jpeg", category: "hechang", alt: "文艺汇演" },
    // 入学门
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/opening.jpeg", category: "rumen", alt: "开学典礼" },
    // 日常点滴
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/daily-group.jpeg", category: "richang", alt: "班级日常合影" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/speech.jpeg", category: "richang", alt: "课前分享" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/share3.jpeg", category: "richang", alt: "学习经验分享" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/study-share.jpeg", category: "richang", alt: "学习交流" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/pingpong.jpeg", category: "richang", alt: "乒乓球比赛" },
    // 生日会
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/birthday1.jpeg", category: "shengri", alt: "集体生日会" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/birthday2.jpeg", category: "shengri", alt: "生日庆祝" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/birthday3.jpeg", category: "shengri", alt: "切蛋糕瞬间" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/birthday4.jpeg", category: "shengri", alt: "生日合影" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/birthday5.jpeg", category: "shengri", alt: "生日会现场" },
    // 合唱比赛
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/chorus1.jpeg", category: "hechang", alt: "合唱比赛现场" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/chorus2.jpeg", category: "hechang", alt: "班级合唱" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/chorus4.jpeg", category: "hechang", alt: "舞台合唱" },
    // 足球赛事
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/football1.jpeg", category: "zuqiu", alt: "足球赛1" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/football2.jpeg", category: "zuqiu", alt: "足球2" },
    // 南科大研学
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/nanhk1.jpeg", category: "yanxue", alt: "南科大校园" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/nanhk-group.jpeg", category: "yanxue", alt: "南科大集体合影" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/wechat20.jpg", category: "yanxue", alt: "研学记录1" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/wechat21.jpg", category: "yanxue", alt: "研学记录2" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/wechat22.jpg", category: "yanxue", alt: "研学记录3" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/wechat23.jpg", category: "yanxue", alt: "研学记录4" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/wechat25.jpg", category: "yanxue", alt: "研学记录5" },
    // 学农
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/farm-work.jpeg", category: "xuenong", alt: "学农下地劳动" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/farm-court.jpeg", category: "xuenong", alt: "模拟法庭活动" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/farm-cook.jpeg", category: "xuenong", alt: "学农野炊" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/farm-dye.jpeg", category: "xuenong", alt: "植物染体验" },
    // 六一
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/kids61.jpeg", category: "liuyi", alt: "六一活动" },
    { src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/photos/kids61-2.jpeg", category: "liuyi", alt: "六一庆祝" }
];
// 4. 明信片快捷短语
const quickPhrases = [
    "走，去小卖部",
    "下节什么课",
    "放学一起走",
    "还有几分钟下课"
];
// 5. 明信片配置
const postcardConfig = {
    date: "2026.07.10",
    postcode: "D9",
    className: "D9纪念"
};
// 6. 学生名单
const studentList = [
    { name: "毛思童", abbr: "mst" },
    { name: "尹奕天", abbr: "yyt" },
    { name: "孔维琳", abbr: "kwl" },
    { name: "邓子聪", abbr: "dzc" },
    { name: "邓善航", abbr: "dsh" },
    { name: "左悦", abbr: "zy" },
    { name: "叶可盈", abbr: "yky" },
    { name: "朱梓源", abbr: "zzy" },
    { name: "伍禹泽", abbr: "wyz" },
    { name: "刘羽涵", abbr: "lyh" },
    { name: "刘哲尔", abbr: "lze" },
    { name: "刘翰如", abbr: "lhr" },
    { name: "李长安", abbr: "lca" },
    { name: "李诗禹", abbr: "lsy" },
    { name: "李梓瑞", abbr: "lzr" },
    { name: "杨丹仪", abbr: "ydy" },
    { name: "杨玥菲", abbr: "yyf" },
    { name: "张钊诚", abbr: "zzc" },
    { name: "张凯淇", abbr: "zkq" },
    { name: "张佩莹", abbr: "zpy" },
    { name: "张宗硕", abbr: "zzs" },
    { name: "张浩泉", abbr: "zhq" },
    { name: "张智涵", abbr: "zzh" },
    { name: "张普京", abbr: "zpj" },
    { name: "陈可儿", abbr: "cke" },
    { name: "陈奕璇", abbr: "cyx" },
    { name: "林弘泽", abbr: "lhz" },
    { name: "欧金熙", abbr: "ojx" },
    { name: "罗惠馨", abbr: "lhx" },
    { name: "周隽永", abbr: "zjy" },
    { name: "郑琬雯", abbr: "zww" },
    { name: "赵宇凡", abbr: "zyf" },
    { name: "钟子蓝", abbr: "zzl" },
    { name: "钟秀灵", abbr: "zxl" },
    { name: "倪君硕", abbr: "njs" },
    { name: "倪煜棠", abbr: "nyt" },
    { name: "郭绘天", abbr: "ght" },
    { name: "黄梓乔", abbr: "hzq乔" },
    { name: "黄梓晴", abbr: "hzq晴" },
    { name: "黄敬轩", abbr: "hjx" },
    { name: "曹思桐", abbr: "cst" },
    { name: "龚俊豪", abbr: "gjh" },
    { name: "梁爽", abbr: "ls" },
    { name: "蒋雯婷", abbr: "jwt" },
    { name: "赖泓君", abbr: "lhj" },
    { name: "蔡育东", abbr: "cyd" },
    { name: "黎乐凡", abbr: "llf" },
    { name: "潘瑾萱", abbr: "pjx" },
    { name: "霍彦恒", abbr: "hyh" },
    { name: "张继之", abbr: "zjz" }
];
// 7. 音乐CDN路径
const musicList = [
    {
        name: "当你",
        artist: "林俊杰",
        src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/js/music/dangni.mp3",
        url: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/js/music/dangni.mp3"
    },
    {
        name: "第57次取消发送",
        artist: "班级纪念",
        src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/js/music/57.mp3",
        url: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/js/music/57.mp3"
    },
    {
        name: "广东实验中学校歌",
        artist: "省实",
        src: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/js/music/ss.mp3",
        url: "https://cdn.jsdelivr.net/gh/super-yuer/D9memories@main/js/music/ss.mp3"
    }
];
const bgmList = musicList;