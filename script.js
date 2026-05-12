// ========================================
// AI生成PPT - 数据和逻辑
// ========================================

// 模板场景数据
const templatesData = [
    { id: 1, name: "工作汇报", icon: "📊", description: "季度/年度工作汇报、项目进展汇报、部门总结等", pages: "8-15页", style: "简洁专业", badge: "hot", example: "帮我生成一份Q3工作汇报PPT，包含：季度目标完成情况、关键成果展示、问题与挑战、下季度计划" },
    { id: 2, name: "教育培训", icon: "🎓", description: "课程课件、培训PPT、教学演示、学术报告", pages: "10-30页", style: "清晰有条理", badge: "hot", example: "生成一份Python基础教程PPT，包含变量、数据类型、条件语句、循环、函数等内容" },
    { id: 3, name: "产品介绍", icon: "📦", description: "产品发布、功能介绍、解决方案展示", pages: "10-20页", style: "科技感强", badge: "new", example: "帮我制作一份智能手表产品介绍PPT，包含：产品特点、核心功能、技术参数、适用场景" },
    { id: 4, name: "商业计划", icon: "💼", description: "创业计划书、投资路演、项目提案", pages: "15-25页", style: "专业大气", badge: "hot", example: "生成一份奶茶店创业计划书PPT，包含：项目背景、市场分析、产品定位、投资预算、盈利预测" },
    { id: 5, name: "项目方案", icon: "📋", description: "项目策划、实施方案、需求文档", pages: "10-20页", style: "逻辑清晰", badge: "", example: "帮我生成一份App开发项目方案PPT，包含：项目背景、需求分析、技术架构、开发计划、团队分工" },
    { id: 6, name: "市场营销", icon: "📢", description: "品牌推广、活动策划、营销方案", pages: "10-20页", style: "创意吸睛", badge: "new", example: "生成一份618电商营销活动PPT，包含：活动背景、目标人群、主推产品、推广渠道、时间节点" },
    { id: 7, name: "公司介绍", icon: "🏢", description: "企业介绍、团队展示、公司愿景", pages: "8-15页", style: "稳重专业", badge: "", example: "帮我制作一份科技公司介绍PPT，包含：公司概况、核心业务、技术优势、团队介绍、发展历程" },
    { id: 8, name: "个人简历", icon: "📄", description: "求职简历、自我介绍、竞聘演讲", pages: "5-10页", style: "简洁有力", badge: "", example: "生成一份产品经理求职PPT，包含：个人简介、核心优势、项目经验、专业技能、职业规划" }
];

// AI PPT工具数据
const toolsData = [
    { id: 1, name: "Gamma", icon: "📊", category: "ai-ppt", typeName: "AI演示", description: "输入文本描述，自动生成完整PPT演示文稿，支持在线编辑和协作", tags: ["AI生成", "在线协作", "多平台"], badge: "hot", link: "https://gamma.app" },
    { id: 2, name: "Tome", icon: "📑", category: "ai-ppt", typeName: "AI演示", description: "AI驱动的PPT和故事讲述工具，支持嵌入多媒体内容", tags: ["AI叙事", "多媒体", "交互式"], badge: "hot", link: "https://tome.us" },
    { id: 3, name: "Beautiful.ai", icon: "✨", category: "ai-ppt", typeName: "AI演示", description: "智能PPT设计工具，自动美化排版，海量模板可选", tags: ["智能排版", "模板库", "企业版"], badge: "", link: "https://www.beautiful.ai" },
    { id: 4, name: "ChatPPT", icon: "💬", category: "ai-ppt", typeName: "AI演示", description: "国产AI PPT工具，通过对话生成PPT，支持中文", tags: ["中文AI", "对话生成", "本地化"], badge: "new", link: "https://chatppt.yoo-ai.com" },
    { id: 5, name: "闪击PPT", icon: "⚡", category: "ai-ppt", typeName: "AI演示", description: "快速生成PPT的国产工具，适合工作汇报场景", tags: ["快速生成", "工作汇报", "国产"], badge: "", link: "https://sankki.cn" },
    { id: 6, name: "觅知网", icon: "🔍", category: "template", typeName: "模板站", description: "海量PPT模板下载，支持各行业各场景", tags: ["模板丰富", "行业齐全", "可编辑"], badge: "hot", link: "https://www.51miz.com" },
    { id: 7, name: "创客贴", icon: "🎨", category: "design", typeName: "设计工具", description: "在线设计平台，提供PPT模板和在线编辑功能", tags: ["在线设计", "多类型", "易上手"], badge: "", link: "https://www.chuangkit.com" },
    { id: 8, name: "Canva", icon: "🖼️", category: "design", typeName: "设计工具", description: "全球知名在线设计工具，PPT功能强大模板丰富", tags: ["国际版", "模板多", "协作"], badge: "", link: "https://www.canva.com" }
];

