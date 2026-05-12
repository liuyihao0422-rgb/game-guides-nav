// ========================================
// PPT公园 - PPT工具聚合站
// 聚合AI生成PPT、PPT模板、PPT工具和教程
// ========================================

// PPT生成场景（用于展示，不再实际调用AI）
const scenesData = [
    { id: 'work', name: "工作汇报", icon: "📊", desc: "季度总结、工作计划、项目汇报" },
    { id: 'study', name: "教育培训", icon: "🎓", desc: "课程课件、培训演示、教学PPT" },
    { id: 'product', name: "产品介绍", icon: "📦", desc: "产品发布、功能介绍、解决方案" },
    { id: 'plan', name: "商业计划", icon: "💼", desc: "创业计划书、投资路演、项目提案" },
    { id: 'marketing', name: "市场营销", icon: "📢", desc: "品牌推广、活动策划、营销方案" },
    { id: 'summary', name: "总结报告", icon: "📋", desc: "述职报告、年终总结、数据汇报" },
    { id: 'personal', name: "个人简历", icon: "📄", desc: "求职简历、竞聘演讲、个人介绍" }
];

// AI生成PPT工具
const aiToolsData = [
    { id: 1, name: "Gamma", icon: "📊", url: "https://gamma.app", desc: "输入文本描述，自动生成完整PPT，支持在线编辑协作", tags: ["AI生成", "在线协作", "国际"], hot: true },
    { id: 2, name: "Tome", icon: "📑", url: "https://tome.us", desc: "AI驱动的PPT和故事讲述工具，支持嵌入多媒体", tags: ["AI叙事", "多媒体", "国际"], hot: true },
    { id: 3, name: "ChatPPT", icon: "💬", url: "https://chatppt.yoo-ai.com", desc: "国产AI对话式生成PPT，完美支持中文", tags: ["中文AI", "对话生成", "国产"], hot: true },
    { id: 4, name: "闪击PPT", icon: "⚡", url: "https://sankki.cn", desc: "快速生成工作汇报PPT，国产精品", tags: ["工作汇报", "快速生成", "国产"], hot: true },
    { id: 5, name: "Beautiful.ai", icon: "✨", url: "https://www.beautiful.ai", desc: "智能PPT设计工具，自动美化排版，海量模板", tags: ["智能排版", "模板丰富", "国际"] },
    { id: 6, name: "Presentations.ai", icon: "🎯", url: "https://presentations.ai", desc: "输入主题即可生成完整PPT，AI驱动", tags: ["AI生成", "全自动", "国际"] },
    { id: 7, name: "Slidesgo", icon: "🎨", url: "https://slidesgo.com", desc: "Free Google Slides & PowerPoint templates", tags: ["免费模板", "国际", "Google"] },
    { id: 8, name: "Canva PPT", icon: "🖼️", url: "https://www.canva.com/create/presentations/", desc: "在线设计平台，PPT功能强大模板丰富", tags: ["在线设计", "模板多", "协作"] }
];

// PPT模板站
const templateSitesData = [
    { id: 1, name: "觅知网", icon: "🔍", url: "https://www.51miz.com", desc: "海量PPT模板下载，行业覆盖广，更新快", tags: ["模板下载", "资源丰富", "国产"] },
    { id: 2, name: "优品PPT", icon: "🎁", url: "https://www.ypppt.com", desc: "免费下载PPT模板，专注质量", tags: ["免费下载", "品质高", "国产"] },
    { id: 3, name: "PPT之家", icon: "🏠", url: "https://www.pptjia.com", desc: "PPT模板免费下载，精美实用", tags: ["免费下载", "实用", "国产"] },
    { id: 4, name: "第一PPT", icon: "🏆", url: "https://www.1ppt.com", desc: "PPT模板下载基地，每日更新", tags: ["每日更新", "模板多", "国产"] },
    { id: 5, name: "演讲之主", icon: "🎤", url: "https://www.演讲之主.com", desc: "专注演讲与PPT技巧分享", tags: ["演讲技巧", "教程", "国产"] },
    { id: 6, name: "Canva", icon: "🖼️", url: "https://www.canva.com", desc: "全球知名设计平台，PPT模板精美", tags: ["国际", "模板丰富", "在线编辑"] },
    { id: 7, name: "Slidesgo", icon: "🎨", url: "https://slidesgo.com", desc: "Free Google Slides & PowerPoint templates", tags: ["免费", "国际", "多风格"] },
    { id: 8, name: "Showeet", icon: "📊", url: "https://www.showeet.com", desc: "Free PowerPoint templates and diagrams", tags: ["免费", "图表", "国际"] }
];

