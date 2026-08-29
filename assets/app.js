/* OLYA — comportamento do site.
   Sem dependências além do Lucide (CDN, ícones de interface).
   Responsável por: tema claro/escuro, idioma PT/EN, menu mobile,
   formulários de demonstração e medidor de força de senha. */
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
      var icon = btns[i].querySelector("i");
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
      var icon = btn.querySelector("i");
      if (icon) icon.setAttribute("data-lucide", open ? "x" : "menu");
      if (window.lucide) window.lucide.createIcons();
    });
  }

  /* ---------------- formulários de demonstração ---------------- */
  function initDemoForms() {
    var forms = document.querySelectorAll("form[data-demo]");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", function (ev) {
        ev.preventDefault();
        var form = ev.currentTarget;
        var go = form.getAttribute("data-demo-go");
        var msg = form.querySelector("[data-demo-msg]");

        if (form.hasAttribute("data-demo-match")) {
          var pws = form.querySelectorAll('input[type="password"]');
          if (pws.length === 2 && pws[0].value !== pws[1].value) {
            if (msg) {
              msg.textContent = t("reset.mismatch");
              msg.style.background = "rgba(214,66,27,.12)";
              msg.style.color = "#d6421b";
              msg.hidden = false;
            }
            return;
          }
        }
        if (go) { window.location.href = go; return; }
        if (msg) {
          msg.removeAttribute("style");
          var key = msg.getAttribute("data-demo-msg");
          if (key) msg.textContent = t(key);
          msg.hidden = false;
        }
        var submit = form.querySelector('[type="submit"]');
        if (submit) submit.disabled = true;
      });
    }
  }

  /* ---------------- mostrar/ocultar senha ---------------- */
  function initReveal() {
    var btns = document.querySelectorAll("[data-reveal]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (ev) {
        var btn = ev.currentTarget;
        var input = document.getElementById(btn.getAttribute("data-reveal"));
        if (!input) return;
        var show = input.type === "password";
        input.type = show ? "text" : "password";
        var icon = btn.querySelector("i");
        if (icon) icon.setAttribute("data-lucide", show ? "eye-off" : "eye");
        if (window.lucide) window.lucide.createIcons();
      });
    }
  }

  /* ---------------- força da senha ---------------- */
  function initStrength() {
    var input = document.querySelector("[data-strength]");
    if (!input) return;
    var bar = document.getElementById(input.getAttribute("data-strength"));
    if (!bar) return;
    input.addEventListener("input", function () {
      var v = input.value, score = 0;
      if (v.length >= 8) score++;
      if (/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      bar.setAttribute("data-level", v ? String(score) : "0");
    });
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
    var links = document.querySelectorAll(".nav a, .mobile-nav a, .sidebar nav a");
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
    initDemoForms();
    initReveal();
    initStrength();
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