// 教程指南数据
const guidesData = [
    { id: 1, name: "AI生成PPT完整教程", icon: "📖", description: "从零开始学习如何使用AI工具快速生成专业PPT，包含提示词技巧和实操演示", tags: ["入门教程", "提示词", "实操"], badge: "hot" },
    { id: 2, name: "工作汇报PPT写法", icon: "📈", description: "如何写出让领导眼前一亮的工作汇报PPT，包含结构框架和内容技巧", tags: ["工作汇报", "框架结构", "升职加薪"], badge: "" },
    { id: 3, name: "商业计划书PPT制作", icon: "💰", description: "创业者和投资人都在看的商业计划书PPT制作指南，附模板推荐", tags: ["创业", "融资", "商业计划"], badge: "new" },
    { id: 4, name: "PPT配色与排版技巧", icon: "🎨", description: "如何做出配色协调、排版专业的PPT，提升视觉呈现效果", tags: ["设计", "配色", "排版"], badge: "" },
    { id: 5, name: "教育课件制作指南", icon: "🎓", description: "老师必备的AI辅助课件制作教程，让课堂演示更生动", tags: ["教育培训", "课件", "老师"], badge: "" },
    { id: 6, name: "产品发布会PPT要点", icon: "🚀", description: "如何制作一场成功的产品发布会PPT，包含乔布斯式演示技巧", tags: ["产品发布", "演讲", "苹果风格"], badge: "new" }
];

// PPT生成提示词模板
const promptTemplates = {
    work: "请为【工作汇报】场景生成PPT内容，主题：{topic}。要求：\n1. 包含封面页、目录页\n2. 工作成果展示（3-4页）\n3. 问题分析（1-2页）\n4. 下一步计划（1-2页）\n5. 结束页\n请生成每页的标题和核心内容要点。",
    study: "请为【教育培训】场景生成PPT内容，主题：{topic}。要求：\n1. 包含封面页、课程大纲\n2. 知识点讲解（5-8页）\n3. 案例分析（2-3页）\n4. 总结与作业\n请生成每页的标题和详细内容要点。",
    product: "请为【产品介绍】场景生成PPT内容，主题：{topic}。要求：\n1. 包含封面页、产品概览\n2. 核心功能介绍（3-4页）\n3. 产品优势（2页）\n4. 适用场景（1-2页）\n5. 总结页\n请生成每页的标题和核心卖点。",
    plan: "请为【商业计划】场景生成PPT内容，主题：{topic}。要求：\n1. 封面页、执行摘要\n2. 项目背景与市场分析\n3. 产品/服务介绍\n4. 商业模式与盈利预测\n5. 团队介绍\n6. 融资需求与联系方式\n请生成每页的关键内容。",
    summary: "请为【总结报告】场景生成PPT内容，主题：{topic}。要求：\n1. 封面页、总结概览\n2. 主要成果与数据（3-4页）\n3. 经验与教训（2页）\n4. 未来展望（1-2页）\n5. 结束页\n请生成每页的标题和核心要点。",
    custom: "请为以下主题生成PPT内容：{topic}。\n要求：\n1. 结构清晰，逻辑连贯\n2. 页数适中（8-15页）\n3. 每页包含标题和核心内容\n请生成完整的PPT大纲。"
};