// PPT教程
const guidesData = [
    { id: 1, name: "AI生成PPT完整教程", icon: "📖", desc: "从零开始学习用AI工具快速生成专业PPT，包含提示词技巧和实操演示", tags: ["入门", "AI工具", "实操"] },
    { id: 2, name: "工作汇报PPT写法技巧", icon: "📈", desc: "如何写出让领导眼前一亮的工作汇报PPT，结构框架与内容技巧", tags: ["工作汇报", "框架", "升职"] },
    { id: 3, name: "商业计划书PPT制作指南", icon: "💰", desc: "创业者必看的商业计划书PPT制作方法，附模板推荐", tags: ["创业", "融资", "商业"] },
    { id: 4, name: "PPT配色与排版技巧", icon: "🎨", desc: "如何做出配色协调、排版专业的PPT，提升视觉呈现效果", tags: ["设计", "配色", "排版"] },
    { id: 5, name: "教育课件制作教程", icon: "🎓", desc: "老师必备的AI辅助课件制作教程，让课堂演示更生动", tags: ["教育", "课件", "老师"] },
    { id: 6, name: "乔布斯式演示技巧", icon: "🚀", desc: "学习乔布斯的产品发布会PPT演示技巧", tags: ["演讲", "苹果风格", "产品发布"] },
    { id: 7, name: "PPT快捷键大全", icon: "⌨️", desc: "PowerPoint常用快捷键，提高制作效率", tags: ["效率", "快捷键", "必备"] },
    { id: 8, name: "从0到1做一份完美PPT", icon: "✨", desc: "PPT制作完整流程，新手必看", tags: ["新手", "完整流程", "入门"] }
];

// 示例PPT内容
const examplePPTs = {
    work: `📊 **工作汇报PPT示例大纲**

**第1页：封面**
标题：2024年上半年工作汇报
副标题：市场部 | 汇报人：XXX | 日期：2024年6月

**第2页：目录**
一、上半年工作成果
二、关键数据展示
三、问题与挑战
四、下半年工作计划

**第3页：核心成果概览**
• 销售额同比增长35%，完成全年目标58%
• 新增客户120家，达成率102%
• 签约战略级大客户3个
• 品牌曝光量提升200%

**第4页：重点成果展示**
• 成功签约XX集团（500万+年度合同）
• 完成XX产品线独家代理谈判
• 举办行业峰会1场，500+人参与

**第5页：数据分析**
[图表：季度销售额趋势]

**第6页：问题与挑战**
• 市场竞争加剧
• 人才流失率上升
• 成本控制压力

**第7页：下半年计划**
• Q3：完成新产品线布局
• Q4：冲击年度目标

---

💡 使用「ChatPPT」或「Gamma」可AI快速生成正式PPT！`,

    study: `🎓 **教育培训课件示例大纲**

**第1页：封面**
标题：Python编程入门
副标题：零基础学习 | 课程时长：20课时

**第2页：课程大纲**
一、Python基础语法
二、数据类型与变量
三、条件判断与循环
四、函数与模块

**第3页：Python基础**
• 安装与环境配置
• 第一个程序：Hello World
• 代码规范

**第4页：数据类型**
• 数字、字符串
• 列表、字典

**第5页：控制流程**
• if条件判断
• for/while循环

**第6页：函数**
• 定义与调用
• 参数与返回值

**第7页：实战项目**
• 用户登录系统

---

💡 使用「ChatPPT」可快速生成完整课件内容！`,

    product: `📦 **产品介绍PPT示例大纲**

**第1页：封面**
标题：[产品名称]
副标题：[价值主张/Slogan]

**第2页：产品概览**
• 核心价值
• 目标用户
• 应用场景

**第3页：核心功能**
[功能一] [功能二] [功能三]

**第4页：产品优势**
• 优势一：...
• 优势二：...

**第5页：适用场景**
• 场景一：...
• 场景二：...

**第6页：总结**
• 核心价值回顾
• 行动号召

---

💡 使用「Gamma」可AI生成精美产品介绍PPT！`,

    plan: `💼 **商业计划书PPT示例大纲**

**第1页：封面**
标题：[项目名称]商业计划书
副标题：一句话介绍项目

**第2页：执行摘要**
• 项目概述
• 市场机会
• 融资需求

**第3页：市场分析**
• 市场规模
• 目标用户
• 竞争分析

**第4页：产品服务**
• 产品介绍
• 核心功能

**第5页：商业模式**
• 盈利模式
• 定价策略

**第6页：团队介绍**
• 核心成员
• 相关经验

**第7页：融资计划**
• 融资金额
• 资金用途

---

💡 使用「Gamma」或「Beautiful.ai」可生成专业商业计划书PPT！`,

    marketing: `📢 **市场营销PPT示例大纲**

**第1页：封面**
标题：618电商营销活动方案
副标题：活动主题 | 日期

**第2页：活动背景**
• 市场现状
• 目标人群

**第3页：活动目标**
• GMV目标
• 流量目标

**第4页：主推产品**
• 产品一
• 产品二

**第5页：推广渠道**
• 渠道一
• 渠道二

**第6页：时间节点**
[甘特图展示活动时间]

**第7页：预算分配**
[饼图展示预算分配]

---

💡 使用「Gamma」可快速生成营销方案PPT！`,

    summary: `📋 **总结报告PPT示例大纲**

**第1页：封面**
标题：[总结主题]
副标题：汇报人：XXX | 日期

**第2页：总结概览**
• 核心成果
• 关键数据

**第3页：主要成果**
• 成果一：...
• 成果二：...

**第4页：数据亮点**
[图表展示关键数据]

**第5页：经验与教训**
• 成功经验
• 教训反思

**第6页：未来展望**
• 下一步计划

**第7页：结束页**
感谢聆听

---

💡 点击上方工具，可快速生成正式PPT！`,

    personal: `📄 **个人简历PPT示例大纲**

**第1页：封面**
标题：XXX个人简历
副标题：应聘岗位 | 联系方式

**第2页：个人简介**
• 教育背景
• 工作年限
• 核心技能

**第3页：核心优势**
• 优势一
• 优势二

**第4页：项目经验**
• 项目一
• 项目二

**第5页：技能证书**
• 技能列表
• 证书展示

**第6页：自我评价**
• 性格特点
• 职业规划

---

💡 使用「Canva」可生成精美简历PPT！`
};

