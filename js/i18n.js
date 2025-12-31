(function () {
  const STORAGE_KEY = 'openchat_lang'; // 'zh' | 'en'
  const $ = (sel) => document.querySelector(sel);

  // 智能设置文本：有 \n 时用 innerHTML 并替换为 <br>，否则用 textContent
  function setSmartText(sel, val) {
    const el = $(sel);
    if (!el) return;
    if (typeof val !== 'string') {
      el.textContent = val == null ? '' : String(val);
      return;
    }
    if (val.includes('\n')) {
      el.innerHTML = val.replace(/\n/g, '<br>');
    } else {
      el.textContent = val;
    }
  }

  const MAP = {
    zh: {
      // 文档级
      __lang: 'zh-CN',
      __title: 'Fastaistack - 智赋企业，算启新程',
      __title_open: 'Fastaistack - 智赋企业，算启新程',

      // 顶部导航
      '.nav-logo .logo-text': 'OpenChat',
      '.nav-logo .logo-text[data-page="open"]': 'Fastaistack',
      '.nav-menu .community-btn': '社群',
      '.nav-menu a.nav-link[href="#faq"]': 'FAQ',
      '.download-dropdown .download-btn': '下载客户端',

      // 下载菜单项
      '.download-menu a:nth-child(1) span': 'Windows',
      '.download-menu a:nth-child(2) span': 'Mac M系列',
      '.download-menu a:nth-child(3) span': 'Mac Intel',

      // 首页 hero
      '.hero-title h1': 'OpenChat',
      '.hero-description':
        '开源免费的AI解决方案,保护您的数据安全,提供强大的文档处理和智能助手功能\n无需注册!即可开启您的大模型体验!!',
      '.download-buttons a:nth-child(1) span': 'Windows 下载',
      '.download-buttons a:nth-child(2) span': 'Mac M系列 下载',
      '.download-buttons a:nth-child(3) span': 'Mac Intel 下载',

      // 第二屏 tabs
      '.feature-nav .feature-nav-item[data-tab="compatibility"] span': '多元兼容',
      '.feature-nav .feature-nav-item[data-tab="security"] span': '安全部署',
      '.feature-nav .feature-nav-item[data-tab="plugins"] span': '实用插件',
      '.feature-nav .feature-nav-item[data-tab="models"] span': '模型应用',

      // 多元兼容内容
      '#compatibility-content .content-title h1': 'OpenChat兼容主流云端大模型',
      '#compatibility-content .content-description':
        '无论是 OpenAI 的强大语言理解能力,还是 Deepseek 的高效推理性能,亦或是硅基流动的创新技术,都能无缝接入;无需在不同平台间切换便能享体验所有模型服务',

      // 安全部署内容
      '#security-content .content-title h1': 'OpenChat安全部署解决方案',
      '#security-content .content-description':
        '支持企业级安全架构保护，模型支持本地化部署和私有服务器接入，信息安全不上公网。确保用户隐私安全;提供完整的权限管理和log日志,满足企业合规要求',

      // 实用插件内容
      '#plugins-content .content-title h1': 'OpenChat实用插件生态',
      '#plugins-content .content-description':
        '支持定制化插件,涵盖文档处理、离线知识库、敏感词检测以及网络检索等多个插件,增强模型适用范围以满足各类通用场景需求;配置激活即可使用',

      // 模型应用内容
      '#models-content .content-title h1': 'OpenChat智能模型应用',
      '#models-content .content-description':
        '集成多种先进AI模型应用,支持文本生成、智能体、AI翻译以及图像OCR识别应用;支持模型输出的调参,确保在不同场景场景下的性能表现,满足专业应用需求',

      // 开源页
      '.opensource-title h1': '免费开源',
      '.opensource-description':
        'OpenChat面相社会开源开放,您不仅可以免费使用本软件,也能在开源网站上看到我们的开发进度,若您有任何疑问和建议,欢迎通过社群与我们联系!',
      '.opensource-grid .grid-section a:nth-child(1) span': 'GitHub',
      '.opensource-grid .grid-section a:nth-child(2) span': 'Gitee',
      '.opensource-grid .grid-section a:nth-child(3) span': '小红书',

      // FAQ
      '#faq .faq-title h1': '常见问题',
      '.faq-list .faq-item:nth-child(1) .faq-question span': 'OpenChat会收集我的数据吗？',
      '.faq-list .faq-item:nth-child(1) .faq-answer p':
        '我们仅会收集下载次数用于统计，您使用中形成的任何数据我们不会进行收集。',
      '.faq-list .faq-item:nth-child(2) .faq-question span': '我的电脑需要什么配置才能使用OpenChat？',
      '.faq-list .faq-item:nth-child(2) .faq-answer p:nth-child(1)':
        'Windows版OpenChat适用于安装了64位Windows10与11系统的电脑并拥有8GB以上内存空间。',
      '.faq-list .faq-item:nth-child(2) .faq-answer p:nth-child(2)':
        'Mac版OpenChat适用于任何系统版本的MAC（M芯片），以及MACOS在12.5以上的MAC（Intel芯片）',
      '.faq-list .faq-item:nth-child(3) .faq-question span': '如何反馈使用中的问题？',
      '.faq-list .faq-item:nth-child(3) .faq-answer p':
        '您可以通过在开源社区留言、私信我们的小红书账号，或通过扫描二维码进入我们的粉丝群与我们取得联系。',
      '.faq-list .faq-item:nth-child(4) .faq-question span': 'OpenChat如何收取费用？',
      '.faq-list .faq-item:nth-child(4) .faq-answer p':
        'OpenChat本身无需注册且不收取任何费用，但部分服务通过第三方API提供（例如使用云端模型或第三方搜索引擎），使用时您可能需要向API提供者支付费用。',
      '.faq-list .faq-item:nth-child(5) .faq-question span': 'OpenChat适用于哪些场景？',
      '.faq-list .faq-item:nth-child(5) .faq-answer p':
        'OpenChat支持使用接入不同大模型解决各类问题，支持在本地部署0.5B-7B的小参数模型在私密的场景完成简单任务，也可以接入云端的万亿参数模型解决复杂问款，或使用智能助手来生成特定风格的内容，亦或者使用AI翻译功能翻译您的文件。',

      // 页脚
      '.copyright p': 'OpenChat - 开源私有AI助手',

      // 二维码弹窗
      '#qr-modal h3': '扫码加入社群',
      '#qr-modal p': '扫描二维码加入我们的社群\n获取最新资讯和技术支持',
      '#qr-modal button': '关闭',

      // Open.html 首页
      '.open-hero-title .open-hero-title-text': 'Fastaistack',
      '.open-hero-title .open-hero-description': '智赋企业，算启新程',
      '.open-product-card:nth-child(1) .open-card-title': 'OpenPAI',
      '.open-product-card:nth-child(1) .open-card-description': '以生产级能力，赋能 AI Agent 全流程开发',
      '.open-product-card:nth-child(1) .open-card-btn': '了解更多 →',
      '.open-product-card:nth-child(2) .open-card-title': 'OpenChat',
      '.open-product-card:nth-child(2) .open-card-description': '让你的电脑，成为 AI 办公助手',
      '.open-product-card:nth-child(2) .open-card-btn': '了解更多 →',
      '.open-product-card:nth-child(3) .open-card-title': 'OpenStation',
      '.open-product-card:nth-child(3) .open-card-description': '让大模型部署与管理更简单高效',
      '.open-product-card:nth-child(3) .open-card-btn': '了解更多 →',
      // OpenPAI 详情
      '#openpai-detail .open-detail-title': 'OpenPAI',
      '#openpai-detail .open-detail-subtitle': '以生产级能力，赋能 AI Agent 全流程开发',
      '#openpai-detail .open-detail-description': '轻量易用、功能强大的生产级 AI Agent 开发平台。无需复杂技术栈，即可快速接入大模型服务、搭建大模型工作流，依托可视化界面高效构建 AI Agent 应用；全面支持本地、企业服务器及云端模型服务灵活接入，以直观友好的操作体验，让 AI Agent 开发门槛大幅降低、落地效率成倍提升！',
      '#openpai-detail .open-feature-item:nth-child(1) .open-feature-title': '大模型接入',
      '#openpai-detail .open-feature-item:nth-child(1) .open-feature-desc': '一键无缝接入本地大模型、全球大模型服务',
      '#openpai-detail .open-feature-item:nth-child(2) .open-feature-title': '智能体开发',
      '#openpai-detail .open-feature-item:nth-child(2) .open-feature-desc': '拖拽式可视化开发，大幅降低 AI Agent 开发门槛',
      '#openpai-detail .open-feature-item:nth-child(3) .open-feature-title': '生产级赋能',
      '#openpai-detail .open-feature-item:nth-child(3) .open-feature-desc': '内置精准 RAG 能力，支持全AI Agent 全生命周期闭环',
      '#openpai-detail .open-feature-item:nth-child(4) .open-feature-title': '安全可控',
      '#openpai-detail .open-feature-item:nth-child(4) .open-feature-desc': '内容安全管控 + 企业级 LLMOps，合规运维无忧',
      // OpenChat 详情
      '#openchat-detail .open-detail-title': 'OpenChat',
      '#openchat-detail .open-detail-subtitle': '让你的电脑，成为 AI 办公助手',
      '#openchat-detail .open-detail-description': '开源免费的AI解决方案,保护您的数据安全,提供强大的文档处理和智能助手功能无需注册!即可开启您的大模型体验!!',
      '#openchat-detail .open-feature-item:nth-child(1) .open-feature-title': '多元兼容',
      '#openchat-detail .open-feature-item:nth-child(1) .open-feature-desc': '无缝接入多家大模型，统一体验无需切换',
      '#openchat-detail .open-feature-item:nth-child(2) .open-feature-title': '安全部署',
      '#openchat-detail .open-feature-item:nth-child(2) .open-feature-desc': '企业级安全架构，支持本地与私有云部署',
      '#openchat-detail .open-feature-item:nth-child(3) .open-feature-title': '实用插件',
      '#openchat-detail .open-feature-item:nth-child(3) .open-feature-desc': '丰富的插件生态支持,支持自定义插件开发',
      '#openchat-detail .open-feature-item:nth-child(4) .open-feature-title': '模型生态',
      '#openchat-detail .open-feature-item:nth-child(4) .open-feature-desc': '多样热门AI模型应用,实现自动优化和调参',
      '#openchat-detail .open-detail-btn-secondary span': 'gitee',
      '#openchat-detail .open-detail-section-title': '核心功能',
      // OpenStation 详情
      '#openstation-detail .open-detail-title': 'OpenStation',
      '#openstation-detail .open-detail-subtitle': '让大模型部署与管理更简单高效',
      '#openstation-detail .open-detail-description': '专为企业和开发者打造的一站式大模型部署与管理平台，帮助用户快速、便捷地实现大模型服务的部署与体验。覆盖从模型部署到服务高效使用的全场景需求，降低大模型落地门槛，让大模型部署更简单高效',
      '#openstation-detail .open-feature-item:nth-child(1) .open-feature-title': '简单易用',
      '#openstation-detail .open-feature-item:nth-child(1) .open-feature-desc': '简易页面化操作，支持模型一键下载与部署',
      '#openstation-detail .open-feature-item:nth-child(2) .open-feature-title': '灵活可扩展',
      '#openstation-detail .open-feature-item:nth-child(2) .open-feature-desc': '支持节点快速添加、扩容及管理，满足多样需求',
      '#openstation-detail .open-feature-item:nth-child(3) .open-feature-title': '高效管理',
      '#openstation-detail .open-feature-item:nth-child(3) .open-feature-desc': '用户权限控制与 API-Key 管理，保障协作与安全',
      '#openstation-detail .open-feature-item:nth-child(4) .open-feature-title': '负载均衡',
      '#openstation-detail .open-feature-item:nth-child(4) .open-feature-desc': '内置负载均衡机制，确保模型服务的稳定高效',
      '#openstation-detail .open-detail-btn-secondary span': 'gitee',
      '#openstation-detail .open-detail-section-title': '核心功能',
      // 详情页通用
      '.open-detail-btn-primary span': 'GitHub',
      '.open-detail-btn-secondary span': 'gitee',
      '.open-detail-section-title': '核心功能',
      '.copyright-text': 'Fastaistack - 智赋企业，算启新程'
    },

    en: {
      __lang: 'en',
      __title: 'OpenChat - Free & Open-Source AI Suite',
      __title_open: 'Fastaistack - Unleash the AI Era, Make Intelligence Accessible',

      // Top nav
      '.nav-logo .logo-text': 'OpenChat',
      '.nav-logo .logo-text[data-page="open"]': 'Fastaistack',
      '.nav-menu .community-btn': 'Community',
      '.nav-menu a.nav-link[href="#faq"]': 'FAQ',
      '.download-dropdown .download-btn': 'Download',

      // Download menu items
      '.download-menu a:nth-child(1) span': 'Windows',
      '.download-menu a:nth-child(2) span': 'Mac M series',
      '.download-menu a:nth-child(3) span': 'Mac (Intel)',

      // Hero
      '.hero-title h1': 'OpenChat',
      '.hero-description':
        'Free & open-source AI suite focused on data privacy, powerful document workflows, and smart assistants.\nNo sign-up required—start your LLM journey now!',
      '.download-buttons a:nth-child(1) span': 'Download for Windows',
      '.download-buttons a:nth-child(2) span': 'Download for Mac M series',
      '.download-buttons a:nth-child(3) span': 'Download for Mac (Intel)',

      // Tabs
      '.feature-nav .feature-nav-item[data-tab="compatibility"] span': 'Compatibility',
      '.feature-nav .feature-nav-item[data-tab="security"] span': 'Secure Deploy',
      '.feature-nav .feature-nav-item[data-tab="plugins"] span': 'Plugins',
      '.feature-nav .feature-nav-item[data-tab="models"] span': 'Models',

      // Compatibility content
      '#compatibility-content .content-title h1': 'OpenChat works with major cloud LLMs',
      '#compatibility-content .content-description':
        'Seamlessly connect OpenAI, DeepSeek, SiliconFlow and more—enjoy all model services without switching platforms',

      // Security content
      '#security-content .content-title h1': 'Enterprise-grade secure deployment',
      '#security-content .content-description':
        'Local or private-cloud deployment, end-to-end encrypted transport, fine-grained access control and audit logs for compliance',

      // Plugins content
      '#plugins-content .content-title h1': 'Practical plugin ecosystem',
      '#plugins-content .content-description':
        'Rich plugins for docs, code, and analytics. Build custom plugins and install from the marketplace in one click',

      // Models content
      '#models-content .content-title h1': 'Intelligent model applications',
      '#models-content .content-description':
        'Text, vision, and speech supported. Auto-tuning for optimal performance, plus fine-tuning and custom training',

      // Open-source page
      '.opensource-title h1': 'Open Source & Free',
      '.opensource-description':
        'OpenChat is open to the community. Use it for free, track progress on our repos, and reach us via community channels for support',
      '.opensource-grid .grid-section a:nth-child(1) span': 'GitHub',
      '.opensource-grid .grid-section a:nth-child(2) span': 'Gitee',
      // ✅ 按你的要求，将"小红书/Xiaohongshu"翻译为 "Red Book"
      '.opensource-grid .grid-section a:nth-child(3) span': 'Red Book',

      // FAQ
      '#faq .faq-title h1': 'FAQ',
      '.faq-list .faq-item:nth-child(1) .faq-question span': 'Does OpenChat collect my data?',
      '.faq-list .faq-item:nth-child(1) .faq-answer p':
        'We only count downloads for statistics. We do not collect any of your in-app data.',
      '.faq-list .faq-item:nth-child(2) .faq-question span': 'What are the system requirements?',
      '.faq-list .faq-item:nth-child(2) .faq-answer p:nth-child(1)':
        'Windows: 64-bit Windows 10/11 with at least 8 GB RAM.',
      '.faq-list .faq-item:nth-child(2) .faq-answer p:nth-child(2)':
        'Mac: Any macOS on Apple Silicon; or macOS 12.5+ for Intel-based Macs.',
      '.faq-list .faq-item:nth-child(3) .faq-question span': 'How can I give feedback or get help?',
      '.faq-list .faq-item:nth-child(3) .faq-answer p':
        'Leave an issue on our repos, DM us on Red Book, or scan the QR code to join our user group.',
      '.faq-list .faq-item:nth-child(4) .faq-question span': 'How is OpenChat priced?',
      '.faq-list .faq-item:nth-child(4) .faq-answer p':
        'OpenChat is free and requires no sign-up. Some features rely on third-party APIs (cloud LLMs, web search) that may incur provider fees.',
      '.faq-list .faq-item:nth-child(5) .faq-question span': 'What scenarios is OpenChat good for?',
      '.faq-list .faq-item:nth-child(5) .faq-answer p':
        'Use local 0.5B–7B models for private simple tasks, or connect trillion-parameter cloud LLMs for complex work. Assistants generate styled content, and AI Translate supports your documents.',

      // Footer
      '.copyright p': 'OpenChat — Private AI Assistant, Open Source',

      // QR modal
      '#qr-modal h3': 'Join the Community',
      '#qr-modal p': 'Scan the QR code to join\nGet the latest news and support',
      '#qr-modal button': 'Close',

      // Open.html homepage
      '.open-hero-title .open-hero-title-text': 'Fastaistack',
      '.open-hero-title .open-hero-description': 'Unleash the AI Era, Make Intelligence Accessible',
      '.open-product-card:nth-child(1) .open-card-title': 'OpenPAI',
      '.open-product-card:nth-child(1) .open-card-description': 'Build & Scale AI Agents, Production-Ready',
      '.open-product-card:nth-child(1) .open-card-btn': 'Learn More →',
      '.open-product-card:nth-child(2) .open-card-title': 'OpenChat',
      '.open-product-card:nth-child(2) .open-card-description': 'Turn your computer into an AI office assistant',
      '.open-product-card:nth-child(2) .open-card-btn': 'Learn More →',
      '.open-product-card:nth-child(3) .open-card-title': 'OpenStation',
      '.open-product-card:nth-child(3) .open-card-description': 'One-stop deployment and management for large models',
      '.open-product-card:nth-child(3) .open-card-btn': 'Learn More →',
      // OpenPAI detail
      '#openpai-detail .open-detail-title': 'OpenPAI',
      '#openpai-detail .open-detail-subtitle': 'Build & Scale AI Agents, Production-Ready',
      '#openpai-detail .open-detail-description': 'A lightweight, easy-to-use yet robust production-grade AI Agent development platform. Without a complex tech stack, users can rapidly access large model services, construct LLM workflows, and efficiently build AI Agent applications via its visual interface. It fully supports local, enterprise-server, and cloud-native model service access, featuring an intuitive user interface that significantly reduces AI Agent development thresholds and elevates overall efficiency',
      '#openpai-detail .open-feature-item:nth-child(1) .open-feature-title': 'Large Model Integration',
      '#openpai-detail .open-feature-item:nth-child(1) .open-feature-desc': 'One-click seamless access to local & global large models',
      '#openpai-detail .open-feature-item:nth-child(2) .open-feature-title': 'AI Agent Development',
      '#openpai-detail .open-feature-item:nth-child(2) .open-feature-desc': 'Drag-and-drop visual development, lower AI Agent barriers drastically',
      '#openpai-detail .open-feature-item:nth-child(3) .open-feature-title': 'Enterprise-ready',
      '#openpai-detail .open-feature-item:nth-child(3) .open-feature-desc': 'Built-in precise RAG, covering the full AI Agent lifecycle',
      '#openpai-detail .open-feature-item:nth-child(4) .open-feature-title': 'Security & Controllability',
      '#openpai-detail .open-feature-item:nth-child(4) .open-feature-desc': 'Content security + enterprise-grade LLMOps, worry-free compliant O&M',
      '#openpai-detail .open-detail-btn-secondary span': 'gitee',
      '#openpai-detail .open-detail-section-title': 'Core Features',
      // OpenChat detail
      '#openchat-detail .open-detail-title': 'OpenChat',
      '#openchat-detail .open-detail-subtitle': 'Built around data security, empowering document processing and intelligent assistants',
      '#openchat-detail .open-detail-description': 'An open and free AI solution that safeguards your data while delivering powerful document processing and intelligent assistant capabilities—no registration required',
      '#openchat-detail .open-feature-item:nth-child(1) .open-feature-title': 'Flexible Compatibility',
      '#openchat-detail .open-feature-item:nth-child(1) .open-feature-desc': 'Seamless access to multiple AI models with a unified experience',
      '#openchat-detail .open-feature-item:nth-child(2) .open-feature-title': 'Secure Deployment',
      '#openchat-detail .open-feature-item:nth-child(2) .open-feature-desc': 'Enterprise-grade security architecture with on-premises and private cloud deployment',
      '#openchat-detail .open-feature-item:nth-child(3) .open-feature-title': 'Practical Plugins',
      '#openchat-detail .open-feature-item:nth-child(3) .open-feature-desc': 'A rich plugin ecosystem with support for custom plugin development',
      '#openchat-detail .open-feature-item:nth-child(4) .open-feature-title': 'Model Ecosystem',
      '#openchat-detail .open-feature-item:nth-child(4) .open-feature-desc': 'Popular AI models with built-in optimization and tuning',
      '#openchat-detail .open-detail-btn-secondary span': 'gitee',
      '#openchat-detail .open-detail-section-title': 'Core Features',
      // OpenStation detail
      '#openstation-detail .open-detail-title': 'OpenStation',
      '#openstation-detail .open-detail-subtitle': 'One-stop deployment and management for large models.',
      '#openstation-detail .open-detail-description': 'OpenStation is a one-stop platform for enterprises and developers to deploy and manage large models, enabling fast and effortless model deployment and usage across the full lifecycle—making large model adoption simpler and more efficient',
      '#openstation-detail .open-feature-item:nth-child(1) .open-feature-title': 'Easy to Use',
      '#openstation-detail .open-feature-item:nth-child(1) .open-feature-desc': 'Simple, visual operations enable one-click deployment of large model services',
      '#openstation-detail .open-feature-item:nth-child(2) .open-feature-title': 'Flexible and Scalable',
      '#openstation-detail .open-feature-item:nth-child(2) .open-feature-desc': 'Flexible scaling significantly improves compute resource utilization',
      '#openstation-detail .open-feature-item:nth-child(3) .open-feature-title': 'Efficient Management',
      '#openstation-detail .open-feature-item:nth-child(3) .open-feature-desc': 'Access control and API key management for secure collaboration',
      '#openstation-detail .open-feature-item:nth-child(4) .open-feature-title': 'Load Balancing',
      '#openstation-detail .open-feature-item:nth-child(4) .open-feature-desc': 'Built-in load balancing ensures stable and efficient model services',
      '#openstation-detail .open-detail-btn-secondary span': 'gitee',
      '#openstation-detail .open-detail-section-title': 'Core Features',
      // Detail pages common
      '.open-detail-btn-primary span': 'GitHub',
      '.open-detail-btn-secondary span': 'gitee',
      '.open-detail-section-title': 'Core Features',
      '.copyright-text': 'Fastaistack - Unleash the AI Era, Make Intelligence Accessible'
    }
  };

  function applyLang(lang) {
    const dict = MAP[lang] || MAP.zh;

    // 文档级属性
    document.documentElement.setAttribute('lang', dict.__lang);
    // 根据当前页面设置标题
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'Open.html') {
      document.title = dict.__title_open || dict.__title;
    } else {
      document.title = dict.__title;
    }

    // 批量替换文本
    Object.entries(dict).forEach(([sel, val]) => {
      if (sel.startsWith('__')) return;
      setSmartText(sel, val);
    });

    // 滑块按钮状态（#lang-toggle 是一个 div）
    const btn = $('#lang-toggle');
    if (btn) {
      if (lang === 'en') btn.classList.add('active');
      else btn.classList.remove('active');
    }
  }

  // 初始化：从存储读取语言
  const current = localStorage.getItem(STORAGE_KEY) || 'zh';
  applyLang(current);

  // 绑定切换事件
  const toggle = $('#lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const cur = localStorage.getItem(STORAGE_KEY) || 'zh';
      const next = (cur === 'zh') ? 'en' : 'zh';
      localStorage.setItem(STORAGE_KEY, next);
      applyLang(next);
    });
  }
})();