// 示例内容
const exampleResults = {
    work: `📊 **工作汇报PPT大纲**

**第1页：封面**
标题：2024年上半年工作汇报
副标题：市场部 | 汇报人：XXX | 日期：2024年6月

**第2页：目录**
一、上半年工作成果
二、关键数据展示
三、问题与挑战
四、下半年工作计划

**第3页：核心成果概览**
• 销售额同比增长35%，完成全年目标的58%
• 新增客户数量：120家，达成率102%
• 成功签约3个战略级大客户
• 品牌曝光量提升200%

**第4页：重点成果-大客户拓展**
• 成功签约XX集团（年度合同额500万+）
• 完成XX产品线独家代理谈判
• 建立战略合作伙伴关系

**第5页：重点成果-品牌建设**
• 举办行业峰会1场，参与人数500+
• 新媒体矩阵粉丝增长150%
• 获得行业权威奖项2项

**第6页：数据分析**
[图表：季度销售额趋势]
[图表：客户行业分布]
[图表：产品销量排行]

**第7页：问题与挑战**
• 头部客户竞争激烈，议价能力下降
• 部分区域市场份额下滑
• 团队人力不足，项目交付压力大

**第8页：下半年计划**
• Q3目标：完成销售额1500万
• 重点拓展行业：新能源、医疗
• 招募销售精英5名
• 优化客户服务流程

**第9页：需要支持**
• 请示：增加市场预算20万
• 需要：跨部门协作资源
• 期待：领导战略指导

**第10页：结束页**
感谢聆听
欢迎提问交流`,
    study: `📚 **Python基础教程PPT大纲**

**第1页：封面**
标题：Python编程入门教程
副标题：从零基础到写出第一个程序

**第2页：课程大纲**
1. Python简介与应用场景
2. 环境搭建
3. 变量与数据类型
4. 条件语句
5. 循环结构
6. 函数基础
7. 实战练习

**第3页：Python简介**
• 诞生时间：1991年，由Guido van Rossum创造
• 设计哲学：简洁、易读、易学
• 应用领域：Web开发、数据分析、AI、自动化

**第4页：环境搭建**
• 下载Python：python.org
• 安装步骤详解
• IDE推荐：PyCharm、VS Code、Jupyter Notebook

**第5页：第一个程序**
```python
print("Hello, World!")
```
运行结果：Hello, World!

**第6页：变量与数据类型**
• 数字：int, float
• 字符串：str
• 布尔值：bool
• 列表：list
• 字典：dict

**第7页：条件语句**
```python
if score >= 60:
    print("及格")
else:
    print("不及格")
```

**第8页：循环结构**
for循环：遍历列表
while循环：条件循环

**第9页：函数基础**
```python
def greet(name):
    return f"Hello, {name}!"
```

**第10页：实战练习**
练习1：编写计算器程序
练习2：实现猜数字游戏

**第11页：总结**
• Python入门其实很简单
• 多动手写代码是关键
• 善用搜索引擎和文档`,
    product: `📦 **产品介绍PPT大纲**

**第1页：封面**
标题：智眸AI智能摄像头
副标题：新一代AI视觉感知解决方案

**第2页：产品概览**
• 一款搭载AI芯片的智能摄像头
• 端侧AI处理，保护隐私
• 适用于家庭、店铺、办公等多场景

**第3页：核心功能-智能识别**
• 人脸识别：毫秒级响应，准确率99.8%
• 姿态检测：跌倒检测、异常行为预警
• 物体识别：200+常见物体识别

**第4页：核心功能-智能追踪**
• 自动追踪移动物体
• 360°全景巡航
• 智能分区警戒

**第5页：技术优势**
• 自研AI芯片，算力强大
• 端侧处理，无需云端
• 低功耗设计，待机持久
• 军工级加密，隐私安全

**第6页：规格参数**
• 分辨率：4K超清
• 视角：360°全景
• 夜视：全彩夜视30米
• 连接：WiFi6/有线

**第7页：适用场景**
• 家庭安防：宝宝监护、老人看护
• 店铺管理：客流统计、异常预警
• 办公管理：考勤打卡、会议记录

**第8页：竞品对比**
| 功能 | 智眸 | 竞品A | 竞品B |
|------|------|-------|-------|
| AI识别 | ✓ | ✗ | ✓ |
| 端侧处理 | ✓ | ✗ | ✗ |
| 隐私加密 | ✓ | ✓ | ✗ |

**第9页：联系我们**
官网：www.zhimouai.com
电话：400-XXX-XXXX
邮箱：contact@zhimouai.com`,
    plan: `💼 **奶茶店创业计划书PPT大纲**

**第1页：封面**
标题：茶悦时光奶茶店商业计划书
副标题：健康茶饮新体验
汇报人：XXX | 日期：2024年6月

**第2页：执行摘要**
• 项目名称：茶悦时光
• 项目定位：健康、鲜制茶饮
• 目标市场：18-35岁年轻消费群体
• 预计投资：30万元
• 预计回本周期：8-12个月

**第3页：市场分析**
• 茶饮市场规模：1000亿+
• 年增长率：20%以上
• 消费升级趋势明显
• 健康茶饮需求增长

**第4页：目标客户画像**
• 年龄：18-35岁
• 性别：女性为主（65%）
• 消费频次：1-3次/周
• 注重品质和健康

**第5页：产品介绍**
• 鲜果茶系列
• 奶盖茶系列
• 纯茶系列
• 季节限定款

**第6页：商业模式**
• 线下门店+外卖平台
• 会员体系运营
• 社交媒体营销
• 联名合作推广

**第7页：选址与装修**
• 优先位置：商场、学校、写字楼周边
• 店面面积：20-40㎡
• 装修风格：清新自然风
• 投资预算：10万元

**第8页：团队介绍**
• 创始人：XXX（多年餐饮经验）
• 产品研发：专业茶饮师
• 运营团队：3人

**第9页：财务预测**
• 首年营收目标：80万元
• 毛利率：60-65%
• 运营成本：30万元
• 预计利润：18万元

**第10页：融资需求**
• 融资金额：20万元
• 出让股份：15%
• 资金用途：设备采购、装修、原料备货`,
    summary: `📊 **项目总结报告PPT大纲**

**第1页：封面**
标题：智慧社区项目总结
副标题：2024年上半年

**第2页：汇报概览**
• 项目周期：2024.01-2024.06
• 项目目标：建成10个智慧社区示范点
• 目标完成率：120%

**第3页：核心成果**
• 建成智慧社区：12个（超额2个）
• 覆盖居民户数：50000+户
• 用户满意度：96.5%
• 获得市级示范项目称号

**第4页：数据成果**
• 智能设备安装：2000+台
• 平台注册用户：30000+人
• 日均活跃用户：8000+人
• 事件响应时间：缩短70%

**第5页：创新亮点**
• AI人脸识别门禁系统
• 智能垃圾分类系统
• 远程医疗问诊服务
• 社区养老智慧化方案

**第6页：经验总结**
✅ 需求调研要充分
✅ 技术方案要可行
✅ 用户体验要优先
✅ 运营服务要跟上

**第7页：教训反思**
⚠️ 部分硬件选型不够成熟
⚠️ 工期把控有待加强
⚠️ 培训推广力度不足

**第8页：下半年计划**
• 拓展至50个社区
• 完成平台2.0升级
• 引入更多增值服务
• 打造标杆案例`,
    custom: `📄 **PPT内容大纲**

根据您提供的主题和要求，以下是生成的PPT内容结构：

[具体内容会根据您的输入提示词自动生成]

---
💡 **使用提示**：
• 点击"看示例"按钮查看各场景的完整示例
• 在输入框中描述您的具体需求
• 点击"生成PPT内容"获取完整大纲`
};