// DOM加载后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 渲染场景标签
    const sceneList = document.getElementById('sceneList');
    if (sceneList) {
        sceneList.innerHTML = scenesData.map(s => `
            <div class="scene-item" data-scene="${s.id}">
                <span class="scene-icon">${s.icon}</span>
                <div class="scene-info">
                    <div class="scene-name">${s.name}</div>
                    <div class="scene-desc">${s.desc}</div>
                </div>
            </div>
        `).join('');
    }

    // 渲染AI工具
    const aiToolsGrid = document.getElementById('aiToolsGrid');
    if (aiToolsGrid) {
        aiToolsGrid.innerHTML = aiToolsData.map(t => `
            <div class="聚合tool-card">
                <div class="聚合tool-header">
                    <span class="聚合tool-icon">${t.icon}</span>
                    <div class="聚合tool-info">
                        <div class="聚合tool-name">${t.name}</div>
                        ${t.hot ? '<span class="聚合tool-badge hot">热门</span>' : ''}
                    </div>
                </div>
                <p class="聚合tool-desc">${t.desc}</p>
                <div class="聚合tool-tags">
                    ${t.tags.map(tag => `<span class="聚合tool-tag">${tag}</span>`).join('')}
                </div>
                <a href="${t.url}" target="_blank" class="聚合tool-link">立即使用 →</a>
            </div>
        `).join('');
    }

    // 渲染模板站
    const templateGrid = document.getElementById('templateGrid');
    if (templateGrid) {
        templateGrid.innerHTML = templateSitesData.map(t => `
            <div class="聚合tool-card">
                <div class="聚合tool-header">
                    <span class="聚合tool-icon">${t.icon}</span>
                    <div class="聚合tool-info">
                        <div class="聚合tool-name">${t.name}</div>
                    </div>
                </div>
                <p class="聚合tool-desc">${t.desc}</p>
                <div class="聚合tool-tags">
                    ${t.tags.map(tag => `<span class="聚合tool-tag">${tag}</span>`).join('')}
                </div>
                <a href="${t.url}" target="_blank" class="聚合tool-link">进入下载 →</a>
            </div>
        `).join('');
    }

    // 渲染教程
    const guidesGrid = document.getElementById('guidesGrid');
    if (guidesGrid) {
        guidesGrid.innerHTML = guidesData.map(g => `
            <div class="guide-card">
                <div class="guide-icon">${g.icon}</div>
                <div class="guide-content">
                    <div class="guide-name">${g.name}</div>
                    <p class="guide-desc">${g.desc}</p>
                    <div class="guide-tags">
                        ${g.tags.map(tag => `<span class="guide-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 场景切换
    document.querySelectorAll('.scene-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.scene-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const scene = item.dataset.scene;
            showExample(scene);
        });
    });

    // 默认显示工作汇报示例
    const firstScene = document.querySelector('.scene-item');
    if (firstScene) {
        firstScene.classList.add('active');
        showExample('work');
    }
});

// 显示示例内容
function showExample(scene) {
    const content = examplePPTs[scene] || examplePPTs.work;
    const resultText = document.getElementById('resultText');
    const resultSection = document.getElementById('result');
    if (resultText) {
        resultText.textContent = content;
    }
    if (resultSection) {
        resultSection.style.display = 'block';
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }
}
