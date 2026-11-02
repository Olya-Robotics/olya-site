/* OLYA — comportamento do site.
   Sem dependências além do Lucide (CDN, ícones de interface).
   Responsável por: tema claro/escuro, idioma PT/EN, menu mobile,
   formulário de contato (mailto) e modal. */
(function () {
  "use strict";

  var LS_THEME = "olya.theme";
  var LS_LANG = "olya.lang";
  var dict = window.OLYA_I18N || { pt: {}, en: {} };

  /* ---------------- tema ---------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btns = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < btns.length; i++) {
      var icon = btns[i].querySelector("i, svg");
      if (icon) {
        icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
      }
      btns[i].setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function initialTheme() {
    var saved = null;
    try { saved = localStorage.getItem(LS_THEME); } catch (e) {}
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function toggleTheme() {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try { localStorage.setItem(LS_THEME, next); } catch (e) {}
    applyTheme(next);
  }

  /* ---------------- idioma ---------------- */
  function applyLang(lang) {
    var table = dict[lang] || dict.pt;
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (table[key] != null) nodes[i].textContent = table[key];
    }
    var attrTargets = [
      ["data-i18n-placeholder", "placeholder"],
      ["data-i18n-aria", "aria-label"],
      ["data-i18n-title", "title"],
      ["data-i18n-alt", "alt"]
    ];
    for (var a = 0; a < attrTargets.length; a++) {
      var sel = "[" + attrTargets[a][0] + "]";
      var list = document.querySelectorAll(sel);
      for (var j = 0; j < list.length; j++) {
        var k = list[j].getAttribute(attrTargets[a][0]);
        if (table[k] != null) list[j].setAttribute(attrTargets[a][1], table[k]);
      }
    }
    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      var tk = titleEl.getAttribute("data-i18n");
      if (table[tk] != null) document.title = table[tk];
    }
    var switches = document.querySelectorAll("[data-lang]");
    for (var s = 0; s < switches.length; s++) {
      switches[s].setAttribute("aria-pressed", switches[s].getAttribute("data-lang") === lang ? "true" : "false");
    }
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem(LS_LANG); } catch (e) {}
    if (saved === "pt" || saved === "en") return saved;
    var nav = (navigator.language || "pt").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  function setLang(lang) {
    try { localStorage.setItem(LS_LANG, lang); } catch (e) {}
    applyLang(lang);
  }

  function t(key) {
    var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "pt";
    var table = dict[lang] || dict.pt;
    return table[key] != null ? table[key] : key;
  }

  /* ---------------- menu mobile ---------------- */
  function initMenu() {
    var btn = document.querySelector("[data-menu-toggle]");
    var panel = document.getElementById("mobile-nav");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var open = panel.hasAttribute("hidden");
      if (open) panel.removeAttribute("hidden"); else panel.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      var icon = btn.querySelector("i, svg");
      if (icon) icon.setAttribute("data-lucide", open ? "x" : "menu");
      if (window.lucide) window.lucide.createIcons();
    });
  }

  /* ---------------- formulário de contato (mailto) ---------------- */
  function initMailForms() {
    var forms = document.querySelectorAll("form[data-mailto]");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", function (ev) {
        ev.preventDefault();
        var form = ev.currentTarget;
        var msg = form.querySelector("[data-form-msg]");
        if (!form.checkValidity()) {
          if (msg) msg.hidden = false;
          var bad = form.querySelector(":invalid");
          if (bad) bad.focus();
          return;
        }
        if (msg) msg.hidden = true;
        var get = function (name) { var el = form.querySelector('[name="' + name + '"]'); return el ? el.value.trim() : ""; };
        var subj = get("assunto") || t("ct.form.defaultsubject");
        var lines = [
          t("ct.form.institution") + ": " + get("empresa"),
          t("ct.form.name") + ": " + get("responsavel"),
          t("ct.form.email") + ": " + get("email"),
          t("ct.form.state") + ": " + (get("estado") || "-"),
          "",
          get("mensagem")
        ];
        var href = "mailto:" + form.getAttribute("data-mailto") +
          "?subject=" + encodeURIComponent("[olya.cc] " + subj + " — " + get("empresa")) +
          "&body=" + encodeURIComponent(lines.join("\n"));
        window.location.href = href;
      });
    }
  }

  /* ---------------- filtro por tag (catálogo) ---------------- */
  function initFilter() {
    var tags = document.querySelectorAll("[data-filter]");
    if (!tags.length) return;
    for (var i = 0; i < tags.length; i++) {
      tags[i].addEventListener("click", function (ev) {
        var value = ev.currentTarget.getAttribute("data-filter");
        for (var j = 0; j < tags.length; j++) {
          tags[j].setAttribute("aria-pressed", tags[j] === ev.currentTarget ? "true" : "false");
        }
        var items = document.querySelectorAll("[data-cat]");
        for (var k = 0; k < items.length; k++) {
          var show = value === "*" || items[k].getAttribute("data-cat") === value;
          if (show) items[k].removeAttribute("hidden"); else items[k].setAttribute("hidden", "");
        }
      });
    }
  }

  /* ---------------- modal ---------------- */
  function initModal() {
    var openers = document.querySelectorAll("[data-modal-open]");
    for (var i = 0; i < openers.length; i++) {
      openers[i].addEventListener("click", function (ev) {
        ev.preventDefault();
        var m = document.getElementById(ev.currentTarget.getAttribute("data-modal-open"));
        if (m) m.removeAttribute("hidden");
      });
    }
    var closers = document.querySelectorAll("[data-modal-close]");
    for (var c = 0; c < closers.length; c++) {
      closers[c].addEventListener("click", function (ev) {
        var m = ev.currentTarget.closest("[data-modal]");
        if (m) m.setAttribute("hidden", "");
      });
    }
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      var open = document.querySelectorAll("[data-modal]:not([hidden])");
      for (var o = 0; o < open.length; o++) open[o].setAttribute("hidden", "");
    });
  }

  /* ---------------- marcar página atual ---------------- */
  function markCurrent() {
    var here = location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll(".nav a, .mobile-nav a");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href === here) links[i].setAttribute("aria-current", "page");
    }
  }

  /* ---------------- boot ---------------- */
  function boot() {
    applyTheme(initialTheme());
    applyLang(initialLang());
    markCurrent();
    initMenu();
    initMailForms();
    initFilter();
    initModal();

    var themeBtns = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < themeBtns.length; i++) themeBtns[i].addEventListener("click", toggleTheme);

    var langBtns = document.querySelectorAll("[data-lang]");
    for (var j = 0; j < langBtns.length; j++) {
      langBtns[j].addEventListener("click", function (ev) {
        setLang(ev.currentTarget.getAttribute("data-lang"));
      });
    }
    if (window.lucide) window.lucide.createIcons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
