// ========================================
// 游戏攻略导航 - Data & Logic
// ========================================

// 游戏数据库
const gamesData = [
    // ===== Steam 游戏 =====
    { id: 1, name: "黑神话悟空", icon: "🐒", category: "steam", typeName: "Steam", description: "国产3A动作游戏，取经之路，斩妖除魔。包含全剧情流程、Boss打法、技能加点攻略。", tags: ["国产3A", "动作", "西游记"], badge: "hot", link: "https://so.gamersky.com/search?kw=黑神话悟空" },
    { id: 2, name: "艾尔登法环", icon: "⚔️", category: "steam", typeName: "Steam", description: "宫崎英高新作，开放世界魂类游戏。含全地图探索、赐福点、骨灰获取攻略。", tags: ["魂类", "开放世界", "硬核"], badge: "hot", link: "https://so.gamersky.com/search?kw=艾尔登法环" },
    { id: 3, name: "霍夫沃茨之遗", icon: "🪄", category: "steam", typeName: "Steam", description: "哈利波特世界观RPG，魔法世界探索。含全支线任务、收藏品、成就攻略。", tags: ["哈利波特", "RPG", "魔法"], badge: "", link: "https://so.gamersky.com/search?kw=霍夫沃茨之遗" },
    { id: 4, name: "赛博朋克2077", icon: "🌃", category: "steam", typeName: "Steam", description: "CDPR科幻RPG，夜之城冒险。含全任务流程、义体升级、结局攻略。", tags: ["赛博朋克", "RPG", "科幻"], badge: "", link: "https://so.gamersky.com/search?kw=赛博朋克2077" },
    { id: 5, name: "博德之门3", icon: "🛡️", category: "steam", typeName: "Steam", description: "经典D&D跑团RPG，拉瑞安最新作。含全剧情、队友任务、战斗攻略。", tags: ["D&D", "RPG", "跑团"], badge: "hot", link: "https://so.gamersky.com/search?kw=博德之门3" },
    { id: 6, name: "幻兽帕鲁", icon: "🦊", category: "steam", typeName: "Steam", description: "开放世界生存建造游戏，捕捉幻兽。含帕鲁分布、合成配方、基地建设攻略。", tags: ["生存", "建造", "捕捉"], badge: "new", link: "https://so.gamersky.com/search?kw=幻兽帕鲁" },
    { id: 7, name: "只狼", icon: "🎯", category: "steam", typeName: "Steam", description: "宫崎英高代表作，刀剑动作游戏。含全Boss打法、义手技能、结局攻略。", tags: ["魂类", "动作", "忍者"], badge: "", link: "https://so.gamersky.com/search?kw=只狼" },
    { id: 8, name: "怪物猎人世界", icon: "🐉", category: "steam", typeName: "Steam", description: "共斗狩猎游戏，经典IP最新作。含全怪物弱点、装备配装、珠子获取攻略。", tags: ["狩猎", "共斗", "装备"], badge: "", link: "https://so.gamersky.com/search?kw=怪物猎人世界" },
    { id: 25, name: "卧龙苍天陨落", icon: "🐉", category: "steam", typeName: "Steam", description: "三国动作RPG，与仁王同一世界观。含全Boss打法、士气机制、红神兽获取攻略。", tags: ["三国", "动作", "魂类"], badge: "hot", link: "https://so.gamersky.com/search?kw=卧龙苍天陨落" },
    { id: 26, name: "原子之心", icon: "🔬", category: "steam", typeName: "Steam", description: "苏联科幻FPS射击游戏，赛博朋克风格。含全剧情流程、收集中枢、成就攻略。", tags: ["苏联", "科幻", "FPS"], badge: "new", link: "https://so.gamersky.com/search?kw=原子之心" },
    { id: 27, name: "装甲核心6境界天火", icon: "🤖", category: "steam", typeName: "Steam", description: "FS社机甲动作游戏，艾碧斯作品。含全机甲配装、武器获取、Boss打法攻略。", tags: ["机甲", "动作", "艾碧斯"], badge: "hot", link: "https://so.gamersky.com/search?kw=装甲核心6" },
    { id: 28, name: "遗迹灰烬重生", icon: "🌿", category: "steam", typeName: "Steam", description: "第三人称射击魂类游戏，Twisted Round作品。含全Boss打法、世界线、武器配装攻略。", tags: ["魂类", "射击", "合作"], badge: "", link: "https://so.gamersky.com/search?kw=遗迹灰烬重生" },
    { id: 29, name: "匹诺曹的谎言", icon: "🎭", category: "steam", typeName: "Steam", description: "韩国类魂动作游戏，匹诺曹童话风格。含全Boss打法、军团武器、结局攻略。", tags: ["类魂", "动作", "韩国"], badge: "new", link: "https://so.gamersky.com/search?kw=匹诺曹的谎言" },
    { id: 30, name: "堕落之主", icon: "👻", category: "steam", typeName: "Steam", description: "类魂动作RPG，暗黑风格。含全Boss打法、传说技、隐藏道具攻略。", tags: ["类魂", "暗黑", "动作"], badge: "", link: "https://so.gamersky.com/search?kw=堕落之主" },
    { id: 31, name: "死亡空间重制版", icon: "🚀", category: "steam", typeName: "Steam", description: "EA科幻恐怖射击游戏重制版。含全流程、收集品、秘密房间攻略。", tags: ["恐怖", "射击", "科幻"], badge: "", link: "https://so.gamersky.com/search?kw=死亡空间重制版" },
    { id: 32, name: "生化危机4重制版", icon: "🧟", category: "steam", typeName: "Steam", description: "卡普空经典恐怖射击游戏重制版。含全流程、武器升级、全宝藏收集攻略。", tags: ["恐怖", "射击", "重制"], badge: "hot", link: "https://so.gamersky.com/search?kw=生化危机4重制版" },
    { id: 33, name: "波斯王子失落的王冠", icon: "⚔️", category: "steam", typeName: "Steam", description: "波斯王子系列新作，银河城风格。含全技能、全碎片、结局攻略。", tags: ["波斯王子", "银河城", "动作"], badge: "new", link: "https://so.gamersky.com/search?kw=波斯王子失落的王冠" },
    { id: 34, name: "龙之信条2", icon: "🐉", category: "steam", typeName: "Steam", description: "卡普空开放世界动作RPG，DD2最新作。含全职业、随从、隐藏职业攻略。", tags: ["开放世界", "动作", "RPG"], badge: "", link: "https://so.gamersky.com/search?kw=龙之信条2" },
    { id: 35, name: "遗迹与被杀", icon: "⚔️", category: "steam", typeName: "Steam", description: "2D魂类银河城游戏，高难度独立游戏。含全Boss打法、全碎片、隐藏关卡攻略。", tags: ["魂类", "银河城", "独立"], badge: "", link: "https://so.gamersky.com/search?kw=遗迹与被杀" },

    // ===== 手游 =====
    { id: 9, name: "原神", icon: "🌟", category: "mobile-game", typeName: "手游", description: "米哈游开放世界RPG，提瓦特冒险。含全角色养成、圣遗物配装、任务攻略。", tags: ["米哈游", "开放世界", "抽卡"], badge: "hot", link: "https://bbs.mihoyo.com/ys/" },
    { id: 10, name: "王者荣耀", icon: "👑", category: "mobile-game", typeName: "手游", description: "腾讯MOBA手游，5v5对战。含英雄出装、连招技巧、对线攻略。", tags: ["MOBA", "腾讯", "电竞"], badge: "hot", link: "https://pvp.qq.com/" },
    { id: 11, name: "崩坏星穹铁道", icon: "🚄", category: "mobile-game", typeName: "手游", description: "米哈游回合制RPG，星际冒险。含全角色培养，光锥配装、行迹升级攻略。", tags: ["米哈游", "回合制", "抽卡"], badge: "new", link: "https://bbs.mihoyo.com/sr/" },
    { id: 12, name: "蛋仔派对", icon: "🥚", category: "mobile-game", typeName: "手游", description: "网易休闲竞技游戏，潮玩闯关。含地图攻略、派对技巧、皮肤获取攻略。", tags: ["休闲", "闯关", "网易"], badge: "", link: "https://ddz.163.com/" },
    { id: 13, name: "金铲铲之战", icon: "🔧", category: "mobile-game", typeName: "手游", description: "英雄联盟云顶之弈手游，自走棋。含阵容搭配、装备合成、站位攻略。", tags: ["自走棋", "LOL", "腾讯"], badge: "", link: "https://jcc.qq.com/" },
    { id: 14, name: "和平精英", icon: "🎯", category: "mobile-game", typeName: "手游", description: "腾讯FPS竞技游戏，生存射击。含枪械推荐、跳点选择、对枪技巧攻略。", tags: ["FPS", "射击", "腾讯"], badge: "", link: "https://gp.qq.com/" },

    // ===== 端游 =====
    { id: 15, name: "英雄联盟", icon: "⚔️", category: "pc-game", typeName: "端游", description: "拳头MOBA游戏，5v5对战经典。含英雄出装、打法技巧、版本攻略。", tags: ["MOBA", "电竞", "拳头"], badge: "hot", link: "https://lol.qq.com/" },
    { id: 16, name: "云顶之弈", icon: "🎲", category: "pc-game", typeName: "端游", description: "英雄联盟自走棋模式。含S1-S10阵容推荐、装备合成、站位攻略。", tags: ["自走棋", "LOL", "策略"], badge: "", link: "https://lol.qq.com/" },
    { id: 17, name: "Dota2", icon: "🛡️", category: "pc-game", typeName: "端游", description: "V社MOBA游戏，经典竞技。含英雄出装、技能加点、攻略技巧。", tags: ["MOBA", "电竞", "V社"], badge: "", link: "https://www.dota2.com.cn/" },
    { id: 18, name: "绝地求生", icon: "🔫", category: "pc-game", typeName: "端游", description: "Steam热门吃鸡游戏，生存竞技。含枪械推荐、跳点选择、吃鸡技巧。", tags: ["吃鸡", "FPS", "生存"], badge: "", link: "https://pubg.qq.com/" },
    { id: 19, name: "无畏契约", icon: "💥", category: "pc-game", typeName: "端游", description: "腾讯FPS竞技游戏，瓦罗兰特。含英雄技能、枪械设置、战术攻略。", tags: ["FPS", "竞技", "腾讯"], badge: "new", link: "https://valorant.qq.com/" },

    // ===== 游戏工具 =====
    { id: 20, name: "Steam加速器", icon: "🚀", category: "tool", typeName: "工具", description: "Steam下载加速、联机加速工具汇总，告别下载慢、联机卡顿问题。", tags: ["Steam", "加速", "下载"], badge: "", link: "https://www.steampowered.cn/" },
    { id: 21, name: "游戏帧率测试", icon: "📊", category: "tool", typeName: "工具", description: "MSI Afterburner、CapFrameX 等帧率监控工具，测试游戏性能表现。", tags: ["帧率", "测试", "性能"], badge: "", link: "https://www.msi.com/" },
    { id: 22, name: "Switch模拟器", icon: "🎮", category: "tool", typeName: "工具", description: "Ryujinx 等Switch模拟器，PC上畅玩Switch游戏。", tags: ["Switch", "模拟器", "PC"], badge: "", link: "https://ryujinx.org/" },
    { id: 23, name: "游戏地图查询", icon: "🗺️", category: "tool", typeName: "工具", description: "艾尔登法环、原神、塞尔达等游戏地图查询，标注所有隐藏要素。", tags: ["地图", "查询", "攻略"], badge: "", link: "https://so.gamersky.com/search?kw=游戏地图" },
    { id: 24, name: "游戏手柄设置", icon: "🎮", category: "tool", typeName: "工具", description: "Steam Input、Xpadder 等手柄映射工具，让手柄适配所有PC游戏。", tags: ["手柄", "映射", "PC"], badge: "", link: "https://www.steampowered.com/steamcontrollers" }
];

