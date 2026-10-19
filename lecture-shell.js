const LectureShell = (() => {
  let onNavigate = null;
  let onFinal = null;

  const $id = (id) => document.getElementById(id);

  function closeDrawer() {
    document.body.classList.remove("ss-drawer");
  }

  function sizeToTopbar() {
    const aside = $id("stageSidebar");
    const bar = document.querySelector(".topbar");
    if (!aside || !bar) return;
    if (window.matchMedia("(max-width: 1080px)").matches) {
      aside.style.top = "0";
      return;
    }
    aside.style.top = Math.round(bar.getBoundingClientRect().bottom) + "px";
  }

  function ensureDom() {
    if ($id("stageSidebar")) return;
    const aside = document.createElement("aside");
    aside.className = "stage-sidebar";
    aside.id = "stageSidebar";
    aside.setAttribute("aria-label", t("ssTitle"));
    aside.innerHTML =
      '<div class="ss-head">' +
      '<span class="ss-kicker" data-i18n="ssTitle">' + t("ssTitle") + "</span>" +
      '<button class="ss-close" id="ssCloseBtn" aria-label="' + t("ssMenu") + '">✕</button>' +
      "</div>" +
      '<div class="ss-list" id="ssList" role="list"></div>' +
      '<button class="ss-final" id="ssFinalBtn"><span>🏁</span><span data-i18n="ssFinal">' + t("ssFinal") + "</span></button>";

    const scrim = document.createElement("div");
    scrim.className = "ss-scrim";
    scrim.id = "ssScrim";

    const toggle = document.createElement("button");
    toggle.className = "ss-toggle";
    toggle.id = "ssToggle";
    toggle.setAttribute("aria-label", t("ssMenu"));
    toggle.textContent = "☰";

    document.body.append(scrim, aside, toggle);

    toggle.addEventListener("click", () => document.body.classList.add("ss-drawer"));
    $id("ssCloseBtn").addEventListener("click", closeDrawer);
    scrim.addEventListener("click", closeDrawer);
    $id("ssFinalBtn").addEventListener("click", () => {
      closeDrawer();
      if (onFinal) onFinal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
    });

    sizeToTopbar();
    window.addEventListener("resize", sizeToTopbar);
  }

  function init(opts) {
    onNavigate = (opts && opts.onNavigate) || null;
    onFinal = (opts && opts.onFinal) || null;
    ensureDom();
  }

  function sync(stages, activeIdx, visitedSet) {
    ensureDom();
    const list = $id("ssList");
    if (!list) return;
    list.innerHTML = "";
    stages.forEach((st, i) => {
      const btn = document.createElement("button");
      btn.className =
        "ss-item" +
        (i === activeIdx ? " active" : "") +
        (visitedSet && visitedSet.has(st.id) ? " visited" : "");
      btn.innerHTML =
        '<span class="ss-num">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<span class="ss-name">' + st.title + "</span>";
      btn.addEventListener("click", () => {
        closeDrawer();
        if (onNavigate) onNavigate(i);
      });
      list.appendChild(btn);
    });
  }

  function show() {
    ensureDom();
    document.body.classList.add("ss-active");
    requestAnimationFrame(sizeToTopbar);
  }

  function hide() {
    document.body.classList.remove("ss-active", "ss-drawer");
  }

  return { init, sync, show, hide };
})();
