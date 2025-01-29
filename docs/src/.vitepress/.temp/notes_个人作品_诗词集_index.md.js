import { ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, ref, useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PoetryCollection",
  __ssrInlineRender: true,
  setup(__props) {
    const poetries = ref([
      {
        id: 1,
        isPoem: true,
        title: "赠新师",
        children: [
          "清风舒夜掩咸城，炽笔挥纸抒情真。",
          "深思意困伐文溢，多情言剩何成稷。",
          "身修语醴颜旖旎，貌美德懿行阖祎。",
          "百花初见含羞撤，众目千视欲谄得。",
          "诲渡莘莘年复年，事职依稀从未停。",
          "肄娴相勖越明年，折冠聚堂欢庆赢。",
          "夷犹出手献师前，疑患吾诗怕不行。",
          "但愿君将琼瑛携，翕文遽此终既结。"
        ]
      },
      /*{
          id: 2,
          title: '恋人',
          children: [
              '措辞何堪析佳人，音容绝世确实是。',
              '双眉一斜清纯见，两颊粉似桃花开。',
              '初出水面易艳妆，素颜不改如常丽。',
              '最是悔负初恋时，心底隐作苦思泪。',
              '才情易表吾相思，不解近年纷飞绪。',
              '汝若知明望穿秋，肯与吾归意郎乡。',
          ]
      },*/
      {
        id: 3,
        isPoem: true,
        title: "乐天初使长安记",
        children: [
          "居易进长安，顾况受谒迎。",
          "面生晓姓字，戏嘲姓后名。",
          "忽见稿中诗，顷刻风靡国。",
          "亦是日敬升，文采扬立世。"
        ]
      },
      /*{
          id: 4,
          title: '忽感诗失',
          children: [
              '去日诗稿窃何处，今作悼文悲心血。',
              '金华才情曾有怀，碧蔚殿梦现肆败。',
              '早知事发惊常时，奈苦当作云烟诗。',
              '聊止复归生实中，继功奋挽弥昨伤。',
          ]
      },*/
      {
        id: 5,
        isPoem: false,
        title: "浪淘沙·长江水",
        children: [
          "长江水，未有损，去留江海天复回。观俗尘，曷尝不？子缺尚有佳人补，凡世难过命坎途。",
          "高志存，道无门，今换谁来惜予闻？解愁心，须佛音，杰友才兄皆迷痕，不见当年古风琴。"
        ]
      },
      /*{
          id: 6,
          title: '赠同学',
          children: [
              '相渡两年事同窗，岁月静好人沧桑。',
              '历经浮沉世辛酸，痛感少稚气轻狂。',
              '俊鸿汝等须努力，不可自沽学吾逆。',
              '劝君折桂眀试中，召引凡人皆相崇。',
              '昔时相处淡无味，及长离后满别情。',
          ]
      },*/
      {
        id: 7,
        title: "沁园春·橘子洲头",
        isPoem: true,
        children: [
          "余怀敬心，千路寻觅，石塑雕像。",
          "驻长杆览景，满眼全绿；",
          "高厦密围，力艇飞奔。",
          "风起一片，水晃全洲，苍天各处显神通。",
          "拉结志士来游。计后生大事伟业成。",
          "时血气方刚，才情并旺；",
          "飒爽英姿，尽书新章。",
          "将相非天，凡人与同，奈何一世皆下风？",
          "拟作词，揭比毛家派，誓越其军。"
        ]
      },
      {
        id: 8,
        title: "赠佳人",
        isPoem: true,
        children: [
          "昨夜诗帖送君门，今日慕兴又提笔。",
          "初情乍断爱复发，恋人忽见泪落花。",
          "海内玉女献媚酸，尔我焦思不成双。",
          "非我执心追香蔻，再得靓女不情动。",
          "窗外烟雨如丝针，爱你之心切为真。",
          "孤身独闯败半程，扶手相伴行千里。",
          "汝若知明吾相思，敌畔心围入我怀。",
          "皎人恨我千里外，吾反信缠而齌求。"
        ]
      },
      /*{
          id: 9,
          title: '论千古史及作',
          children: [
              '闭关终繁始落欺，释国开放逐盛强。',
              '一代佳史传承明，千古绝吟唱到今。',
          ]
      },*/
      /*{
          id: 10,
          title: '论诗',
          children: [
              '赢诗千年仍盛行，苑歌百余依喜庆。',
              '变古通今为奇作，创新造始乃颖才。',
          ]
      },*/
      /*{
          id: 11,
          title: '诲言致谢',
          children: [
              '教诲师说谨记心，名言学悟自勉当。',
              '学子心去正誓中，不复壮绩终不还。',
          ]
      },*/
      {
        id: 12,
        isPoem: false,
        title: "诫心词",
        children: [
          "原是神朗笔绪，亮手起指间，挥墨临纸遏，愁断思。",
          "悠悠江水东流，雁总秋去春来，万物事运竟有归。年少材青发先白，悲忏学浅人面黄，悯怜此恨无由。",
          "将军身披黄金甲，平铲中原入夷蛮，战愿了却何时？世事竟相冲来，暴尘沙雨俱迎，吾谁敢步将伯乎？"
        ]
      },
      {
        id: 13,
        title: "破卷词",
        isPoem: true,
        children: [
          "墨落成章是衮旨，辞措意渊文涵表。",
          "卷卷心迫出真道，彧然神挥见笔端。",
          "欲伤千悲独流泪，值饮涩酒难消愁。",
          "句句衷声诉生历，惘怜世材无人懂。",
          "原是痴公自作情，殆始明朝无复途。"
        ]
      },
      /*{
          id: 14,
          title: '繁星·春水',
          children: [
              '繁星一点人心动，春水初出柔肠断。',
              '文章作创数百万，最美不过冰心传。',
          ]
      },*/
      {
        id: 15,
        title: "论诗",
        isPoem: true,
        children: [
          "唐朝李杜诗篇传，至今音韵余有味。",
          "新社翻梗旧时去，现代诗词须创鲜。"
        ]
      },
      {
        id: 16,
        title: "鬼之灵",
        isPoem: true,
        children: [
          "孟婆常驻奈何桥，判官责审在酆都。",
          "牛头马面勾魂者，黑白无常恶鬼神。",
          "感时心惊胆战栗，夜半无人怕出门。",
          "出门一眼不敢多，让鬼三分最可行。",
          "月高风清影散乱，自以有鬼在四方。",
          "夜莺初鸣如鬼泣，吓得人惶身抖颤。",
          "已是四季秋来临，秋风飒飒有何疑。",
          "心无愧问鬼见离，最怕身净心不洁。"
        ]
      },
      {
        id: 17,
        title: "七言绝句",
        isPoem: true,
        children: [
          "深夜深思深世道，浅水潜藏潜智慧。",
          "人无学识遭人逼，虎落平阳被犬欺。"
        ]
      },
      {
        id: 18,
        title: "诗风",
        isPoem: true,
        children: [
          "灵渠思兴词安聚，点笔惊鸿一触飞。",
          "命蹼生劳功消散，诗人风度今何在？"
        ]
      },
      {
        id: 19,
        title: "望月赋",
        isPoem: true,
        children: [
          "望明思秋月，怀乡上心头。",
          "静坐玉溪上，独享清赋中。"
        ]
      },
      {
        id: 20,
        title: "诉衷情",
        isPoem: true,
        children: [
          "少年不知读书好，闲游野荡昼加夜。",
          "日高人起慵情惰，缠绵期延无绝期。",
          "淅沥风云沉浮变，爱憎恩仇尽眼帘。",
          "欲学多才文武全，征得人评名声名。",
          "自此生涯多读书，夜半愁眠夜专夜。",
          "忘食咀字文当饭，废寝迷章痴为眠。",
          "身倦意烦金钿坚，唯恐命程不称心。",
          "去世来生亦如是，只恨功业晚难成。",
          "览尽渊深万卷书，天地洪荒学尚浅。",
          "欲驾亲征腾云雾，更上层楼入青天。"
        ]
      },
      {
        id: 21,
        title: "阅前文诗作",
        isPoem: true,
        children: [
          "潇关杰才自古出，湘土莲城满地屋。",
          "近有泽东今汪涵，不名不蕴也实难。",
          "吾辈纵观湘潭史，盛景美食街皆是。",
          "诗文难描此地趣，须君亲往莲城域。"
        ]
      },
      {
        id: 22,
        title: "诉衷情",
        isPoem: true,
        children: [
          "立志出乡学成名，不忘振邦救黔首。",
          "望窗苦寒二十载，谁尝心酸峥嵘年。",
          "雄心伟业功未建，壮志未酬白发生。",
          "力挽狂澜回天术，空怀一腔报国情。",
          "遥想古贤榜题名，辛酸过后尽开颜。",
          "今我来思无可奈，世事变化已万千。",
          "何无穿梭古今法，去从封建服帝制。",
          "沉浮幻境惹人迷，甘自九天云霄坠。",
          "夙愿未了瞑不安，奋进争锋不可殆。",
          "苦却今生死后已，赢得前生后世名。"
        ]
      },
      {
        id: 23,
        title: "无题",
        isPoem: true,
        children: [
          "满头悝絮道不尽，多恨学业晚难成。",
          "一心振华思康衢，无才借言祸百姓。"
        ]
      },
      {
        id: 24,
        title: "人生易老·功千古",
        isPoem: false,
        children: [
          "人初一瞬梦如始，白发苍颜落土终，命何在？人价由人不由天，哭喊怨谩丧那许，亡不知。",
          "孔孟作儒，老庄明道；三国诸葛，名排八阵；南霁之风，世人憾叹。材杰无数，何求无有？立碑刻名，垂青史，不枉此生！"
        ]
      },
      {
        id: 25,
        title: "人生易老·学难成",
        isPoem: false,
        children: [
          "望穿秋梦，寒心凉透，纱枕玉濋颤潇潇。前尘迷梦不知梦，后生多歧悔年少。",
          "耳听世言，红楼梦醒，肝胆赤印照星魂。人生短暂期无涯，一朝恨在学难成。"
        ]
      },
      {
        id: 26,
        title: "千古流芳·毛泽东",
        isPoem: false,
        children: [
          "革命年代，动乱时期，仅一时报，坐观天下。运筹千里之外，帷幄百战之间，再现孔明，摁八图。",
          "年迈误政，全国久滞，英明一世，恨此之时。念昔豪气一身，于此亦可弥救，千古流芳，毛泽东。"
        ]
      },
      {
        id: 27,
        title: "山坡羊·农家娃",
        isPoem: false,
        children: [
          "日初升，夜未去，满是令声唤人起；",
          "徒走越山过河溪，食无餍饱做日中。",
          "忆梦往昔，不堪回首，谁知我农家娃的苦。",
          "春华来，志满怀，偃武修文攒才德；",
          "胸有夙愿容天下，何必针计童苦乐？",
          "过往云烟，轻如鸿毛，旧梦不堪回首往事中。也罢，也罢！"
        ]
      },
      /*{
          id: 28,
          title: '随笔诗',
          children: [
              '萧萧几何时，独倚楼栏处。',
              '自嘲在世晚，人在心已空。',
          ]
      },*/
      /*{
          id: 29,
          title: '随言',
          children: [
              '欲言时局多变幻，现今社会步难行。',
              '江山才子穷出尽，华夏儿女共沾巾。',
          ]
      },*/
      {
        id: 30,
        title: "虞美人·销魂",
        isPoem: true,
        children: [
          "青柳临池，月光同赏，卿余溪边随风愉。",
          "红花满岸，阳晕即晨，离别黯香伴君去。"
        ]
      },
      {
        id: 31,
        title: "正气书香",
        isPoem: true,
        children: [
          "家国万气书香正，山河点饰将势风。",
          "不畏峥嵘埋伏笔，有幸迤逦现忠魂。"
        ]
      },
      /*{
          id: 32,
          title: '长恨空',
          children: [
              '欲问天下事知空，忘却己要务当前。',
              '今朝复明难在求，长恨远事已过时。',
          ]
      },*/
      /*{
          id: 33,
          title: '菩萨蛮·尘世纷扰',
          children: [
              '天下纷纷事事纠，十年终无一日休，尘世多纷扰。',
              '江湖世世魔鬼神，一日忧心白发生，俗事何时消？',
          ]
      },*/
      {
        id: 34,
        title: "忆俗尘·农学才",
        isPoem: false,
        children: [
          "风云巨变，江山才人出。坐观天下，孔明再现，千古流芳，毛泽东。",
          "错发革新，社稷不堪也。众者罹难，怀愁难眠，英明一世，恨此时。"
        ]
      },
      {
        id: 35,
        title: "怀民忧史",
        isPoem: true,
        children: [
          "古今王君顾己利，无虑惜民更无情。",
          "烂笔续史咏千古，一世天荒灭他朝。",
          "国运何始落终许？民待宁心道自结。",
          "欲可正道沧桑了，噩世盘蜒去留情。"
        ]
      },
      {
        id: 36,
        title: "随堂笔记",
        isPoem: true,
        children: [
          "人生在世不称意，朝朝暮暮醉心归。",
          "艴勚莫知我心者，乱走天涯荡无存。",
          "如若世间遇知己，甘与君归为君死。",
          "宓妃迷眼乱人性，清君观世破红尘。",
          "欲脱俗颜存真璞，历世卒年活真谛。",
          "而获赤愿事相违，胆青却变叶黄否？"
        ]
      },
      /*{
          id: 37,
          title: '惜缘情结',
          children: [
              '初始花开心境纯，偶有娇妻在眼前。',
              '深许默誓为她活，心有相连身相随。',
              '少有俞钟知己者，你若离去我怎活？',
              '情语已表无数矣，尔无触动吾心灭。',
              '若无尘缘比翼鸟，只愿来生连理枝。',
              '有幸玉汝此生遇，心已无憾两相见。',
          ]
      },*/
      {
        id: 38,
        title: "永别恨",
        isPoem: true,
        children: [
          "神离驱空人不在，云霄九重泉路寒。",
          "逝灵已去无再返，伤者涕哭泪空流。",
          "思旧悔今无多陪，欲养孝主亲不待。",
          "可怜慈母手中线，今化尔等眼帘泪。"
        ]
      },
      /*{
          id: 39,
          title: '沁心凉·暖春时节还寒心',
          children: [
              '凌晨微风沁心寒，直抖日夜欲控难。不知斯情几来还，哪有寄亲安管？',
              '昨日春风似秋风，凉心凉意又凉身。不似前梦破迷尘，只是时境变迁。',
          ]
      },*/
      {
        id: 40,
        title: "伤红楼",
        isPoem: true,
        children: [
          "红楼，红楼，望却尽头空回眸。",
          "尝闻凡尘逍遥，如往把之周遭，",
          "可谁料？竟是好梦一场笑。",
          "凡间百态世炎凉，各自心中一把刀。",
          "算煎熬，终不成声去喊叫。",
          "人心难治病千首，世情总有冷陈杂。",
          "荫豪楣，少稚蕾，红楼阁中闹灯黑。",
          "于彼时，生来福中度年华，",
          "那知他，人不入眼针相对。",
          "还结局，谙藏世故，人太狡猾，",
          "究得报应弥浮卦。",
          "家道中落，行乞街头，",
          "甚是无人入眼球。",
          "浮萍总任风摇摆，",
          "能几何？",
          "自心能由自身行。",
          "直怨偶，一心迷恋那青楼；",
          "到头来，终付天下去王侯。",
          "浮沉若梦，终成空。"
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(poetries.value, (item) => {
        _push(`<div class="poetry-wrapper" data-v-464ec672><h2 data-v-464ec672>${ssrInterpolate(item.title)}</h2><div class="poetry-content" data-v-464ec672><!--[-->`);
        ssrRenderList(item.children, (photograph) => {
          _push(`<p class="${ssrRenderClass(item.isPoem ? "text-center" : "")}" data-v-464ec672>${ssrInterpolate(photograph)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/PoetryCollection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PoetryCollection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-464ec672"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true,"aside":false},"headers":[],"relativePath":"notes/个人作品/诗词集/index.md","filePath":"notes/个人作品/诗词集/index.md","lastUpdated":null}');
const __default__ = { name: "notes/个人作品/诗词集/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(PoetryCollection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/个人作品/诗词集/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