// DOM Elements
const templatesGrid = document.getElementById('templatesGrid');
const toolsGrid = document.getElementById('toolsGrid');
const guidesGrid = document.getElementById('guidesGrid');
const pptPrompt = document.getElementById('pptPrompt');
const charCount = document.getElementById('charCount');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const exampleBtn = document.getElementById('exampleBtn');
const resultSection = document.getElementById('result');
const resultContent = document.getElementById('resultContent');
const sceneTabs = document.querySelectorAll('.scene-tab');

// Render Template Card
function renderTemplateCard(item) {
    const badgeClass = item.badge === 'hot' ? 'hot' : (item.badge === 'new' ? 'new' : '');
    const badgeText = item.badge === 'hot' ? '热门' : (item.badge === 'new' ? '新' : '');

    return `
        <div class="template-card" data-example="${item.example}" data-scene="${item.id}">
            <div class="template-icon">${item.icon}</div>
            <div class="template-content">
                <div class="template-header">
                    <h3 class="template-name">${item.name}</h3>
                    ${badgeText ? `<span class="template-badge ${badgeClass}">${badgeText}</span>` : ''}
                </div>
                <p class="template-desc">${item.description}</p>
                <div class="template-meta">
                    <span class="meta-item">📄 ${item.pages}</span>
                    <span class="meta-item">🎨 ${item.style}</span>
                </div>
            </div>
        </div>
    `;
}

