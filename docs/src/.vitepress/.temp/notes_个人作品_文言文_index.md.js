import { ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, ref, useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ClassicsCollection",
  __ssrInlineRender: true,
  setup(__props) {
    const poetries = ref([
      {
        id: 1,
        title: "幽森别景",
        children: [
          "自营江口通敦颐场，约千米，濂溪像塑于其间。正通大道，背有江河，四面敞平，一望辽舒。然则人像东行有长荫，一处阙口，拱桥架于河上。登临桥峰，似仙者游银河，诗意盎生，无限遐思。",
          "过桥，至千木林。予观夫胜状，妙趣心生，鳏寡闲人多会于此。生摊丝竹摆置江岸，或散林间，星罗棋布。",
          "复前行，见幽深草木布石路两侧，曲径通幽，分支相连。外围桨船几分，一峙塔立于颐像背岸，砌之精致。未几，止步松心，叹为悠哉！渺淼城中竟有别景，使人困居而安，戾天者清。予以无景可比拟耳。娴情雅致，借此可发。"
        ]
      },
      /*{
          id: 2,
          title: '水调歌头·贺新郎',
          children: [
              '乙未四六，通讯达兴，明意，急作章，赠相宝剑。',
              '艳福何时遇？红尘中难寻。不知去世红颜，今朝将又谁。我欲起身去寻，又恐迷途无返，俗尘难断颜。月出戏廉影，难平心寂寥。',
              '移念学，志似海，愁心忏。无须怨由，万事事因由人定。缘是月老相牵，情由双人而决，循事古今就。但愿人长久，咫尺共婵娟。莫待昔人去而留，更重今时留她意。',
              '一朝白发因国扰，万世苍皱为壮魂。欲欲己生勚，思思家情浓，满是酸泪落君前。',
              '今朝余哥妻归宿，心怀咏诗为其祝：愿其心体互通明，世世朝朝彩凤牵，执子偕永情相连，共悦话谈续青春。'
          ]
      },*/
      {
        id: 3,
        title: "英雄之义",
        children: [
          "何谓英雄？居拥天下而威慑四海者乎？抑服天下而使人敬仰者乎？吾谂之:概为气压群雄者，是谓英雄。",
          "秦汉之际项羽者，虽少怀力撼山河之势，而终以错失鸿门之缘失其天下。敢陈愚见:籍非无大军以当沛公，而为优柔所致也。虽然，亦不怼天而恨己不成，竟为壮其志而不辱于人世，遂相搏与沛军。斩数将，暨竭气力，后被十余创，于时扶兵矗立，长叹息以抒其愤，而后辄自刎以明其志:大丈夫虽事不成，亦不能跽觐为人臣，虽以一当十，以足与匹抗。三军战之，复为气焰所逡吓。由此观之，英雄非惟其成霸业者，而当气显壮志，能征天下者焉。",
          "如上示，三国关羽者，蜀之勇将也。其人护主如心，欲翼刘氏复朝，不料为吴计所困。终以过五关、斩六将而败走麦城，身死人手，为天下不胜哀婉。吾敬之，以其勇气过人而护主之心常在也。是虽尸去而魂长留，若不及者，已经为奇迹矣。故英雄不囿于心野一词，而在其义行。今羽固殁，而获一世芳名，广为嘉言。",
          "比近世，边鄙为掠者数不尽。满清颓废，而倭寇之势猛如虎，让之三分，其欲倍得。方是时，朝廷内外近乎无人解围。及至润之崭露政坛，天下大势适得逆转。曾许言与贼党“敢教日月换新天”之壮语，是以触中正而驱之逃亡。后见剿于国军，却毅然不负其志曰:“敌军围困万千重，我自岿然不动。”奚以成英豪？由此可见矣。苟无凌云之志者，阖以成大事？而有志矣，若无雄才以助焉，亦不能至也。是故润之能成大事者，非惟有是心也，亦必有超世之才。吾所以向之，徒慕其殊才也。",
          "且夫世之奇才者无穷，而独羡者寥寥，斯以人有所趋，情有所异致焉。况吾属皆审世不足，阅闻有歉，而躬受前人之身难矣。或以立大志者为骄，或以繁功勋者为榜，无论树何以，凡此种种，止无恶，皆为善哉！吾观现世之真英雄，宜为其奋国事，而终得造诣者，抑拥盖世之才，而卒馨文铭丹青者，此之谓吾心之英雄兮。"
        ]
      },
      {
        id: 4,
        title: "濂湘先生传",
        children: [
          "周玉者，字潜慧，号濂湘。湘南永州人也。因志高品行，而籍省南者，故自称濂湘。其人尝从农业，遍知黎首之痛，故切为民忧。既加冠，益欲成名立业，以致发愤图强，博闻笃志；时究古文之胜，以应其著；甚者，其亦欲以究天人之际，通古今之变，成一家之言而名留于世。虽子长曾许言，况吾者乎今人？",
          "斯时才知特为犹显。若夫有志无力者，则可思而不可至也；有力无志者，则终无为也；怀才兼力者，辄可成其名矣。由是其欲网罗天下放佚旧闻，而权掌嫏嬛，以舒其见。既数日，居安不振，而隐于蛊，遂增胜烦于父母，甚是悲悯泽养之父母！",
          "共和国六十九年夏暑，用心懑抑郁，如海南，经世事。自道州暨湛江，需一日，而又横渡琼海，次日，驿至。忽私发于外世，而感慨系之无尽。随之忍负压，肩重任，以故身体平民莘莘，然则百世无常而人心叵测，无过数日，至归家中，历尽沧桑已。虽然，彼犹未变初衷，而恨心其志。",
          "每当困于学问，又或会有疑心者，皆能淡之。苟无前训者，奚以明世？是以阅人间五味方可知晓人情世故。昔痛绝于学情，而今爱之，是无为洞见乾坤之道哉？且夫天地无常，而城府人心，勿宥一时之态。",
          "人生一世，草木一秋，醉生于世，醒时几何？欲翛然游乎世外，而非囿于囹圄。若是不成，则索道乎幽荒，彳亍兮踧踧敻道以探真理。求之靡途，愿赍志没地，效懿德之先灵，而不敢以己之私毁芳馨千祠。谂之至此，凝氤氲荡气于一身，汇前圣菁华于一股，戮力壹心，努迸时代耀光，而获一世懋名。聊发孔徂阊阖之齌心，翼我征万世之绝唱。"
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(poetries.value, (item) => {
        _push(`<div class="poetry-wrapper" data-v-831a7b45><h2 data-v-831a7b45>${ssrInterpolate(item.title)}</h2><div class="poetry-content" data-v-831a7b45><!--[-->`);
        ssrRenderList(item.children, (photograph) => {
          _push(`<p data-v-831a7b45>${ssrInterpolate(photograph)}</p>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ClassicsCollection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ClassicsCollection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-831a7b45"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true,"aside":false},"headers":[],"relativePath":"notes/个人作品/文言文/index.md","filePath":"notes/个人作品/文言文/index.md","lastUpdated":null}');
const __default__ = { name: "notes/个人作品/文言文/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(ClassicsCollection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/个人作品/文言文/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