// 手机测评数据
const phoneReviews = [
    { id: 101, name: "iPhone 15 Pro Max", icon: "📱", category: "phone", typeName: "手机", description: "A17 Pro芯片，3nm工艺。游戏性能顶级，原神全高60帧稳定，发热控制出色。", tags: ["苹果", "旗舰", "A17 Pro"], badge: "hot", games: "原神、王者荣耀、崩坏星穹铁道", price: "¥9999起", link: "https://www.apple.com.cn/iphone/" },
    { id: 102, name: "小米14 Ultra", icon: "📱", category: "phone", typeName: "手机", description: "骁龙8 Gen3处理器，性能强劲。散热优秀，原神极高画质60帧无压力。", tags: ["小米", "骁龙8 Gen3", "旗舰"], badge: "hot", games: "原神、星穹铁道、和平精英", price: "¥6499起", link: "https://www.mi.com/" },
    { id: 103, name: "红魔9 Pro+", icon: "📱", category: "phone", typeName: "手机", description: "专业游戏手机，主动散热风扇。骁龙8 Gen3，极高画质原神稳定60帧。", tags: ["游戏手机", "骁龙8 Gen3", "散热"], badge: "recommended", games: "原神、崩坏星穹铁道、所有手游", price: "¥5499起", link: "https://www.nubia.com/" },
    { id: 104, name: "ROG Phone 8", icon: "📱", category: "phone", typeName: "手机", description: "华硕ROG游戏手机，骁龙8 Gen3。肩键设计，散热出色，游戏体验极佳。", tags: ["游戏手机", "ROG", "骁龙8 Gen3"], badge: "", games: "原神、王者荣耀、和平精英", price: "¥5999起", link: "https://www.asus.com/" },
    { id: 105, name: "一加12", icon: "📱", category: "phone", typeName: "手机", description: "骁龙8 Gen3，哈苏影像。性能调度激进，原神极高画质流畅运行。", tags: ["一加", "骁龙8 Gen3", "旗舰"], badge: "", games: "原神、星穹铁道、金铲铲", price: "¥4299起", link: "https://www.oneplus.com/" },
    { id: 106, name: "vivo X100 Pro", icon: "📱", category: "phone", typeName: "手机", description: "天玑9300处理器，发哥翻身之作。游戏功耗低，发热小，续航强。", tags: ["vivo", "天玑9300", "影像"], badge: "", games: "原神、崩坏星穹铁道、王者荣耀", price: "¥4999起", link: "https://www.vivo.com/" },
    { id: 107, name: "红米K70 Pro", icon: "📱", category: "phone", typeName: "手机", description: "骁龙8 Gen3，性价比之王。游戏性能强劲，价格实惠，学生党首选。", tags: ["红米", "骁龙8 Gen3", "性价比"], badge: "cheap", games: "原神、王者荣耀、和平精英", price: "¥3299起", link: "https://www.mi.com/" },
    { id: 108, name: "iQOO 12", icon: "📱", category: "phone", typeName: "手机", description: "骁龙8 Gen3，电竞基因。压感屏幕，KPL官方指定用机，游戏优化好。", tags: ["iQOO", "骁龙8 Gen3", "电竞"], badge: "", games: "王者荣耀、和平精英、原神", price: "¥3999起", link: "https://www.iqoo.com/" }
];