// Render Tool Card
function renderToolCard(item) {
    const badgeClass = item.badge === 'hot' ? 'hot' : (item.badge === 'new' ? 'new' : '');
    const badgeText = item.badge === 'hot' ? '热门' : (item.badge === 'new' ? '新' : '');

    return `
        <div class="tool-card">
            <div class="tool-header">
                <div class="tool-icon">${item.icon}</div>
                <div class="tool-info">
                    <div class="tool-type">${item.typeName}</div>
                    <div class="tool-name">${item.name}</div>
                </div>
                ${badgeText ? `<span class="tool-badge ${badgeClass}">${badgeText}</span>` : ''}
            </div>
            <p class="tool-desc">${item.description}</p>
            <div class="tool-tags">
                ${item.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            </div>
            <a href="${item.link}" target="_blank" class="tool-link">立即使用 →</a>
        </div>
    `;
}

// Render Guide Card
function renderGuideCard(item) {
    const badgeClass = item.badge === 'hot' ? 'hot' : (item.badge === 'new' ? 'new' : '');
    const badgeText = item.badge === 'hot' ? '热门' : (item.badge === 'new' ? '新' : '');

    return `
        <div class="guide-card">
            <div class="guide-icon">${item.icon}</div>
            <div class="guide-content">
                <div class="guide-header">
                    <h3 class="guide-name">${item.name}</h3>
                    ${badgeText ? `<span class="guide-badge ${badgeClass}">${badgeText}</span>` : ''}
                </div>
                <p class="guide-desc">${item.description}</p>
                <div class="guide-tags">
                    ${item.tags.map(tag => `<span class="guide-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Show result
function showResult(content) {
    resultSection.style.display = 'block';
    resultContent.innerHTML = `<pre class="result-text">${content}</pre>`;
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Copy result
document.getElementById('copyResult')?.addEventListener('click', () => {
    const text = resultContent.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('已复制到剪贴板！');
    });
});

// Download result
document.getElementById('downloadResult')?.addEventListener('click', () => {
    const text = resultContent.innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PPT内容大纲.txt';
    a.click();
    URL.revokeObjectURL(url);
});

// Character count
pptPrompt?.addEventListener('input', () => {
    const count = pptPrompt.value.length;
    charCount.textContent = count;
    if (count > 2000) {
        charCount.style.color = '#ef4444';
    } else {
        charCount.style.color = '';
    }
});

// Clear input
clearBtn?.addEventListener('click', () => {
    pptPrompt.value = '';
    charCount.textContent = '0';
    resultSection.style.display = 'none';
});

// Scene tab switching
sceneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        sceneTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const scene = tab.dataset.scene;
        const templates = templatesData.find(t => t.name === (scene === 'work' ? '工作汇报' : 
            scene === 'study' ? '教育培训' : 
            scene === 'product' ? '产品介绍' : 
            scene === 'plan' ? '商业计划' : 
            scene === 'summary' ? '总结报告' : ''));
        
        if (scene !== 'custom' && templates) {
            pptPrompt.placeholder = templates.example;
        } else {
            pptPrompt.placeholder = '描述你想要制作的PPT内容，例如：帮我制作一份关于人工智能发展趋势的演示文稿，包含技术演进、应用场景、未来展望等部分';
        }
    });
});

