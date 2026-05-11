// ========================================
// 游戏攻略导航 - Data & Logic
// ========================================

// 游戏数据库
const gamesData = [
    // ===== Steam 游戏 =====
    {
        id: 1,
        name: "黑神话悟空",
        icon: "🐒",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "国产3A动作游戏，取经之路，斩妖除魔。包含全剧情流程、Boss打法、技能加点攻略。",
        tags: ["国产3A", "动作", "西游记"],
        badge: "hot",
        featured: true,
        link: "https://www.gamersky.com/gl/"
    },
    {
        id: 2,
        name: "艾尔登法环",
        icon: "⚔️",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "宫崎英高新作，开放世界魂类游戏。含全地图探索、赐福点、骨灰获取攻略。",
        tags: ["魂类", "开放世界", "硬核"],
        badge: "hot",
        featured: true,
        link: "https://www.gamersky.com/elden-ring/"
    },
    {
        id: 3,
        name: "霍格沃茨之遗",
        icon: "🪄",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "哈利波特世界观RPG，魔法世界探索。含全支线任务、收藏品、成就攻略。",
        tags: ["哈利波特", "RPG", "魔法"],
        badge: "",
        featured: false,
        link: "https://www.gamersky.com/hogwarts-legacy/"
    },
    {
        id: 4,
        name: "赛博朋克2077",
        icon: "🌃",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "CDPR科幻RPG，夜之城冒险。含全任务流程、义体升级、结局攻略。",
        tags: ["赛博朋克", "RPG", "科幻"],
        badge: "",
        featured: false,
        link: "https://www.gamersky.com/cyberpunk2077/"
    },
    {
        id: 5,
        name: "博德之门3",
        icon: "🛡️",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "经典D&D跑团RPG，拉瑞安最新作。含全剧情、队友任务、战斗攻略。",
        tags: ["D&D", "RPG", "跑团"],
        badge: "hot",
        featured: true,
        link: "https://www.gamersky.com/baldurs-gate-3/"
    },
    {
        id: 6,
        name: "幻兽帕鲁",
        icon: "🦊",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "开放世界生存建造游戏，捕捉幻兽。含帕鲁分布、合成配方、基地建设攻略。",
        tags: ["生存", "建造", "捕捉"],
        badge: "new",
        featured: false,
        link: "https://www.gamersky.com/palworld/"
    },
    {
        id: 7,
        name: "只狼",
        icon: "🎯",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "宫崎英高代表作，刀剑动作游戏。含全Boss打法、义手技能、结局攻略。",
        tags: ["魂类", "动作", "忍者"],
        badge: "",
        featured: false,
        link: "https://www.gamersky.com/sekiro/"
    },
    {
        id: 8,
        name: "怪物猎人世界",
        icon: "🐉",
        type: "steam",
        typeName: "Steam",
        category: "steam",
        description: "共斗狩猎游戏，经典IP最新作。含全怪物弱点、装备配装、珠子获取攻略。",
        tags: ["狩猎", "共斗", "装备"],
        badge: "",
        featured: false,
        link: "https://www.gamersky.com/mhw/"
    },

    // ===== 手游 =====
    {
        id: 9,
        name: "原神",
        icon: "🌟",
        type: "mobile",
        typeName: "手游",
        category: "mobile",
        description: "米哈游开放世界RPG，提瓦特冒险。含全角色养成、圣遗物配装、任务攻略。",
        tags: ["米哈游", "开放世界", "抽卡"],
        badge: "hot",
        featured: true,
        link: "https://bbs.mihoyo.com/ys/"
    },
    {
        id: 10,
        name: "王者荣耀",
        icon: "👑",
        type: "mobile",
        typeName: "手游",
        category: "mobile",
        description: "腾讯MOBA手游，5v5对战。含英雄出装、连招技巧、对线攻略。",
        tags: ["MOBA", "腾讯", "电竞"],
        badge: "hot",
        featured: true,
        link: "https://pvp.qq.com/"
    },
    {
        id: 11,
        name: "崩坏星穹铁道",
        icon: "🚄",
        type: "mobile",
        typeName: "手游",
        category: "mobile",
        description: "米哈游回合制RPG，星际冒险。含全角色培养、光锥配装、行迹升级攻略。",
        tags: ["米哈游", "回合制", "抽卡"],
        badge: "new",
        featured: true,
        link: "https://bbs.mihoyo.com/sr/"
    },
    {
        id: 12,
        name: "蛋仔派对",
        icon: "🥚",
        type: "mobile",
        typeName: "手游",
        category: "mobile",
        description: "网易休闲竞技游戏，潮玩闯关。含地图攻略、派对技巧、皮肤获取攻略。",
        tags: ["休闲", "闯关", "网易"],
        badge: "",
        featured: false,
        link: "https://ddz.163.com/"
    },
    {
        id: 13,
        name: "金铲铲之战",
        icon: "🔧",
        type: "mobile",
        typeName: "手游",
        category: "mobile",
        description: "英雄联盟云顶之弈手游，自走棋。含阵容搭配、装备合成、站位攻略。",
        tags: ["自走棋", "LOL", "腾讯"],
        badge: "",
        featured: false,
        link: "https://jcc.qq.com/"
    },
    {
        id: 14,
        name: "和平精英",
        icon: "🎯",
        type: "mobile",
        typeName: "手游",
        category: "mobile",
        description: "腾讯FPS竞技游戏，生存射击。含枪械推荐、跳点选择、对枪技巧攻略。",
        tags: ["FPS", "射击", "腾讯"],
        badge: "",
        featured: false,
        link: "https://gp.qq.com/"
    },

    // ===== 端游 =====
    {
        id: 15,
        name: "英雄联盟",
        icon: "⚔️",
        type: "pc",
        typeName: "端游",
        category: "pc",
        description: "拳头MOBA游戏，5v5对战经典。含英雄出装、打法技巧、版本攻略。",
        tags: ["MOBA", "电竞", "拳头"],
        badge: "hot",
        featured: true,
        link: "https://lol.qq.com/"
    },
    {
        id: 16,
        name: "云顶之弈",
        icon: "🎲",
        type: "pc",
        typeName: "端游",
        category: "pc",
        description: "英雄联盟自走棋模式。含S1-S10阵容推荐、装备合成、站位攻略。",
        tags: ["自走棋", "LOL", "策略"],
        badge: "",
        featured: false,
        link: "https://lol.qq.com/"
    },
    {
        id: 17,
        name: "Dota2",
        icon: "🛡️",
        type: "pc",
        typeName: "端游",
        category: "pc",
        description: "V社MOBA游戏，经典竞技。含英雄出装、技能加点、攻略技巧。",
        tags: ["MOBA", "电竞", "V社"],
        badge: "",
        featured: false,
        link: "https://www.dota2.com.cn/"
    },
    {
        id: 18,
        name: "绝地求生",
        icon: "🔫",
        type: "pc",
        typeName: "端游",
        category: "pc",
        description: "Steam热门吃鸡游戏，生存竞技。含枪械推荐、跳点选择、吃鸡技巧。",
        tags: ["吃鸡", "FPS", "生存"],
        badge: "",
        featured: false,
        link: "https://pubg.qq.com/"
    },
    {
        id: 19,
        name: "无畏契约",
        icon: "💥",
        type: "pc",
        typeName: "端游",
        category: "pc",
        description: "腾讯FPS竞技游戏，瓦罗兰特。含英雄技能、枪械设置、战术攻略。",
        tags: ["FPS", "竞技", "腾讯"],
        badge: "new",
        featured: false,
        link: "https://valorant.qq.com/"
    },

    // ===== 游戏工具 =====
    {
        id: 20,
        name: "Steam加速器",
        icon: "🚀",
        type: "tool",
        typeName: "工具",
        category: "tool",
        description: "Steam下载加速、联机加速工具汇总，告别下载慢、联机卡顿问题。",
        tags: ["Steam", "加速", "下载"],
        badge: "",
        featured: false,
        link: "https://www.steampower.cn/"
    },
    {
        id: 21,
        name: "游戏帧率测试",
        icon: "📊",
        type: "tool",
        typeName: "工具",
        category: "tool",
        description: "MSI Afterburner、CapFrameX 等帧率监控工具，测试游戏性能表现。",
        tags: ["帧率", "测试", "性能"],
        badge: "",
        featured: false,
        link: "https://www.msi.com/"
    },
    {
        id: 22,
        name: "Switch模拟器",
        icon: "🎮",
        type: "tool",
        typeName: "工具",
        category: "tool",
        description: "Yuzu、Ryujinx 等Switch模拟器，PC上畅玩Switch游戏。",
        tags: ["Switch", "模拟器", "PC"],
        badge: "",
        featured: false,
        link: "https://yuzu-emu.org/"
    },
    {
        id: 23,
        name: "游戏地图查询",
        icon: "🗺️",
        type: "tool",
        typeName: "工具",
        category: "tool",
        description: "艾尔登法环、原神、塞尔达等游戏地图查询，标注所有隐藏要素。",
        tags: ["地图", "查询", "攻略"],
        badge: "",
        featured: false,
        link: "https://www.gamersky.com/"
    },
    {
        id: 24,
        name: "游戏手柄设置",
        icon: "🎮",
        type: "tool",
        typeName: "工具",
        category: "tool",
        description: "Steam Input、Xpadder 等手柄映射工具，让手柄适配所有PC游戏。",
        tags: ["手柄", "映射", "PC"],
        badge: "",
        featured: false,
        link: "https://store.steampowered.com/steamcontrollers"
    }
];

