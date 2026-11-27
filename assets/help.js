(function () {
  "use strict";

  var STORAGE = {
    recent: "squirrel.help.recent",
    feedback: "squirrel.help.feedback"
  };

  //: 语言记忆键与路由前缀：中文 ``#/4.1``，英文 ``#/en/4.1``。
  var LANG_KEY = "helpLang";

  var I18N = {
    zh: {
      siteTitle: "松鼠资产管家帮助",
      brand: "松鼠资产管家帮助",
      tocHead: "目录",
      searchPlaceholder: "搜索功能、设置、命令…（回车搜索）",
      searchAria: "搜索帮助",
      menuToggleAria: "显示或隐藏目录",
      tocAria: "帮助目录",
      homeAria: "帮助主页",
      searchViewAria: "搜索结果",
      breadcrumbAria: "面包屑",
      pageTocAria: "本页内容",
      homeDesc: "从安装、资产库、导入导出到 AI 工具与 Maya 集成，按工作流查，也可以直接搜索。",
      homeMeta: "Maya 2022 – 2027 · 插件版 / 独立版 / EXE",
      homeStart: "从这里开始",
      recent: "最近访问",
      onThisPage: "本页内容",
      helpHome: "帮助主页",
      relatedTopics: "相关主题",
      prevPage: "上一篇",
      nextPage: "下一篇",
      feedbackQ: "此页是否有帮助？",
      feedbackYes: "有帮助",
      feedbackNo: "没帮助",
      feedbackThanks: "已记录，谢谢反馈。",
      feedbackMarkedYes: "你标记过：有帮助",
      feedbackMarkedNo: "你标记过：没帮助",
      searchTitle: "搜索结果",
      searchNoQuery: "（未输入关键词）",
      searching: "正在搜索…",
      results: "找到 {n} 条结果",
      resultsShown: "找到 {total} 条结果（显示前 {shown} 条）",
      elapsed: "用时 {sec} 秒",
      modeHybrid: "语义 + 词法",
      modeLexical: "词法检索",
      semanticUnavailable: "语义暂不可用",
      filtered: "筛选后 {n} 条",
      facetAll: "全部",
      facetType: "内容类型",
      facetSection: "所属章节",
      clearFilters: "清除筛选",
      searchHint: "输入关键词后回车搜索。可以搜功能名、菜单名、按钮名或报错现象，例如「导出资产」「回收站」「授权过期」。",
      searchNoMatch: "没有找到匹配的帮助页，试试更短的关键词或换个说法。",
      searchIndexMissing: "搜索索引尚未生成，请在项目根执行 python tools/build_help.py。",
      notFound: "找不到这个帮助页面",
      notFoundId: "页面 ID：{id}",
      backHome: "返回帮助主页",
      loadFailed: "帮助目录加载失败",
      pageLoadFailed: "页面加载失败",
      buildHint: "请在项目根执行",
      fallbackNote: "This page isn't translated yet — showing the Chinese original.",
      fallbackSearchZh: "",
      enNoHit: "",
      langAria: "切换语言",
      typeTask: "页面",
      typeConcept: "概念",
      typeReference: "参考",
      typeTroubleshooting: "排错",
      typeCommand: "命令",
      typeSection: "章节",
      homeCards: [
        { title: "新特性", desc: "查看当前版本值得关注的变化。", target: "7.5", icon: "新" },
        { title: "5 分钟上手", desc: "从外部模型到导入场景，跑通第一个闭环。", target: "3.4.1", icon: "5" },
        { title: "界面概述", desc: "认识主窗口的工具栏、三栏与面板。", target: "3.1.1", icon: "界" },
        { title: "常用工作流", desc: "导入、整理、导出与使用资产。", target: "3.4.3", icon: "流" },
        { title: "快捷键", desc: "一页查清所有快捷键。", target: "5.6", icon: "键" },
        { title: "命令参考", desc: "全部命令的名称、参数与风险级别。", target: "5.1", icon: "令" },
        { title: "常见问题", desc: "按症状查找安装、导入、AI 与崩溃问题。", target: "6", icon: "问" },
        { title: "菜单详解", desc: "所有菜单、按钮、右键项与弹窗的词典。", target: "8.1", icon: "菜" },
        { title: "支持与反馈", desc: "如何提交问题与反馈。", target: "3.5.3", icon: "支" }
      ]
    },
    en: {
      siteTitle: "Squirrel Asset Manager Help",
      brand: "Squirrel Asset Manager Help",
      tocHead: "Contents",
      searchPlaceholder: "Search features, settings, commands… (Enter)",
      searchAria: "Search help",
      menuToggleAria: "Show or hide contents",
      tocAria: "Help contents",
      homeAria: "Help home",
      searchViewAria: "Search results",
      breadcrumbAria: "Breadcrumb",
      pageTocAria: "On this page",
      homeDesc: "Installation, asset library, import and export, AI tools and Maya integration — browse by workflow or search directly.",
      homeMeta: "Maya 2022 – 2027 · Plug-in / Standalone / EXE",
      homeStart: "Start here",
      recent: "Recently visited",
      onThisPage: "On this page",
      helpHome: "Help home",
      relatedTopics: "Related topics",
      prevPage: "Previous",
      nextPage: "Next",
      feedbackQ: "Was this page helpful?",
      feedbackYes: "Yes",
      feedbackNo: "No",
      feedbackThanks: "Recorded. Thanks for the feedback.",
      feedbackMarkedYes: "You marked: helpful",
      feedbackMarkedNo: "You marked: not helpful",
      searchTitle: "Search results",
      searchNoQuery: "(no query)",
      searching: "Searching…",
      results: "{n} result(s)",
      resultsShown: "{total} result(s), showing the first {shown}",
      elapsed: "{sec}s",
      modeHybrid: "semantic + lexical",
      modeLexical: "lexical",
      semanticUnavailable: "semantic search unavailable",
      filtered: "{n} after filtering",
      facetAll: "All",
      facetType: "Content type",
      facetSection: "Section",
      clearFilters: "Clear filters",
      searchHint: "Type a keyword and press Enter. You can search feature names, menu items, buttons or error symptoms, for example “export asset”, “recycle bin”, “license expired”.",
      searchNoMatch: "No help page matches. Try a shorter keyword or a different wording.",
      searchIndexMissing: "The search index is missing. Run python tools/build_help.py in the project root.",
      notFound: "Help page not found",
      notFoundId: "Page ID: {id}",
      backHome: "Back to help home",
      loadFailed: "Failed to load the help contents",
      pageLoadFailed: "Failed to load this page",
      buildHint: "Run",
      fallbackNote: "This page isn't translated yet — showing the Chinese original.",
      fallbackSearchZh: "Search the Chinese content",
      enNoHit: "No English page matches. You can search the Chinese content instead.",
      langAria: "Switch language",
      typeTask: "Page",
      typeConcept: "Concept",
      typeReference: "Reference",
      typeTroubleshooting: "Troubleshooting",
      typeCommand: "Command",
      typeSection: "Section",
      homeCards: [
        { title: "What's new", desc: "Notable changes in the current version.", target: "7.5", icon: "新" },
        { title: "5-minute start", desc: "From an external model to your first import.", target: "3.4.1", icon: "5" },
        { title: "Interface overview", desc: "Toolbar, three columns and panels of the main window.", target: "3.1.1", icon: "界" },
        { title: "Common workflows", desc: "Import, organize, export and use assets.", target: "3.4.3", icon: "流" },
        { title: "Shortcuts", desc: "Every shortcut on one page.", target: "5.6", icon: "键" },
        { title: "Command reference", desc: "Names, parameters and risk levels of all commands.", target: "5.1", icon: "令" },
        { title: "FAQ", desc: "Find install, import, AI and crash issues by symptom.", target: "6", icon: "问" },
        { title: "Menu reference", desc: "Dictionary of every menu, button, context item and dialog.", target: "8.1", icon: "菜" },
        { title: "Support", desc: "How to report issues and send feedback.", target: "3.5.3", icon: "支" }
      ]
    }
  };

  var state = {
    toc: null,
    index: [],
    indexEn: [],
    lang: "zh",
    nodes: new Map(),
    order: [],
    groupEls: new Map(),
    currentId: "",
    search: null,
    searchToken: 0,
    tocObserver: null
  };

  var el = {};
  var pageRequest = 0;

  function $(id) {
    return document.getElementById(id);
  }

  function t(key, vars) {
    var table = I18N[state.lang] || I18N.zh;
    var text = table[key];
    if (text === undefined) {
      text = I18N.zh[key];
    }
    if (typeof text !== "string") {
      return text;
    }
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.split("{" + name + "}").join(String(vars[name]));
      });
    }
    return text;
  }

  function typeLabel(type) {
    var map = {
      task: "typeTask",
      concept: "typeConcept",
      reference: "typeReference",
      troubleshooting: "typeTroubleshooting",
      command: "typeCommand",
      section: "typeSection"
    };
    return t(map[type] || "typeTask");
  }

  function nodeTitle(node) {
    if (!node) {
      return "";
    }
    if (state.lang === "en" && node.title_en) {
      return node.title_en;
    }
    return node.title;
  }

  function nodeGoal(node) {
    if (!node) {
      return "";
    }
    if (state.lang === "en" && node.goal_en) {
      return node.goal_en;
    }
    return node.goal || "";
  }

  function isTranslated(node) {
    return state.lang === "en" && !!(node && node.html_en);
  }

  function langPrefix(lang) {
    return (lang || state.lang) === "en" ? "en/" : "";
  }

  function routeUrl(id, lang) {
    return "#/" + langPrefix(lang) + id;
  }

  function detectLang() {
    var stored = safeGet(LANG_KEY, "");
    if (stored === "en" || stored === "zh") {
      return stored;
    }
    return "zh";
  }

  /** 宿主传入的语言（``?lang=en|zh``）：插件按当前 UI 语言打开帮助时强制首页/正文语言。 */
  function queryLang() {
    try {
      var value = new URLSearchParams(location.search).get("lang");
      return value === "en" || value === "zh" ? value : "";
    } catch (err) {
      return "";
    }
  }

  /** 首屏应用 ``?lang=``：写进状态与本机记忆，并把地址换成带语言前缀的 hash（之后切语言/深链照常）。 */
  function applyForcedLang() {
    var forced = queryLang();
    if (!forced) {
      return;
    }
    state.lang = forced;
    safeSet(LANG_KEY, forced);
    applyShell();
    var raw = decodeURIComponent(location.hash || "").replace(/^#\/?/, "").trim();
    var target = "#/" + langPrefix(forced) + stripLang(raw);
    try {
      history.replaceState(null, "", location.pathname + target);
    } catch (err) {
      location.hash = target;
    }
  }

  function hashLang(raw) {
    return raw.indexOf("en/") === 0 ? "en" : "zh";
  }

  function stripLang(raw) {
    return raw.indexOf("en/") === 0 ? raw.slice(3) : raw;
  }

  function safeGet(key, fallback) {
    try {
      var raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      /* 本地存储不可用时不影响浏览 */
    }
  }

  function normalizeResult(item) {
    var out = Object.assign({}, item);
    if (!out.type && String(out.id || "").indexOf("cmd:") === 0) {
      out.type = "command";
    }
    if (!out.url) {
      if (out.type === "command" && out.page) {
        out.url = "#/" + out.page + "?cmd=" + String(out.id || "").replace(/^cmd:/, "");
      } else {
        out.url = "#/" + (out.id || "");
      }
    }
    return out;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[ch];
    });
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function highlight(text, query) {
    var safe = escapeHtml(text);
    if (!query) {
      return safe;
    }
    return safe.replace(new RegExp(escapeRegExp(query), "gi"), function (match) {
      return "<mark>" + match + "</mark>";
    });
  }

  function cssEscape(value) {
    if (window.CSS && window.CSS.escape) {
      return window.CSS.escape(value);
    }
    return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  // 本地帮助服务（127.0.0.1 / localhost）内容随时会改，保持 no-store 保证即时刷新；
  // 公网静态托管（GitHub Pages 等）改用 no-cache：每次带 ETag 条件请求，命中 304，
  // 首屏几乎不多耗流量。
  var LOCAL_HOSTS = { "127.0.0.1": 1, "localhost": 1, "::1": 1 };

  function fetchJson(url) {
    var cacheMode = LOCAL_HOSTS[location.hostname] ? "no-store" : "no-cache";
    return fetch(url, { cache: cacheMode }).then(function (response) {
      if (!response.ok) {
        throw new Error(url + " 加载失败（HTTP " + response.status + "）");
      }
      return response.json();
    });
  }

  /* ── 初始化 ─────────────────────────────────────────── */

  function init() {
    el.menuToggle = $("menuToggle");
    el.sidebar = $("sidebar");
    el.tocTree = $("tocTree");
    el.searchInput = $("searchInput");
    el.searchView = $("searchView");
    el.homeView = $("homeView");
    el.docView = $("docView");
    el.breadcrumb = $("breadcrumb");
    el.article = $("article");
    el.pageToc = $("pageToc");
    el.prevLink = $("prevLink");
    el.nextLink = $("nextLink");
    el.feedbackStatus = $("feedbackStatus");
    el.langSwitch = $("langSwitch");
    el.brandText = $("brandText");
    el.sidebarHead = $("sidebarHead");
    el.pageTocTitle = $("pageTocTitle");
    el.feedbackQuestion = $("feedbackQuestion");
    el.feedbackYes = $("feedbackYes");
    el.feedbackNo = $("feedbackNo");

    // 旧版本会把目录展开状态写进本地存储；清掉残留，导航栏每次打开都从全部收起开始。
    try {
      window.localStorage.removeItem("squirrel.help.expanded");
    } catch (err) {
      /* 本地存储不可用时忽略 */
    }

    var raw = decodeURIComponent(location.hash || "").replace(/^#\/?/, "").trim();
    state.lang = raw ? hashLang(raw) : detectLang();
    applyShell();

    bindEvents();

    // 首屏只取目录（toc.json）：搜索索引（中英各 1.6–1.9 MB）改到「用到再取」，
    // 见 ensureIndex()；搜索框获得焦点时会并行预热当前语言那份。
    fetchJson("toc.json")
      .then(function (toc) {
        state.toc = toc;
        buildMaps(state.toc.sections || []);
        applyForcedLang();
        buildSidebar();
        renderHome();
        route();
      })
      .catch(function (err) {
        el.homeView.hidden = false;
        el.docView.hidden = true;
        el.homeView.innerHTML =
          '<div class="empty-state"><h1>' + escapeHtml(t("loadFailed")) + "</h1>" +
          "<p>" + escapeHtml(err.message) + "</p>" +
          "<p>" + escapeHtml(t("buildHint")) + " <code>python tools/build_help.py</code>，" +
          "<code>python tools/serve_help.py</code>.</p></div>";
      });
  }

  /** 刷新外壳文案（顶栏 / 侧栏 / 页内目录 / 反馈条）与语言按钮高亮。 */
  function applyShell() {
    var zh = state.lang !== "en";
    document.documentElement.lang = zh ? "zh-CN" : "en";
    if (el.brandText) {
      el.brandText.textContent = t("brand");
    }
    if (el.searchInput) {
      el.searchInput.placeholder = t("searchPlaceholder");
      el.searchInput.setAttribute("aria-label", t("searchAria"));
    }
    if (el.sidebarHead) {
      el.sidebarHead.textContent = t("tocHead");
    }
    if (el.pageTocTitle) {
      el.pageTocTitle.textContent = t("onThisPage");
    }
    if (el.feedbackQuestion) {
      el.feedbackQuestion.textContent = t("feedbackQ");
    }
    if (el.feedbackYes) {
      el.feedbackYes.textContent = t("feedbackYes");
    }
    if (el.feedbackNo) {
      el.feedbackNo.textContent = t("feedbackNo");
    }
    if (el.langSwitch) {
      el.langSwitch.setAttribute("aria-label", t("langAria"));
      Array.prototype.forEach.call(el.langSwitch.querySelectorAll("button"), function (button) {
        var active = button.getAttribute("data-lang") === state.lang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }
    var ariaTargets = [
      ["menuToggle", "menuToggleAria"],
      ["sidebar", "tocAria"],
      ["homeView", "homeAria"],
      ["searchView", "searchViewAria"],
      ["breadcrumb", "breadcrumbAria"]
    ];
    ariaTargets.forEach(function (pair) {
      var node = document.getElementById(pair[0]);
      if (node) {
        node.setAttribute("aria-label", t(pair[1]));
      }
    });
    if (el.pageToc && el.pageToc.parentElement) {
      el.pageToc.parentElement.setAttribute("aria-label", t("pageTocAria"));
    }
  }

  /** 切语言：记住选择，保持当前页面，只换路由前缀。 */
  function switchLang(next) {
    if (next !== "zh" && next !== "en") {
      return;
    }
    state.lang = next;
    safeSet(LANG_KEY, next);
    applyShell();
    buildSidebar();
    var raw = decodeURIComponent(location.hash || "").replace(/^#\/?/, "").trim();
    var body = stripLang(raw);
    var target = "#/" + langPrefix() + body;
    if (location.hash === target) {
      route();
    } else {
      location.hash = target;
    }
  }

  function bindEvents() {
    el.menuToggle.addEventListener("click", function () {
      var open = !document.body.classList.contains("sidebar-open");
      document.body.classList.toggle("sidebar-open", open);
      el.menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!document.body.classList.contains("sidebar-open")) {
        return;
      }
      if (el.sidebar.contains(event.target) || el.menuToggle.contains(event.target)) {
        return;
      }
      closeSidebar();
    });

    window.addEventListener("hashchange", route);

    // 用户把光标放进搜索框 = 大概率要搜：并行把当前语言的词法索引取回来（不阻塞首屏）。
    el.searchInput.addEventListener("focus", function () {
      ensureIndex(state.lang);
    });

    el.searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        runSearch(el.searchInput.value);
      } else if (event.key === "Escape") {
        el.searchInput.value = "";
        el.searchInput.blur();
      }
    });

    el.tocTree.addEventListener("keydown", function (event) {
      var row = event.target.closest ? event.target.closest(".tree-row") : null;
      if (!row) {
        return;
      }
      var group = row.parentElement;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (group.getAttribute("data-open") !== "true") {
          setGroupOpen(group, true);
        } else {
          var first = group.querySelector(".tree-children .tree-row, .tree-children .tree-leaf");
          if (first) {
            first.focus();
          }
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (group.getAttribute("data-open") === "true") {
          setGroupOpen(group, false);
        } else {
          var parent = group.parentElement.closest(".tree-group");
          if (parent) {
            var parentRow = parent.querySelector(":scope > .tree-row");
            if (parentRow) {
              parentRow.focus();
            }
          }
        }
      }
    });

    document.querySelector(".feedback").addEventListener("click", function (event) {
      var button = event.target.closest("button[data-feedback]");
      if (!button || !state.currentId) {
        return;
      }
      var all = safeGet(STORAGE.feedback, {});
      all[state.currentId] = button.getAttribute("data-feedback");
      safeSet(STORAGE.feedback, all);
      el.feedbackStatus.textContent = t("feedbackThanks");
    });

    if (el.langSwitch) {
      el.langSwitch.addEventListener("click", function (event) {
        var button = event.target.closest("button[data-lang]");
        if (!button) {
          return;
        }
        switchLang(button.getAttribute("data-lang"));
      });
    }
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    el.menuToggle.setAttribute("aria-expanded", "false");
  }

  /* ── 目录 ───────────────────────────────────────────── */

  function buildMaps(sections) {
    state.nodes.clear();
    state.order = [];
    var walk = function (nodes, ancestors) {
      nodes.forEach(function (node) {
        state.nodes.set(node.id, { node: node, ancestors: ancestors });
        if (node.children && node.children.length) {
          walk(node.children, ancestors.concat([node]));
        } else {
          state.order.push(node.id);
        }
      });
    };
    walk(sections, []);
  }

  function buildSidebar() {
    var root = document.createElement("div");
    (state.toc.sections || []).forEach(function (node) {
      root.appendChild(buildTreeNode(node, 1));
    });
    el.tocTree.replaceChildren(root);
  }

  function buildTreeNode(node, level) {
    var hasChildren = node.children && node.children.length;
    var wrap = document.createElement("div");
    wrap.className = "tree-group tree-level-" + Math.min(level, 4);
    wrap.dataset.id = node.id;

    if (!hasChildren) {
      var link = document.createElement("a");
      link.className = "tree-leaf";
      link.href = routeUrl(node.id);
      link.dataset.id = node.id;
      link.textContent = nodeTitle(node);
      link.addEventListener("click", closeSidebar);
      wrap.appendChild(link);
      return wrap;
    }

    var row = document.createElement("button");
    row.type = "button";
    row.className = "tree-row";
    row.dataset.id = node.id;
    row.setAttribute("aria-expanded", "false");

    var arrow = document.createElement("span");
    arrow.className = "tree-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "›";

    var label = document.createElement("span");
    label.className = "tree-label";
    label.textContent = nodeTitle(node);

    row.appendChild(arrow);
    row.appendChild(label);
    row.addEventListener("click", function () {
      toggleGroup(node.id);
      navigate(node.id);
    });
    arrow.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleGroup(node.id);
    });

    var children = document.createElement("div");
    children.className = "tree-children";
    node.children.forEach(function (child) {
      children.appendChild(buildTreeNode(child, level + 1));
    });

    wrap.appendChild(row);
    wrap.appendChild(children);
    state.groupEls.set(node.id, wrap);
    return wrap;
  }

  function setGroupOpen(wrap, open) {
    if (!wrap) {
      return;
    }
    wrap.setAttribute("data-open", open ? "true" : "false");
    var row = wrap.querySelector(":scope > .tree-row");
    if (row) {
      row.setAttribute("aria-expanded", open ? "true" : "false");
    }
  }

  function toggleGroup(id) {
    var wrap = state.groupEls.get(id);
    if (!wrap) {
      return;
    }
    setGroupOpen(wrap, wrap.getAttribute("data-open") !== "true");
  }

  function expandTo(ancestors) {
    ancestors.forEach(function (ancestor) {
      if (ancestor.children && ancestor.children.length) {
        var wrap = state.groupEls.get(ancestor.id);
        if (wrap) {
          setGroupOpen(wrap, true);
        }
      }
    });
  }

  function markActive(id) {
    document.querySelectorAll(".tree-row.is-active, .tree-leaf.is-active").forEach(function (node) {
      node.classList.remove("is-active");
    });
    if (!id) {
      return;
    }
    var targets = document.querySelectorAll(
      '.tree-row[data-id="' + cssEscape(id) + '"], .tree-leaf[data-id="' + cssEscape(id) + '"]'
    );
    targets.forEach(function (node) {
      node.classList.add("is-active");
    });
  }

  /* ── 路由 ───────────────────────────────────────────── */

  function navigate(id) {
    var target = routeUrl(id);
    if (location.hash === target) {
      route();
    } else {
      location.hash = target;
    }
  }

  function runSearch(rawQuery) {
    var query = String(rawQuery || "").trim();
    if (!query) {
      return;
    }
    var target = "#/" + langPrefix() + "search?q=" + encodeURIComponent(query);
    if (location.hash === target) {
      route();
    } else {
      location.hash = target;
    }
  }

  function route() {
    var raw = decodeURIComponent(location.hash || "").replace(/^#\/?/, "").trim();
    var lang = raw ? hashLang(raw) : state.lang;
    if (lang !== state.lang) {
      state.lang = lang;
      applyShell();
      buildSidebar();
    }
    raw = stripLang(raw);
    if (!raw) {
      renderHome();
      return;
    }
    var split = raw.indexOf("?");
    var pageId = split >= 0 ? raw.slice(0, split) : raw;
    var query = split >= 0 ? raw.slice(split + 1) : "";
    var params = new URLSearchParams(query);
    if (pageId === "search") {
      renderSearchPage(params.get("q") || "");
      return;
    }
    var info = state.nodes.get(pageId);
    if (!info) {
      renderNotFound(pageId);
      return;
    }
    if (info.node.children && info.node.children.length) {
      renderGroup(pageId, info);
    } else {
      renderPage(pageId, info, params);
    }
  }

  function showDoc() {
    el.homeView.hidden = true;
    el.searchView.hidden = true;
    el.docView.hidden = false;
  }

  function showHome() {
    el.docView.hidden = true;
    el.searchView.hidden = true;
    el.homeView.hidden = false;
  }

  function showSearch() {
    el.homeView.hidden = true;
    el.docView.hidden = true;
    el.searchView.hidden = false;
  }

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  /* ── 主页 ───────────────────────────────────────────── */

  function renderHome() {
    pageRequest += 1;
    state.currentId = "";
    showHome();
    clearPageToc();
    markActive("");
    document.title = t("siteTitle");

    var children = [];
    var hero = document.createElement("header");
    hero.className = "hero";
    hero.innerHTML =
      "<h1>" + escapeHtml(t("siteTitle")) + "</h1>" +
      "<p>" + escapeHtml(t("homeDesc")) + "</p>" +
      '<div class="hero-meta">' + escapeHtml(t("homeMeta")) + "</div>";
    children.push(hero);

    var cardsTitle = document.createElement("h2");
    cardsTitle.className = "home-section-title";
    cardsTitle.textContent = t("homeStart");
    children.push(cardsTitle);

    var grid = document.createElement("div");
    grid.className = "card-grid";
    t("homeCards").forEach(function (card) {
      var link = document.createElement("a");
      link.className = "home-card";
      link.href = routeUrl(card.target);
      link.innerHTML =
        '<span class="card-icon" aria-hidden="true">' + escapeHtml(card.icon) + "</span>" +
        '<span class="card-body">' +
        '<span class="card-title">' + escapeHtml(card.title) + "</span>" +
        '<span class="card-desc">' + escapeHtml(card.desc) + "</span>" +
        "</span>";
      grid.appendChild(link);
    });
    children.push(grid);

    var recent = safeGet(STORAGE.recent, []);
    if (recent.length) {
      var recentTitle = document.createElement("h2");
      recentTitle.className = "home-section-title";
      recentTitle.textContent = t("recent");
      children.push(recentTitle);

      var list = document.createElement("ul");
      list.className = "recent-list";
      recent.forEach(function (id) {
        var info = state.nodes.get(id);
        if (!info) {
          return;
        }
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = routeUrl(id);
        link.textContent = nodeTitle(info.node);
        item.appendChild(link);
        list.appendChild(item);
      });
      children.push(list);
    }

    el.homeView.replaceChildren.apply(el.homeView, children);
    closeSidebar();
    scrollTop();
  }

  /* ── 分组页（只有目录，没有正文文件） ───────────────── */

  function renderGroup(id, info) {
    var token = ++pageRequest;
    state.currentId = id;
    showDoc();
    clearPageToc();
    recordRecent(id);

    var node = info.node;
    el.breadcrumb.replaceChildren();
    renderBreadcrumb(info.ancestors, node);
    el.article.replaceChildren();

    var title = document.createElement("h1");
    title.className = "page-title";
    title.textContent = nodeTitle(node);
    el.article.appendChild(title);

    var goalText = nodeGoal(node);
    if (goalText) {
      var lead = document.createElement("p");
      lead.className = "page-lead";
      lead.textContent = goalText;
      el.article.appendChild(lead);
    }

    // 分组正文（手写 body + 自动生成内容）放在章节说明之后、子项列表之前
    var bodyHost = null;
    var bodySource = state.lang === "en" && node.html_en ? node.html_en : node.html;
    if (bodySource) {
      if (state.lang === "en" && !node.html_en) {
        el.article.appendChild(buildFallbackBanner());
      }
      bodyHost = document.createElement("div");
      bodyHost.className = "page-body generated-body";
      el.article.appendChild(bodyHost);
    }

    var list = document.createElement("ul");
    list.className = "group-list";
    node.children.forEach(function (child) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = routeUrl(child.id);
      link.textContent = nodeTitle(child);
      item.appendChild(link);
      var childGoal = nodeGoal(child);
      if (childGoal) {
        var desc = document.createElement("p");
        desc.textContent = childGoal;
        item.appendChild(desc);
      }
      list.appendChild(item);
    });
    el.article.appendChild(list);

    // 分组页可以挂正文与自动生成内容（如 4.6.1 快捷工具索引、4.8.1 设置页签表）
    if (bodySource && bodyHost) {
      fetch(bodySource, { cache: "no-store" })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP " + response.status);
          }
          return response.text();
        })
        .then(function (html) {
          if (token !== pageRequest || !bodyHost) {
            return;
          }
          bodyHost.innerHTML = html;
          localizeLinks(bodyHost);
        })
        .catch(function () {
          /* 分组正文加载失败不影响章节导航 */
        });
    }

    el.prevLink.hidden = true;
    el.nextLink.hidden = true;
    document.querySelector(".feedback").hidden = true;

    markActive(id);
    expandTo(info.ancestors);
    document.title = nodeTitle(node) + " - " + t("siteTitle");
    closeSidebar();
    scrollTop();
  }

  /* ── 正文页 ─────────────────────────────────────────── */

  function renderPage(id, info, params) {
    var node = info.node;
    var token = ++pageRequest;
    var translated = isTranslated(node);
    state.currentId = id;
    showDoc();
    clearPageToc();
    el.prevLink.hidden = true;
    el.nextLink.hidden = true;
    el.article.replaceChildren();
    recordRecent(id);

    renderBreadcrumb(info.ancestors, node);
    markActive(id);
    expandTo(info.ancestors);
    document.querySelector(".feedback").hidden = false;
    el.feedbackStatus.textContent = "";
    var saved = safeGet(STORAGE.feedback, {})[id];
    if (saved) {
      el.feedbackStatus.textContent = saved === "yes" ? t("feedbackMarkedYes") : t("feedbackMarkedNo");
    }

    var htmlPath = translated ? node.html_en : (node.html || "pages_html/" + id + ".html");
    fetch(htmlPath, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error(t("pageLoadFailed") + "（HTTP " + response.status + "）");
        }
        return response.text();
      })
      .then(function (html) {
        if (token !== pageRequest) {
          return;
        }
        el.article.replaceChildren();

        var title = document.createElement("h1");
        title.className = "page-title";
        title.textContent = nodeTitle(node);
        el.article.appendChild(title);

        if (state.lang === "en" && !translated) {
          el.article.appendChild(buildFallbackBanner());
        }

        var body = document.createElement("div");
        body.className = "page-body";
        body.innerHTML = html;
        localizeLinks(body);
        el.article.appendChild(body);
        appendRelated(el.article, node);

        buildPageToc(body);
        buildPrevNext(id);
        document.title = nodeTitle(node) + " - " + t("siteTitle");
        closeSidebar();
        scrollTop();
        highlightCommand(params);
      })
      .catch(function (err) {
        if (token !== pageRequest) {
          return;
        }
        el.article.replaceChildren();
        var title = document.createElement("h1");
        title.className = "page-title";
        title.textContent = nodeTitle(node);
        var error = document.createElement("div");
        error.className = "empty-state";
        error.innerHTML =
          "<p>" + escapeHtml(err.message) + "</p>" +
          "<p>" + escapeHtml(t("buildHint")) + " <code>python tools/build_help.py</code>.</p>";
        el.article.append(title, error);
        clearPageToc();
        el.prevLink.hidden = true;
        el.nextLink.hidden = true;
      });
  }

  /** 英文界面下的未翻译提示条：说明正文仍是中文原版。 */
  function buildFallbackBanner() {
    var banner = document.createElement("div");
    banner.className = "fallback-banner";
    banner.textContent = t("fallbackNote");
    return banner;
  }

  /** 英文界面里把正文内的 ``#/<id>`` 深链补成 ``#/en/<id>``，避免点一下掉回中文。 */
  function localizeLinks(container) {
    if (state.lang !== "en" || !container) {
      return;
    }
    Array.prototype.forEach.call(container.querySelectorAll('a[href^="#/"]'), function (link) {
      var href = link.getAttribute("href");
      if (href.indexOf("#/en/") === 0 || href.indexOf("#/en") === 0) {
        return;
      }
      link.setAttribute("href", "#/en/" + href.slice(2));
    });
  }

  function appendRelated(container, node) {
    var related = node.related || [];
    if (!related.length) {
      return;
    }
    var items = [];
    related.forEach(function (id) {
      var info = state.nodes.get(id);
      if (!info) {
        return;
      }
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.href = routeUrl(id);
      link.textContent = nodeTitle(info.node);
      li.appendChild(link);
      items.push(li);
    });
    if (!items.length) {
      return;
    }
    var section = document.createElement("section");
    section.className = "related-topics";
    var heading = document.createElement("h2");
    heading.textContent = t("relatedTopics");
    var list = document.createElement("ul");
    items.forEach(function (item) {
      list.appendChild(item);
    });
    section.appendChild(heading);
    section.appendChild(list);
    container.appendChild(section);
  }

  function highlightCommand(params) {
    var commandId = params && params.get ? params.get("cmd") : "";
    if (!commandId) {
      return;
    }
    window.setTimeout(function () {
      var row = document.getElementById("cmd-" + commandId);
      if (!row) {
        return;
      }
      row.classList.add("cmd-highlight");
      row.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(function () {
        row.classList.remove("cmd-highlight");
      }, 3600);
    }, 80);
  }

  function clearPageToc() {
    if (state.tocObserver) {
      state.tocObserver.disconnect();
      state.tocObserver = null;
    }
    el.pageToc.replaceChildren();
    el.pageToc.parentElement.hidden = true;
  }

  function renderBreadcrumb(ancestors, node) {
    el.breadcrumb.replaceChildren();
    var home = document.createElement("a");
    home.href = "#/" + langPrefix();
    home.textContent = t("helpHome");
    el.breadcrumb.appendChild(home);

    ancestors.forEach(function (ancestor) {
      var sep = document.createElement("span");
      sep.className = "sep";
      sep.textContent = "/";
      el.breadcrumb.appendChild(sep);

      var link = document.createElement("a");
      link.href = routeUrl(ancestor.id);
      link.textContent = nodeTitle(ancestor);
      el.breadcrumb.appendChild(link);
    });

    var sep = document.createElement("span");
    sep.className = "sep";
    sep.textContent = "/";
    el.breadcrumb.appendChild(sep);

    var current = document.createElement("span");
    current.textContent = nodeTitle(node);
    el.breadcrumb.appendChild(current);
  }

  function buildPageToc(body) {
    var headings = Array.prototype.slice.call(body.querySelectorAll("h2, h3"));
    el.pageToc.replaceChildren();
    el.pageToc.parentElement.hidden = headings.length === 0;
    if (!headings.length) {
      return;
    }

    headings.forEach(function (heading) {
      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      link.dataset.target = heading.id;
      link.className = heading.tagName === "H3" ? "level-3" : "level-2";
      link.addEventListener("click", function (event) {
        event.preventDefault();
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveToc(heading.id);
      });
      el.pageToc.appendChild(link);
    });

    setupTocObserver(headings);
  }

  function setActiveToc(targetId) {
    el.pageToc.querySelectorAll("a").forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.target === targetId);
    });
  }

  function setupTocObserver(headings) {
    if (state.tocObserver) {
      state.tocObserver.disconnect();
      state.tocObserver = null;
    }
    if (!("IntersectionObserver" in window)) {
      return;
    }
    state.tocObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveToc(entry.target.id);
          }
        });
      },
      { rootMargin: "-72px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach(function (heading) {
      state.tocObserver.observe(heading);
    });
  }

  function buildPrevNext(id) {
    var index = state.order.indexOf(id);
    var prevId = index > 0 ? state.order[index - 1] : "";
    var nextId = index >= 0 && index < state.order.length - 1 ? state.order[index + 1] : "";

    setPageNav(el.prevLink, prevId, t("prevPage"));
    setPageNav(el.nextLink, nextId, t("nextPage"));
  }

  function setPageNav(link, id, label) {
    if (!id) {
      link.hidden = true;
      link.removeAttribute("href");
      link.replaceChildren();
      return;
    }
    var info = state.nodes.get(id);
    if (!info) {
      link.hidden = true;
      return;
    }
    link.hidden = false;
    link.href = routeUrl(id);
    link.innerHTML =
      '<span class="nav-label">' + escapeHtml(label) + "</span>" +
      '<span class="nav-title">' + escapeHtml(nodeTitle(info.node)) + "</span>";
  }

  function renderNotFound(id) {
    pageRequest += 1;
    state.currentId = "";
    showDoc();
    el.breadcrumb.replaceChildren();
    clearPageToc();
    el.prevLink.hidden = true;
    el.nextLink.hidden = true;
    document.querySelector(".feedback").hidden = true;
    el.article.innerHTML =
      '<h1 class="page-title">' + escapeHtml(t("notFound")) + "</h1>" +
      '<div class="empty-state"><p>' + escapeHtml(t("notFoundId", { id: id })) + "</p>" +
      '<p><a href="#/' + langPrefix() + '">' + escapeHtml(t("backHome")) + "</a></p></div>";
    markActive("");
    document.title = t("notFound") + " - " + t("siteTitle");
    scrollTop();
  }

  function recordRecent(id) {
    var recent = safeGet(STORAGE.recent, []);
    recent = recent.filter(function (item) {
      return item !== id;
    });
    recent.unshift(id);
    safeSet(STORAGE.recent, recent.slice(0, 8));
  }

  /* ── 搜索（P2：API 语义 + 词法，本地词法兜底） ───────── */

  function renderSearchPage(rawQuery) {
    var query = String(rawQuery || "").trim();
    pageRequest += 1;
    state.currentId = "";
    showSearch();
    clearPageToc();
    markActive("");
    closeSidebar();
    scrollTop();
    el.searchInput.value = query;
    document.title = (query ? query + " - " : "") + t("searchTitle") + " - " + t("siteTitle");

    var token = ++state.searchToken;
    state.search = {
      query: query,
      status: "loading",
      items: [],
      total: 0,
      facets: { type: [], section: [] },
      mode: "",
      semantic: null,
      elapsed: 0,
      filterType: "",
      filterSection: "",
      message: ""
    };
    renderSearchPageBody();

    if (!query) {
      state.search.status = "idle";
      renderSearchPageBody();
      return;
    }
    // 索引用到才取（首屏不下），取到后再发起检索；期间保持 loading 文案。
    ensureIndex(state.lang).then(function (items) {
      if (token !== state.searchToken) {
        return;
      }
      if (!items.length) {
        state.search.status = "error";
        state.search.message = t("searchIndexMissing");
        renderSearchPageBody();
        return;
      }
      fetchSearchApi(query, token);
    });
  }

  function searchIndex() {
    return state.lang === "en" ? state.indexEn : state.index;
  }

  //: 词法索引按语言懒加载：首屏只下载 toc.json，第一次搜索（或聚焦搜索框）才取当前语言那份。
  var indexPromises = { zh: null, en: null };

  function ensureIndex(lang) {
    var slot = lang === "en" ? "en" : "zh";
    var key = slot === "en" ? "indexEn" : "index";
    if (state[key].length) {
      return Promise.resolve(state[key]);
    }
    if (!indexPromises[slot]) {
      var url = slot === "en" ? "search/help-index.en.json" : "search/help-index.json";
      indexPromises[slot] = fetchJson(url)
        .then(function (data) {
          state[key] = (data && data.items) || [];
          return state[key];
        })
        .catch(function () {
          indexPromises[slot] = null; // 失败允许下次重试
          return [];
        });
    }
    return indexPromises[slot];
  }

  function renderSearchPageBody() {
    var search = state.search;
    if (!search) {
      return;
    }
    var children = [buildSearchHead(search)];

    if (search.status === "loading") {
      children.push(searchMessageBlock(t("searching")));
      el.searchView.replaceChildren.apply(el.searchView, children);
      return;
    }
    if (search.status !== "done") {
      children.push(searchMessageBlock(search.status === "error"
        ? search.message
        : t("searchHint")));
      el.searchView.replaceChildren.apply(el.searchView, children);
      return;
    }

    var layout = document.createElement("div");
    layout.className = "search-layout";

    var facets = document.createElement("aside");
    facets.className = "search-facets";
    facets.setAttribute("aria-label", t("facetType"));
    facets.appendChild(buildFacetGroup(t("facetType"), search.facets.type, search.filterType, function (value) {
      search.filterType = value;
      renderSearchPageBody();
    }));
    facets.appendChild(buildFacetGroup(t("facetSection"), search.facets.section, search.filterSection, function (value) {
      search.filterSection = value;
      renderSearchPageBody();
    }));
    if (search.filterType || search.filterSection) {
      var clear = document.createElement("button");
      clear.type = "button";
      clear.className = "facet-clear";
      clear.textContent = t("clearFilters");
      clear.addEventListener("click", function () {
        search.filterType = "";
        search.filterSection = "";
        renderSearchPageBody();
      });
      facets.appendChild(clear);
    }
    layout.appendChild(facets);

    var hits = document.createElement("div");
    hits.className = "search-hits";
    var items = filteredSearchItems();
    if (!items.length) {
      if (state.lang === "en") {
        hits.appendChild(searchMessageBlock(t("enNoHit")));
        hits.appendChild(searchZhEntry(search.query));
      } else {
        hits.appendChild(searchMessageBlock(t("searchNoMatch")));
      }
    } else {
      items.forEach(function (item) {
        hits.appendChild(buildSearchHit(item, search.query));
      });
    }
    layout.appendChild(hits);

    children.push(layout);
    el.searchView.replaceChildren.apply(el.searchView, children);
  }

  /** 英文无命中时给一个「去中文内容里搜」的入口（默认不混排）。 */
  function searchZhEntry(query) {
    var block = document.createElement("p");
    block.className = "search-zh-entry";
    if (query) {
      var link = document.createElement("a");
      link.href = "#/search?q=" + encodeURIComponent(query);
      link.textContent = t("fallbackSearchZh");
      block.appendChild(link);
    }
    return block;
  }

  function buildSearchHead(search) {
    var head = document.createElement("header");
    head.className = "search-head";

    var title = document.createElement("h1");
    title.textContent = t("searchTitle");
    head.appendChild(title);

    var queryLine = document.createElement("p");
    queryLine.className = "search-query";
    queryLine.textContent = search.query ? "“" + search.query + "”" : t("searchNoQuery");
    head.appendChild(queryLine);

    var metaText = searchMetaText(search);
    if (metaText) {
      var meta = document.createElement("p");
      meta.className = "search-meta";
      meta.textContent = metaText;
      head.appendChild(meta);
    }
    return head;
  }

  function searchMetaText(search) {
    if (search.status === "loading") {
      return t("searching");
    }
    if (search.status !== "done") {
      return "";
    }
    var parts = [];
    if (search.total > search.items.length) {
      parts.push(t("resultsShown", { total: search.total, shown: search.items.length }));
    } else {
      parts.push(t("results", { n: search.total }));
    }
    if (search.elapsed) {
      parts.push(t("elapsed", { sec: search.elapsed.toFixed(2) }));
    }
    if (search.mode === "hybrid") {
      parts.push(t("modeHybrid"));
    } else if (search.mode) {
      var label = t("modeLexical");
      if (search.semantic && search.semantic.available === false) {
        label += " · " + t("semanticUnavailable");
      }
      parts.push(label);
    }
    if (search.filterType || search.filterSection) {
      parts.push(t("filtered", { n: filteredSearchItems().length }));
    }
    return parts.join(" · ");
  }

  function buildFacetGroup(title, entries, activeValue, onPick) {
    var group = document.createElement("div");
    group.className = "facet-group";
    if (!entries.length) {
      return group;
    }
    var heading = document.createElement("div");
    heading.className = "facet-title";
    heading.textContent = title;
    group.appendChild(heading);

    var total = entries.reduce(function (sum, entry) {
      return sum + entry.count;
    }, 0);
    group.appendChild(buildFacetItem(t("facetAll"), total, !activeValue, function () {
      onPick("");
    }));
    entries.forEach(function (entry) {
      group.appendChild(buildFacetItem(entry.name, entry.count, activeValue === entry.value, function () {
        onPick(entry.value);
      }));
    });
    return group;
  }

  function buildFacetItem(label, count, active, onClick) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "facet-item" + (active ? " is-active" : "");
    var name = document.createElement("span");
    name.textContent = label;
    var num = document.createElement("span");
    num.className = "facet-count";
    num.textContent = String(count);
    button.append(name, num);
    button.addEventListener("click", onClick);
    return button;
  }

  function sectionOf(item) {
    var path = item.path || [];
    return path.length ? String(path[0]) : "";
  }

  function filteredSearchItems() {
    var search = state.search;
    return search.items.filter(function (item) {
      if (search.filterType && (item.type || "task") !== search.filterType) {
        return false;
      }
      if (search.filterSection && sectionOf(item) !== search.filterSection) {
        return false;
      }
      return true;
    });
  }

  function buildSearchHit(item, query) {
    var link = document.createElement("a");
    link.className = "search-hit";
    link.href = item.url || ("#/" + item.id);

    var head = document.createElement("div");
    head.className = "hit-head";
    var title = document.createElement("span");
    title.className = "hit-title";
    title.innerHTML = highlight(item.title, query);
    var badge = document.createElement("span");
    badge.className = "result-badge";
    badge.textContent = typeLabel(item.type);
    head.append(title, badge);
    link.appendChild(head);

    var pathText = (item.path || []).join(" / ");
    if (pathText) {
      var path = document.createElement("div");
      path.className = "hit-path";
      path.textContent = pathText;
      link.appendChild(path);
    }

    var snippet = document.createElement("p");
    snippet.className = "hit-snippet";
    snippet.innerHTML = makeSnippet(item, query);
    link.appendChild(snippet);
    return link;
  }

  function searchMessageBlock(message) {
    var block = document.createElement("div");
    block.className = "empty-state search-empty";
    var text = document.createElement("p");
    text.textContent = message;
    block.appendChild(text);
    return block;
  }

  function localSearch(query, limit) {
    var lowerQuery = query.toLowerCase();
    var tokens = lowerQuery.split(/\s+/).filter(Boolean);

    return searchIndex()
      .map(function (item) {
        var title = item.title.toLowerCase();
        var path = (item.path || []).join(" ").toLowerCase();
        var keywords = (item.keywords || []).concat(item.synonyms || []).join(" ").toLowerCase();
        var text = (item.text || "").toLowerCase();
        var score = 0;

        if (title === lowerQuery) {
          score += 300;
        } else if (title.indexOf(lowerQuery) === 0) {
          score += 160;
        } else if (title.indexOf(lowerQuery) >= 0) {
          score += 120;
        }
        if (keywords.indexOf(lowerQuery) >= 0) {
          score += 90;
        }
        if (path.indexOf(lowerQuery) >= 0) {
          score += 45;
        }
        if (text.indexOf(lowerQuery) >= 0) {
          score += 25;
        }

        tokens.forEach(function (token) {
          if (title.indexOf(token) >= 0) {
            score += 20;
          }
          if (keywords.indexOf(token) >= 0) {
            score += 12;
          }
          if (path.indexOf(token) >= 0) {
            score += 6;
          }
          if (text.indexOf(token) >= 0) {
            score += 3;
          }
        });

        return { item: item, score: score };
      })
      .filter(function (entry) {
        return entry.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score || a.item.title.length - b.item.title.length;
      })
      .slice(0, limit || 12)
      .map(function (entry) {
        return normalizeResult(entry.item);
      });
  }

  function fetchSearchApi(query, token) {
    var startedAt = nowMs();
    var url = "/api/help/search?q=" + encodeURIComponent(query) + "&limit=100&lang="
      + encodeURIComponent(state.lang || "zh");
    var controller = null;
    var timer = 0;
    if (window.AbortController) {
      controller = new AbortController();
      timer = window.setTimeout(function () {
        controller.abort();
      }, 10000);
    }

    fetch(url, { cache: "no-store", signal: controller ? controller.signal : undefined })
      .then(function (response) {
        window.clearTimeout(timer);
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        if (token !== state.searchToken) {
          return;
        }
        applySearchPayload(query, data, startedAt);
      })
      .catch(function () {
        window.clearTimeout(timer);
        if (token !== state.searchToken) {
          return;
        }
        applyLocalResults(query, startedAt);
      });
  }

  function applySearchPayload(query, data, startedAt) {
    var items = ((data && data.items) || []).map(normalizeResult);
    state.search = Object.assign(state.search, {
      status: "done",
      query: query,
      items: items,
      total: data && typeof data.total === "number" ? data.total : items.length,
      facets: normalizeFacets(data && data.facets, items),
      mode: (data && data.mode) || "lexical",
      semantic: (data && data.semantic) || null,
      elapsed: elapsedSeconds(startedAt),
      message: ""
    });
    renderSearchPageBody();
  }

  function applyLocalResults(query, startedAt) {
    var items = localSearch(query, 100);
    state.search = Object.assign(state.search, {
      status: "done",
      query: query,
      items: items,
      total: items.length,
      facets: normalizeFacets(null, items),
      mode: "lexical",
      semantic: { available: false, reason: "搜索服务不可用，已退回本地词法检索" },
      elapsed: elapsedSeconds(startedAt),
      message: ""
    });
    renderSearchPageBody();
  }

  function normalizeFacets(facets, items) {
    if (facets && facets.type && facets.section) {
      return {
        type: toFacetEntries(facets.type, typeLabel),
        section: toFacetEntries(facets.section)
      };
    }
    var typeCounts = {};
    var sectionCounts = {};
    items.forEach(function (item) {
      var type = item.type || "task";
      typeCounts[type] = (typeCounts[type] || 0) + 1;
      var section = sectionOf(item);
      sectionCounts[section] = (sectionCounts[section] || 0) + 1;
    });
    return {
      type: toFacetEntries(typeCounts, typeLabel),
      section: toFacetEntries(sectionCounts)
    };
  }

  function toFacetEntries(counts, labelFn) {
    return Object.keys(counts || {})
      .map(function (key) {
        return {
          value: key,
          name: labelFn ? labelFn(key) : key,
          count: Number(counts[key]) || 0
        };
      })
      .sort(function (a, b) {
        return b.count - a.count || a.name.localeCompare(b.name, state.lang === "en" ? "en" : "zh");
      });
  }

  function nowMs() {
    return window.performance && window.performance.now ? window.performance.now() : Date.now();
  }

  function elapsedSeconds(startedAt) {
    return startedAt ? (nowMs() - startedAt) / 1000 : 0;
  }

  function makeSnippet(item, query) {
    if (item.snippet) {
      return highlight(item.snippet, query);
    }
    var text = item.text || item.summary || "";
    var lowerText = text.toLowerCase();
    var lowerQuery = query.toLowerCase();
    var index = lowerText.indexOf(lowerQuery);
    var snippet;
    if (index >= 0) {
      var start = Math.max(0, index - 30);
      snippet = text.slice(start, index + 90);
      if (start > 0) {
        snippet = "…" + snippet;
      }
      if (index + 90 < text.length) {
        snippet += "…";
      }
    } else {
      snippet = item.summary || text.slice(0, 110);
      if (!snippet) {
        snippet = (item.path || []).join(" / ");
      }
    }
    return highlight(snippet, query);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