// 电脑配件测评数据
const pcParts = [
    { id: 201, name: "RTX 4090", icon: "🎮", category: "pc-parts", typeName: "显卡", description: "NVIDIA旗舰显卡，24GB显存。4K光追全开，所有游戏流畅运行。", tags: ["NVIDIA", "旗舰", "4K"], badge: "top", games: "黑神话悟空、赛博朋克2077、博德之门3、艾尔登法环", price: "¥15999起" },
    { id: 202, name: "RTX 4080 SUPER", icon: "🎮", category: "pc-parts", typeName: "显卡", description: "高端显卡，16GB显存。4K高画质无压力，性价比之选。", tags: ["NVIDIA", "高端", "4K"], badge: "recommended", games: "黑神话悟空、艾尔登法环、博德之门3、原神PC", price: "¥8999起" },
    { id: 203, name: "RTX 4070 Ti SUPER", icon: "🎮", category: "pc-parts", typeName: "显卡", description: "2K游戏天花板，16GB显存。2K分辨率所有游戏高画质流畅。", tags: ["NVIDIA", "中高端", "2K"], badge: "", games: "艾尔登法环、黑神话悟空(2K)、只狼、怪猎世界", price: "¥6499起" },
    { id: 204, name: "RTX 4060 Ti", icon: "🎮", category: "pc-parts", typeName: "显卡", description: "1080P游戏通吃，8GB显存。主流游戏高画质，性价比高。", tags: ["NVIDIA", "主流", "1080P"], badge: "cheap", games: "王者荣耀(模拟器)、LOL、云顶之弈、艾尔登法环", price: "¥3199起" },
    { id: 205, name: "RX 7900 XTX", icon: "🎮", category: "pc-parts", typeName: "显卡", description: "AMD旗舰，24GB显存。光栅性能强，传统游戏表现优秀。", tags: ["AMD", "旗舰", "高显存"], badge: "", games: "黑神话悟空、赛博朋克2077、博德之门3", price: "¥8999起" },
    { id: 206, name: "i9-14900K", icon: "⚡", category: "pc-parts", typeName: "CPU", description: "Intel旗舰处理器，24核心32线程。游戏和生产力兼顾。", tags: ["Intel", "旗舰", "24核"], badge: "top", games: "所有PC游戏", price: "¥4999起" },
    { id: 207, name: "R9-7950X3D", icon: "⚡", category: "pc-parts", typeName: "CPU", description: "AMD游戏旗舰，3D V-Cache。游戏性能极强，功耗低。", tags: ["AMD", "旗舰", "3D V-Cache"], badge: "", games: "所有PC游戏", price: "¥5499起" },
    { id: 208, name: "i5-14600K", icon: "⚡", category: "pc-parts", typeName: "CPU", description: "Intel中高端，14核心20线程。游戏性价比之选。", tags: ["Intel", "中高端", "游戏"], badge: "cheap", games: "艾尔登法环、LOL、云顶之弈、原神PC", price: "¥2499起" },
    { id: 209, name: "DDR5 32GB 6000", icon: "💾", category: "pc-parts", typeName: "内存", description: "主流DDR5内存，32GB双通道。游戏和专业应用兼顾。", tags: ["DDR5", "32GB", "6000MHz"], badge: "recommended", games: "所有PC游戏", price: "¥699起" },
    { id: 210, name: "DDR5 64GB", icon: "💾", category: "pc-parts", typeName: "内存", description: "高端内存，64GB双通道。直播、游戏多开无压力。", tags: ["DDR5", "64GB", "高端"], badge: "", games: "艾尔登法环+直播、LOL+语音、所有多开", price: "¥1399起" },
    { id: 211, name: "990 Pro 2TB", icon: "💿", category: "pc-parts", typeName: "固态", description: "三星旗舰PCIe 4.0固态，读取7000MB/s。游戏加载飞快。", tags: ["三星", "PCIe 4.0", "2TB"], badge: "", games: "所有PC游戏(秒加载)", price: "¥1299起" },
    { id: 212, name: "海力士P41 2TB", icon: "💿", category: "pc-parts", typeName: "固态", description: "PCIe 4.0旗舰固态，国产性价比之选。游戏存储推荐。", tags: ["海力士", "PCIe 4.0", "国产"], badge: "cheap", games: "所有PC游戏(秒加载)", price: "¥899起" }
];

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const phoneReviewsGrid = document.getElementById('phoneReviews');
const pcPartsGrid = document.getElementById('pcParts');
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const tabBtns = document.querySelectorAll('.tab-btn');

