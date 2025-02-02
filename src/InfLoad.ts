class InfLoad extends HTMLElement {
  fetchCallbackFn: Function = () => {};
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.fetchData = this.fetchData.bind(this);
  }

  setUp(shadowRoot: ShadowRoot) {
    shadowRoot.innerHTML = `
      <slot></slot>
      <div id="inf-load-container"></div>
      <span id="inf-load-anchor"></span>
    `;

    // Setup IntersectionObserver
    const anchor = shadowRoot.getElementById("inf-load-anchor");
    if (anchor) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("🔄 Fetching more data...");
          this.fetchCallbackFn(this.fetchData, true);
        }
      });
      observer.observe(anchor);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const fetchFn = this.getAttribute("fetch");
      if (fetchFn)
        this.fetchCallbackFn = (window as any)[fetchFn] ?? (() => {});
      this.fetchCallbackFn(this.fetchData);
    });
  }

  renderItem(item: any, template: any) {
    const keys = Object.keys(item);
    keys.forEach((key) => {
      const element = template.querySelector(`[data-inf-load-key="${key}"]`);
      if (element) {
        element.innerHTML = item[key];
      }
      template
        .querySelectorAll(`[data-inf-load-key="${key}"]`)
        .forEach((el: HTMLElement) => {
          el.innerHTML = item[key];
        });
    });
    return template;
  }

  getTemplate() {
    const slot = this.querySelector("template"); // Get user-defined template
    if (!slot) {
      console.error("InfLoad requires a <template> inside.");
      return;
    }

    return slot;
  }

  mapAndRenderData(data: any) {
    const container = this.shadowRoot?.querySelector("#inf-load-container");
    const template = this.getTemplate();
    if (!container) {
      console.error("❌ container is missing!");
      return;
    }
    if (!template) {
      console.error("❌ template is missing!");
      return;
    }
    data.forEach((item: any) => {
      const node: any = this.renderItem(item, template.content.cloneNode(true));
      container.appendChild(node);
    });
  }

  constructParamsString(paramsMap: Map<string, string>) {
    let str = ``;
    paramsMap.entries().forEach((val) => {
      str += `${val[0]}=${val[1]}`;
    });
    return str;
  }

  async fetchData(urlToLoadDataFrom: string, params?: Map<string, string>) {
    const paramStr = this.constructParamsString(params ?? new Map());
    const data = await (await fetch(`${urlToLoadDataFrom}?${paramStr}`)).json();
    console.log("✅ Data fetched:", data);
    this.mapAndRenderData(data);
    return data;
  }

  connectedCallback() {
    console.log("✅ Web Component connected:", this);
    if (!this.shadowRoot) {
      console.error("❌ shadowRoot is missing!");
      return;
    }

    this.setUp(this.shadowRoot);
  }
}

// ✅ Register the component
customElements.define("infinite-loading", InfLoad);
console.log("✅ Web Component registered: infinite-loading");