// DOM Elements
const steamGamesGrid = document.getElementById('steamGames');
const mobileGamesGrid = document.getElementById('mobileGames');
const pcGamesGrid = document.getElementById('pcGames');
const gameToolsGrid = document.getElementById('gameTools');
const allGamesGrid = document.getElementById('allGames');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Game Card
function renderGameCard(game) {
    const badgeClass = game.badge === 'hot' ? 'hot' : (game.badge === 'new' ? 'new' : (game.badge === 'tool' ? 'tool' : ''));
    const badgeText = game.badge === 'hot' ? '热门' : (game.badge === 'new' ? '新游' : (game.badge === 'tool' ? '工具' : ''));

    return `
        <div class="game-card" data-category="${game.category}">
            <div class="game-image">
                ${game.icon}
                ${badgeText ? `<span class="game-badge ${badgeClass}">${badgeText}</span>` : ''}
            </div>
            <div class="game-content">
                <div class="game-category">${game.typeName}</div>
                <div class="game-name">${game.name}</div>
                <div class="game-description">${game.description}</div>
                <div class="game-tags">
                    ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                </div>
                <div class="game-footer">
                    <span class="game-type">${game.typeName}</span>
                    <a href="${game.link}" target="_blank" class="game-link">查看攻略 →</a>
                </div>
            </div>
        </div>
    `;
}

// Render by Category
function renderByCategory(category, gridElement) {
    const filtered = gamesData.filter(game => game.category === category);
    gridElement.innerHTML = filtered.map(renderGameCard).join('');
}

// Render All Games
function renderAllGames(filter = 'all') {
    let games = gamesData;
    
    if (filter === 'steam') {
        games = gamesData.filter(game => game.category === 'steam');
    } else if (filter === 'mobile') {
        games = gamesData.filter(game => game.category === 'mobile');
    } else if (filter === 'pc') {
        games = gamesData.filter(game => game.category === 'pc');
    } else if (filter === 'tool') {
        games = gamesData.filter(game => game.category === 'tool');
    }
    
    allGamesGrid.innerHTML = games.map(renderGameCard).join('');
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length < 2) {
        renderAllGames();
        return;
    }
    
    const filtered = gamesData.filter(game => 
        game.name.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    allGamesGrid.innerHTML = filtered.map(renderGameCard).join('');
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderAllGames(filter);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderByCategory('steam', steamGamesGrid);
    renderByCategory('mobile', mobileGamesGrid);
    renderByCategory('pc', pcGamesGrid);
    renderByCategory('tool', gameToolsGrid);
    renderAllGames();
});