// Render Game Card
function renderGameCard(item) {
    const badgeClass = item.badge === 'hot' ? 'hot' : (item.badge === 'new' ? 'new' : (item.badge === 'cheap' ? 'cheap' : ''));
    const badgeText = item.badge === 'hot' ? '热门' : (item.badge === 'new' ? '新' : (item.badge === 'cheap' ? '低价' : ''));

    return `
        <div class="game-card" data-category="${item.category}">
            <div class="game-image">
                ${item.icon}
                ${badgeText ? `<span class="game-badge ${badgeClass}">${badgeText}</span>` : ''}
            </div>
            <div class="game-content">
                <div class="game-category">${item.typeName}</div>
                <div class="game-name">${item.name}</div>
                <div class="game-description">${item.description}</div>
                <div class="game-tags">
                    ${item.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                </div>
                <div class="game-footer">
                    <span class="game-type">${item.typeName}</span>
                    <a href="${item.link || '#'}" target="_blank" class="game-link">查看 →</a>
                </div>
            </div>
        </div>
    `;
}

// Render Review Card
function renderReviewCard(item) {
    const badgeClass = item.badge === 'hot' ? 'hot' : (item.badge === 'recommended' ? 'recommended' : (item.badge === 'cheap' ? 'cheap' : ''));
    const badgeText = item.badge === 'hot' ? '热门' : (item.badge === 'recommended' ? '推荐' : (item.badge === 'cheap' ? '性价比' : ''));

    return `
        <div class="review-card" data-category="${item.category}">
            <div class="review-header">
                <div class="review-icon">${item.icon}</div>
                <div class="review-info">
                    <div class="review-name">${item.name}</div>
                    <div class="review-type">${item.typeName}</div>
                </div>
                ${badgeText ? `<span class="review-badge ${badgeClass}">${badgeText}</span>` : ''}
            </div>
            <div class="review-body">
                <div class="review-desc">${item.description}</div>
                <div class="review-tags">
                    ${item.tags.map(tag => `<span class="review-tag">${tag}</span>`).join('')}
                </div>
                ${item.games ? `<div class="review-games"><strong>适配游戏：</strong>${item.games}</div>` : ''}
                ${item.price ? `<div class="review-price">${item.price}</div>` : ''}
            </div>
        </div>
    `;
}

// Render Games by Tab
function renderGamesByTab(tab) {
    let games = [];
    if (tab === 'all-games') {
        games = gamesData.filter(g => ['steam', 'mobile-game', 'pc-game'].includes(g.category));
    } else {
        games = gamesData.filter(g => g.category === tab);
    }
    gamesGrid.innerHTML = games.map(renderGameCard).join('');
}

// Tab switching
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGamesByTab(btn.dataset.tab);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGamesByTab('all-games');
    phoneReviewsGrid.innerHTML = phoneReviews.map(renderReviewCard).join('');
    pcPartsGrid.innerHTML = pcParts.map(renderReviewCard).join('');
    toolsGrid.innerHTML = gamesData.filter(g => g.category === 'tool').map(renderGameCard).join('');
});
