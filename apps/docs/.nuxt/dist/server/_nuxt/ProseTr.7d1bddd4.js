import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "h3";
import "defu";
import "vue-router";
import "scule";
import "property-information";
import "html-tags";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ohash";
import "cookie-es";
import "pinceau/runtime";
const ProseTr_vue_vue_type_style_index_0_scoped_4fd3d958_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${ssrRenderAttrs(_attrs)} data-v-4fd3d958>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tr>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/@nuxt-themes/docus-edge/components/prose/ProseTr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4fd3d958"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=ProseTr.7d1bddd4.js.map