// Example button
exampleBtn?.addEventListener('click', () => {
    const activeTab = document.querySelector('.scene-tab.active');
    const scene = activeTab?.dataset.scene || 'work';
    
    const sceneMap = {
        'work': 'work',
        'study': 'study',
        'product': 'product',
        'plan': 'plan',
        'summary': 'summary',
        'custom': 'custom'
    };
    
    const exampleKey = sceneMap[scene] || 'custom';
    showResult(exampleResults[exampleKey]);
});

// Generate button
generateBtn?.addEventListener('click', () => {
    const prompt = pptPrompt.value.trim();
    if (!prompt) {
        alert('请输入PPT主题或需求描述');
        return;
    }
    
    // 模拟生成过程
    generateBtn.innerHTML = '<span class="btn-icon">⏳</span> 生成中...';
    generateBtn.disabled = true;
    
    setTimeout(() => {
        const activeTab = document.querySelector('.scene-tab.active');
        const scene = activeTab?.dataset.scene || 'custom';
        
        let template = promptTemplates[scene] || promptTemplates.custom;
        const content = template.replace('{topic}', prompt);
        
        // 模拟AI生成的内容
        const generatedContent = generatePPContent(prompt, scene);
        showResult(generatedContent);
        
        generateBtn.innerHTML = '<span class="btn-icon">✨</span> 生成PPT内容';
        generateBtn.disabled = false;
    }, 1500);
});

// Generate PPT content
function generatePPContent(prompt, scene) {
    const sceneNames = {
        work: '工作汇报',
        study: '教育培训',
        product: '产品介绍',
        plan: '商业计划',
        summary: '总结报告',
        custom: '演示文稿'
    };
    
    const topic = prompt.slice(0, 50);
    
    return `📊 **${sceneNames[scene] || 'PPT'}大纲**
主题：${topic}

---
**第1页：封面**
标题：${topic}
副标题：${sceneNames[scene] || '演示文稿'} | 日期：${new Date().toLocaleDateString('zh-CN')}

---
**第2页：目录**
一、内容概览
二、核心要点
三、详细阐述
四、总结与展望

---
**第3页：内容概览**
• ${prompt.slice(0, 30)}...
• 本演示文稿共包含X页
• 涵盖主要方面和关键信息

---
**第4-7页：核心要点**
【要点一】背景与目的
• 说明项目/主题的背景
• 阐述核心目标和意义

【要点二】主要内容
• 详细展开主要板块
• 配合数据/案例说明

【要点三】实施方法
• 具体的方法和路径
• 关键步骤和节点

【要点四】成果展示
• 已取得的主要成果
• 数据支撑和效果

---
**第8-9页：详细阐述**
根据具体内容展开详细说明，包括：
• 背景分析
• 现状描述
• 问题分析
• 解决方案

---
**第10页：总结与展望**
• 主要收获和结论
• 未来发展方向
• 后续行动计划

---
**第11页：结束页**
感谢聆听
欢迎交流讨论

---
💡 **提示**：以上内容为AI模拟生成，实际使用时可结合具体需求调整。建议配合Gamma、Tome等AI PPT工具生成正式演示文稿。`;
}

// Template card click - fill prompt
templatesGrid?.addEventListener('click', (e) => {
    const card = e.target.closest('.template-card');
    if (card) {
        const example = card.dataset.example;
        pptPrompt.value = example;
        charCount.textContent = example.length;
        
        // Switch to custom tab
        sceneTabs.forEach(t => t.classList.remove('active'));
        document.querySelector('[data-scene="custom"]')?.classList.add('active');
        
        pptPrompt.focus();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    templatesGrid.innerHTML = templatesData.map(renderTemplateCard).join('');
    toolsGrid.innerHTML = toolsData.map(renderToolCard).join('');
    guidesGrid.innerHTML = guidesData.map(renderGuideCard).join('');
});
