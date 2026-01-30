/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Box as Box, Input as Input, Image as Image, HtmlEmbed as HtmlEmbed, Text as Text, Slot as Slot, Button as Button, Select as Select, Textarea as Textarea } from "@webstudio-is/sdk-components-react";
import { Link as Link, Link as Link_1, Body as Body, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-router";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "9b45da17-4257-4285-a435-1bcb25f07935";

      export const lastPublished = "2026-01-24T05:58:20.649Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"JeWZuhxgJ6xFecMjot6mX"},{"id":"7R_pY_a-pSU5fIxjXrWpO","maxWidth":1280},{"id":"n4T3mNwpfaQAt_byJBo_3","maxWidth":991},{"id":"7NpsRT-2VljecwaFjF-iK","maxWidth":767},{"id":"TscQoQkYmpoYIKwGtp5tR","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_L4foaoLf5pGuJPKHuza8R.ico";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [PhoneNumber1, set$PhoneNumber1] = useVariableState<any>("+86 536-3290518")
let [PhoneNumber2, set$PhoneNumber2] = useVariableState<any>("+86 536-3526005")
let [MobilePhoneNumber, set$MobilePhoneNumber] = useVariableState<any>("+86 15624145254")
let [ContactEmail, set$ContactEmail] = useVariableState<any>("info@qnpturbines.com")
return <Body
className={`w-element`}>
<Box
className={`w-box c17ls1cr c1hwaj93 c11df7z4 c69ybg3`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n    /* So we don't need to add a token to every paragraph to remove margin. */\n    p {\n        margin: 0;\n    }\n\n    * {\n        /* Make links scroll to their sections smoothly. */\n        scroll-behavior: smooth;\n    }\n\n    /* Nav Trigger show active when submenu is open. */\n    nav button[data-state=\"open\"] {\n        --navigation-menu-trigger-icon-transform: 180deg;\n        color: var(--foreground-muted);\n    }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script>\n  window.addEventListener('load', function () {\n    const navType = performance.getEntriesByType(\"navigation\")[0]?.type;\n\n    if (navType === \"navigate\" || navType === \"reload\") {\n      window.scrollTo(0, 0);\n    }\n  });\n</script>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<div
className={`w-element c1qe5jnu cfs0eor ca3qjfp cpdpg5g cmxxuu7 c1diq6h ci0w4j0 ccaouzb c162drp4 c63rlro cpz3sk5 c6drtsu ci4x79s c1uoblff c1jd49do c1wupk29`}>
<div
className={`w-element c1hwaj93 cfs0eor c69ybg3 c6yej40 c2pzc98 cpk1khk c11ynkw7 c1mmldci cbfiek cmknpi9 c4471nw c1acdga3 c114911c`}>
<Slot>
<Fragment_1>
<Link_1
href={"/"}
className={`w-link`}>
<Image
loading={"eager"}
src={"/assets/logo_iYXNplr_q-Rc4YfBrOORQ.webp"}
aria-label={"Go to home page"}
className={`w-image cfs0eor ca3qjfp c12o5yyg csqwzdv c1pswt0r c11rmp8r c1ncutcj`} />
</Link_1>
</Fragment_1>
</Slot>
<div
className={`w-element c1hwaj93 cfs0eor c1ic1a56 c1vtaprn c16lfpi4 c1rgys6a cehtmkl cp8jkcu c1xmdtq6 c1ukk8kk c1o3zxzp c19j94p5`}>
<Link_1
href={"/"}
prefetch={"intent"}
aria-label={"Go to home page"}
className={`w-link c1qz44hq ckej5u7 cmn8rrp ci26ank c1xxhscp c1bp6is6 cisiec8 c1r0e369 cqa0zom czqunus c1a5p35c`}>
{"Home"}
</Link_1>
<Link_1
href={"/about-us"}
prefetch={"intent"}
aria-label={"Go to about us page"}
className={`w-link c1qz44hq ckej5u7 cmn8rrp ci26ank c1xxhscp c1bp6is6 cisiec8 c14wa33z c1r0e369 cqa0zom czqunus c1a5p35c`}>
{"about us"}
</Link_1>
<Link_1
href={"/products"}
prefetch={"intent"}
aria-label={"Go to products page"}
className={`w-link c1qz44hq ckej5u7 cmn8rrp ci26ank c1xxhscp c1bp6is6 cisiec8 c1r0e369 cqa0zom czqunus c1a5p35c`}>
{"products"}
</Link_1>
<Link_1
href={"/services"}
prefetch={"intent"}
aria-label={"Go to Services page"}
className={`w-link c1qz44hq ckej5u7 cmn8rrp ci26ank c1xxhscp c1bp6is6 cisiec8 c1r0e369 cqa0zom czqunus c1a5p35c`}>
{"services"}
</Link_1>
<Link_1
href={"/news"}
prefetch={"intent"}
aria-label={"Go to news page"}
className={`w-link c1qz44hq ckej5u7 cmn8rrp ci26ank c1xxhscp c1bp6is6 cisiec8 c1r0e369 cqa0zom czqunus c1a5p35c`}>
{"news"}
</Link_1>
<Link_1
href={"/contact-us"}
prefetch={"intent"}
aria-label={"Go to contact us page"}
className={`w-link c1qz44hq ckej5u7 cmn8rrp ci26ank c1xxhscp c1bp6is6 cisiec8 c1r0e369 cqa0zom czqunus c1a5p35c`}>
{"contact"}
</Link_1>
</div>
<div
className={`w-element c1hwaj93 c11df7z4 cx672i8 ca3qjfp c19j94p5`}>
<div
className={`w-element c1hwaj93 cdwqdzj c3p3nc2 c1xo70ou c1jwwfut cypm9hq`}>
<Select
name={"lang"}
id={"lang-select"}
aria-label={"Select website language"}
className={`w-element cpdpg5g cql2kt0 ctxk4ps cvqux84 c13ijjzh c1q9de6q c1t417fb ci4pm0o c1yjer79`}>
<option
label={"English"}
value={"en"}
className={`w-element`}>
{""}
</option>
</Select>
<Image
src={"/assets/US-United-States-Flag-icon_r2kNsrfy0Q6v5zJSRvhlB.png"}
className={`w-image c1a12uy8`} />
</div>
<Input
placeholder={"Search...\n"}
type={"search"}
disabled={true}
name={"Search Bar"}
title={"This feature has not been implemented yet"}
className={`w-element c1qe5jnu ctxk4ps cvqux84 c13ijjzh c1q9de6q cry4hfb cnjzfoc cw5uvjx c1f2ycgv`} />
</div>
<Slot>
<Fragment_1>
<div
className={`w-element c18sbpli cpjzqdn`}>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open navigation menu"}
className={`w-button cv8wtmw cfs0eor ca3qjfp c1sh4exy ct73xvo c1sl81x4 c14fvyra c1stj67y cf6y7p5 c1hxh11g cehtmkl czm2cf2 crt3x6a crew3m2 c6vjsuh c1mpk68v cfb3day csjbsjl c17jkpu3 c15x3q1m c1wtl278 c10xt9kt c19q9bvh c1fcyu3u cvv852j`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
fill={"none"}
viewBox={"0 0 16 16"}
width={"100%"}
height={"100%"}
className={`w-element`}>
<path
stroke={"black"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
d={"M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"}
className={`w-element`} />
</svg>
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1j9cyxv cly3kdm cycu56i cxkv93m cpz3sk5 c1hwaj93 c11df7z4 c1mcynhr c1hwssjk c1j3ppdh cfpb1sv c1jbc577`}>
<DialogContent
className={`w-dialog-content c1gt7zz4 c1hwaj93 c11df7z4 cwqdesk c1pznlyh c14kfnhb c1t417fb c1s8y71l cbfiek cuo5jv4 cp9t8a6 c3dqy5g cl26bw3 c11xksyt cjsopfd`}>
<Box
data-ws-tag="nav"
className={`w-box c1hwaj93 cf4w2qm c69ybg3 ckpd40v c1sb97yg c5vretf c16h49jv`}>
<Slot>
<Fragment_1>
<Link_1
href={"/"}
className={`w-link`}>
<Image
loading={"eager"}
src={"/assets/logo_iYXNplr_q-Rc4YfBrOORQ.webp"}
aria-label={"Go to home page"}
className={`w-image cfs0eor ca3qjfp c12o5yyg csqwzdv c1pswt0r c11rmp8r c1ncutcj`} />
</Link_1>
</Fragment_1>
</Slot>
<DialogClose
className={`w-close-button c18ikl2i cwj0lah cprfmap co75oo4 c1aku48u cddhtuy c1hwaj93 cfs0eor ca3qjfp c195pe7l c4fma0y c15lrgxi c1qz44hq ccfvb11 c1d7qfae ct8kwhh czpeyzf crt3x6a czm2cf2 c6vjsuh cfb3day c1pudjms cdbirjs c1r4ets8 c15x3q1m`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"> <path stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\" /> </svg>"}
className={`w-html-embed c1bpnrzs`} />
</DialogClose>
</Box>
<div
className={`w-element c1hwaj93 cx672i8 ca3qjfp c1knx7yf cti8d2k c1rgys6a cehtmkl cp8jkcu c11df7z4 c1kx52ea c6drtsu cqd1sn9 c1xmdtq6 c1ukk8kk c1o3zxzp`}>
<Link_1
href={"/#About%20Us"}
prefetch={"intent"}
className={`w-link c1iw4gwc cw3v7to caqguf1 c1xj7rv4 cn8st3g c19h2ynq c1gu1idh c1vud2ip c8qbda3 ckhir23 ckej5u7 c987pjo c1uoblff c1jd49do c1gkfn2t c1c8zf5h c18bmhvv`}>
{"Home"}
</Link_1>
<Link_1
href={"/about-us"}
prefetch={"intent"}
className={`w-link c1iw4gwc cw3v7to caqguf1 c1xj7rv4 cmn8rrp c19h2ynq c1gu1idh c1vud2ip c8qbda3 ckhir23 ckej5u7 c987pjo c1uoblff c1jd49do c1gkfn2t c1c8zf5h c18bmhvv`}>
{"about us"}
</Link_1>
<Link_1
href={"/products"}
prefetch={"intent"}
className={`w-link c1iw4gwc cw3v7to caqguf1 c1xj7rv4 cmn8rrp c19h2ynq c1gu1idh c1vud2ip c8qbda3 ckhir23 ckej5u7 c987pjo c1uoblff c1jd49do c1gkfn2t c1c8zf5h c18bmhvv`}>
{"products"}
</Link_1>
<Link_1
href={"/services"}
prefetch={"intent"}
className={`w-link c1iw4gwc cw3v7to caqguf1 c1xj7rv4 cmn8rrp c19h2ynq c1gu1idh c1vud2ip c8qbda3 ckhir23 ckej5u7 c987pjo c1uoblff c1jd49do c1gkfn2t c1c8zf5h c18bmhvv`}>
{"services"}
</Link_1>
<Link_1
href={"/news"}
prefetch={"intent"}
className={`w-link c1iw4gwc cw3v7to caqguf1 c1xj7rv4 cmn8rrp c19h2ynq c1gu1idh c1vud2ip c8qbda3 ckhir23 ckej5u7 c987pjo c1uoblff c1jd49do c1gkfn2t c1c8zf5h c18bmhvv`}>
{"news"}
</Link_1>
<Link_1
href={"/contact-us"}
prefetch={"intent"}
className={`w-link c1iw4gwc cw3v7to caqguf1 c1xj7rv4 cmn8rrp c19h2ynq c1gu1idh c1vud2ip c8qbda3 ckhir23 ckej5u7 cpdpg5g c987pjo c1uoblff c1jd49do c1gkfn2t c1c8zf5h c18bmhvv`}>
{"contact"}
</Link_1>
</div>
</DialogContent>
</DialogOverlay>
</Dialog>
</div>
</Fragment_1>
</Slot>
</div>
</div>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box cbfiek c1mmldci c10e38bv c1hwaj93 cfs0eor ca3qjfp c11df7z4 c1knx7yf cti8d2k c16m0elw cpk1khk c1gatq2q cypm9hq`}>
<div
className={`w-element cfs0eor ca3qjfp c11df7z4`}>
<Image
src={"/assets/Products_Banner_kgchjVP7EDnt4wkotOjD9.png"}
loading={"eager"}
className={`w-image c1knhv4u c4dvu2x c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1l9s2yj c1s7i8t0 c1sg3jzi c1oo5k7l c1yovmlc`} />
</div>
<div
className={`w-element cjbow84 cuo5jv4 c1hwaj93 cf4w2qm c1vxo7ql cyjyvta cyakkz2 cp911us c1vj743w c17ni5cc cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c1ozd5ub c1n7te52 c1gge0d3`}>
<div
className={`w-element c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c1vj743w c17ni5cc cfywv23 c1unljf3 cfs0eor ctm807d c1kx52ea cyys4c6 cznybda c1njmdp4 cw60snx ccf03w7 c18sduje`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c1y6ih9j cypm9hq crlqmg5 c69ybg3 cmcv1hp c153xmxp c1xhwtmm c1wltgcv cv9b0ge c1do62g3 cmmqq4e cb70grx c1y1yc5i c1unis5w cxrzegc cwdmzj4 c3uv146 c156x3lm`}>
<div
className={`w-element c1hwaj93 c11df7z4 c69ybg3`}>
<div
className={`w-element`}>
<h1
className={`w-element caand4 c1nljhgy c1e3pql6 cwe47r5 cn8st3g c1k51def cw9kraa crew3m2 ci4x79s c1uoblff ctj1g1a c1kff9g9 cq28w7p`}>
{"Steam Turbines"}
</h1>
<p
className={`w-element cpqx255`}>
{"Efficient, reliable, and suitable for electricity generation and industrial purposes. Impulse or Reaction Steam turbines, we have it all at QNP. Contact a QNP representative today to discover the best solution for your needs!"}
</p>
</div>
<div
className={`w-element c1hwaj93 c1hezllx`}>
<Link
href={"/products/steam-turbines"}
aria-label={"Go to steam turbine products page"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1k51def c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c19ex2t3 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr ctm807d cbfiek c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
{"learn more"}
</Link>
</div>
</div>
<Image
src={"/assets/抽汽冷凝式汽轮机_XqNhIRGncM1Q5v__wmGAB.jpg"}
loading={"eager"}
className={`w-image c1eft87i c77lyzt c1ml14d5 c10s4plh ccguewj c14kfnhb c1tubsjs cc0gg00 c1l9s2yj c1i0c1ev ci4pm0o c15u6usi c1yj8vhl cpo7gcg cb70grx cn5i0zr c14ey5rm cjlny6m c1pphml2 cepecnc cz5rw2y`} />
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c3p3nc2 cypm9hq crlqmg5 c69ybg3 cmcv1hp c153xmxp c1xhwtmm c1wltgcv cv9b0ge c1do62g3 cmmqq4e cb70grx c1y1yc5i c1unis5w cxrzegc cwdmzj4 c3uv146 c156x3lm`}>
<div
className={`w-element c1t417fb c1oob96g c1hwaj93 c11df7z4 c69ybg3`}>
<div
className={`w-element c11df7z4`}>
<h1
className={`w-element caand4 c1nljhgy c1m8akzc cwe47r5 cn8st3g c1k51def cw9kraa crew3m2 ci4x79s c1uoblff ctj1g1a c1kff9g9`}>
{"Generators"}
</h1>
<p
className={`w-element`}>
{"The generators produced by QNP are three-phase two-pole or four-pole turbine type hidden-pole synchronous generators, which adopt open or closed circulation ventilation system, end cover bearing or ..."}
</p>
</div>
<div
className={`w-element c1hwaj93 c1hezllx`}>
<Link
href={"/products/generators"}
aria-label={"Go to electrical generator products page"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1k51def c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c19ex2t3 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr ctm807d cbfiek c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
{"learn more"}
</Link>
</div>
</div>
<Image
src={"/assets/空内冷汽轮发电机_yykzMYQwuAv20Ga2k_1DX.jpg"}
loading={"eager"}
className={`w-image c1eft87i c77lyzt c1ml14d5 c10s4plh ccguewj c14kfnhb c1tubsjs cc0gg00 c1l9s2yj c1i0c1ev ci4pm0o c15u6usi c1yj8vhl cpo7gcg cb70grx cn5i0zr c14ey5rm cjlny6m c1pphml2 cepecnc cz5rw2y`} />
</div>
</div>
</div>
<div
className={`w-element cjbow84 cuo5jv4 c1hwaj93 cfs0eor ca3qjfp c1nte9kh cyakkz2 cp911us c1vj743w c17ni5cc cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c1y6ih9j c1ozd5ub c1n7te52`}>
<Slot>
<Fragment_1>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c7l9y3j c10ff2yi c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 cfmexvz ci4x79s c1uoblff c1jd49do c1wupk29 c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i`}>
<div
id={"Contact"}
className={`w-element c14kfnhb c1m82zef ci1vwqs c17b6tfb`} />
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def cw9kraa ci4x79s c1uoblff ctj1g1a c1kff9g9`}>
{"send us a message"}
</h2>
<p
className={`w-element c1ft1q3p c5d6b7c cwe47r5 cp076gf c19pdvk7`}>
{"Get in touch with our skilled, experienced, and excellent after-sales service team, waiting to serve all customers’ needs, providing users with fast and high-quality services at any time!"}
{""}
<br />
{""}
{""}
<br />
{""}
{"Follow-up services are carried out throughout the whole process of commissioning, manufacturing, transportation and installation for all QNP projects to ensure customer satisfaction."}
</p>
<Slot>
<Fragment_1>
<RemixForm
method={"post"}
action={"https://api.qnpturbines.com/v1/forms/contact-us-form"}
encType={"multipart/form-data"}
id={"contact-form"}
className={`w-element c1hwaj93 c11df7z4 cps297n c4breu8`}>
<div
id={"contact-form"}
className={`w-element c1hwaj93 cfs0eor c1vxo7ql c1q0g18e c14r3m1p cma995l`}>
<Input
placeholder={"Name*"}
required={true}
type={"text"}
name={"Name"}
maxLength={64}
className={`w-element cjtestj c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c4cc9sy ce1ocq7`} />
<Input
placeholder={"Company"}
name={"Company"}
type={"text"}
maxLength={64}
className={`w-element cjtestj c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c4cc9sy ce1ocq7`} />
<Input
placeholder={"Email*"}
required={true}
type={"email"}
name={"Email"}
maxLength={64}
className={`w-element cjtestj c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c4cc9sy ce1ocq7`} />
<Input
placeholder={"Country"}
type={"text"}
name={"Country"}
maxLength={64}
className={`w-element cjtestj c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c4cc9sy ce1ocq7`} />
<Input
placeholder={"Phone Number"}
type={"tel"}
name={"Phone Number"}
maxLength={32}
className={`w-element cjtestj c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c4cc9sy ce1ocq7`} />
<Input
placeholder={"Website"}
name={"Website"}
type={"text"}
maxLength={64}
className={`w-element cjtestj c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c4cc9sy ce1ocq7`} />
<Textarea
maxLength={2048}
placeholder={"Message / Quote Request*"}
name={"Message"}
required={true}
className={`w-element c1u9az2h c18ke17t c1p3uaoz ctxk4ps cvqux84 c13ijjzh c1q9de6q cw9kraa c1qe5jnu c1pe18rk cbarb8h c11vncl4 c1dmr40p`} />
</div>
<div
className={`w-element c1hwaj93 cfs0eor c197046t`}>
<button
type={"submit"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1k51def c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c1hwaj93 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
{"Submit"}
</button>
</div>
</RemixForm>
</Fragment_1>
</Slot>
</div>
<div
id={"captchaOverlay"}
className={`w-element c1j3ppdh c1jbc577 c2ma348 ccaouzb c162drp4 c63rlro cnwb7jy c18sbpli c1w5w1bg ${"hcaptcha-overlay"}`}>
<div
className={`w-element cpdpg5g c1eft87i c77lyzt c1ml14d5 c10s4plh c1hwaj93 c11df7z4 cfs0eor ca3qjfp c11sbn20 cmf4y3u csqf8gi c1ei7pz2 c1yngxr2 ${"hcaptcha-box"}`}>
<div
data-size={"normal"}
data-callback={"onCaptchaSuccess"}
data-sitekey={"1868fd62-89b4-4560-a084-31dc4fbe0522"}
data-expired-callback={"onCaptchaExpired"}
data-error-callback={"onCaptchaError"}
className={`w-element ${"h-captcha"}`} />
<p
className={`w-element c15inbko c3ngsta c1rvoic`}>
{"You must complete the human verification"}
{""}
<br />
{""}
{"in order to submit the form"}
</p>
<button
id={"cancelCaptchaBtn"}
type={"button"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1k51def c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c1hwaj93 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
{"Cancel"}
</button>
</div>
<HtmlEmbed
code={"<!-- hCaptcha loader -->\n<script>\n(function () {\n  if (!window.hcaptchaScriptLoading) {\n    window.hcaptchaScriptLoading = true;\n\n    setTimeout(function () {\n      const script = document.createElement('script');\n      script.src = 'https://js.hcaptcha.com/1/api.js?onload=hCaptchaInit';\n      script.async = true;\n      script.defer = true;\n      document.head.appendChild(script);\n    }, 10000); // 10,000 ms = 10 seconds\n  }\n})();\n</script>\n\n<!-- Form logic -->\n<script>\n(function () {\n  let formData = null;\n  let formSubmitted = false;\n  let form = null;\n  let overlay = null;\n\n  const cancelBtn = document.getElementById('cancelCaptchaBtn');\n  if (cancelBtn && !cancelBtn._listenerAdded) {\n    cancelBtn.addEventListener('click', () => {\n      overlay.style.display = 'none';\n      form.querySelectorAll('input, button, textarea, select').forEach(el => el.disabled = false);\n    });\n    cancelBtn._listenerAdded = true; // Prevent double-binding\n  }\n\n  // Only define global callbacks once\n  if (!window.onCaptchaSuccess) {\n    window.onCaptchaSuccess = function (token) {\n      if (!formData || !form) return;\n      formData.append('h-captcha-response', token);\n\n      fetch(form.action, {\n        method: 'POST',\n        body: formData\n      }).then(() => {\n        formSubmitted = true;\n        overlay.style.display = 'none';\n        alert(\"Message submitted successfully! Our team will reply to you as soon as possible.\");\n        form.reset();\n        form.querySelectorAll('input, button, textarea, select').forEach(el => el.disabled = false);\n      }).catch(() => {\n        overlay.style.display = 'none';\n        alert(\"Error submitting form\");\n        form.querySelectorAll('input, button, textarea, select').forEach(el => el.disabled = false);\n      });\n    };\n  }\n\n  if (!window.onCaptchaExpired) {\n    window.onCaptchaExpired = function () {\n      if (!formSubmitted && overlay) {\n        overlay.style.display = 'none';\n        alert(\"Captcha expired. Please try again.\");\n        form.querySelectorAll('input, button, textarea, select').forEach(el => el.disabled = false);\n      }\n    };\n  }\n\n  if (!window.onCaptchaError) {\n    window.onCaptchaError = function () {\n      if (!formSubmitted && overlay) {\n        overlay.style.display = 'none';\n        alert(\"Captcha error. Please try again.\");\n        form.querySelectorAll('input, button, textarea, select').forEach(el => el.disabled = false);\n      }\n    };\n  }\n\n  // Define this so it only runs when the script loads the first time\n  window.hCaptchaInit = function () {\n    setupFormLogic();\n  };\n\n  // Safe re-init for SPAs\n  function setupFormLogic() {\n    form = document.getElementById('contact-form');\n    overlay = document.getElementById('captchaOverlay');\n\n    if (!form || !overlay) return;\n\n    if (form._hcaptchaAlreadyHooked) return;\n    form._hcaptchaAlreadyHooked = true;\n\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n      formSubmitted = false;\n      formData = new FormData(form);\n      form.querySelectorAll('input, button, textarea, select').forEach(el => el.disabled = true);\n      overlay.style.display = 'flex';\n    });\n  }\n\n  // In case the hCaptcha script was already loaded before this script runs\n  if (window.hcaptcha && typeof window.hCaptchaInit === 'function') {\n    window.hCaptchaInit();\n  }\n})();\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
</div>
</Fragment_1>
</Slot>
</div>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box cggd2fd`}>
<div
className={`w-element cpk1khk cbfiek c1mmldci`}>
<Box
className={`w-box c1y6ih9j ca3qjfp c1vj743w c17ni5cc c1hwaj93 c1te217r c1kdz4pb c19bf6n8 cxewgql c15r62zr c5w7w6c c1e5qk8u ctbgdjf c194v7yp c1uxalpf c4um3wr c18k0vzg c581mcn`}>
<div
className={`w-element c1ja3vha c19l7ece c11df7z4 cf4w2qm c1vxo7ql c1te217r c1hwaj93 c1gu8x36 c1txal4q`}>
<h2
className={`w-element c5rehfq cehtmkl c1pswt0r c1k51def`}>
{"sign up"}
</h2>
<div
className={`w-element c1hwaj93 cps297n c4breu8 cma995l`}>
<p
className={`w-element c19ex2t3`}>
{"Sign up to access exclusive offers, latest product news, and more!"}
</p>
<div
className={`w-element`}>
<RemixForm
method={"get"}
encType={"application/x-www-form-urlencoded"}
aria-label={"Subscribe Form"}
className={`w-element c1hwaj93 cps297n c4breu8 c1pe1t0k`}>
<Input
placeholder={"Email"}
type={"email"}
required={true}
name={"email"}
className={`w-element c1qe5jnu c1hz5oul cn8st3g c13ctdhs ca5gzuc c123x8r c1r8mq65 ctxk4ps cvqux84 c13ijjzh c1q9de6q cp076gf cry4hfb c1hc3i5k c1hmhrv7`} />
<button
className={`w-element c1hz5oul ctxk4ps cvqux84 c13ijjzh c1q9de6q c1pmzsm9 c1i0c1ev ci4pm0o c13ctdhs ca5gzuc c123x8r c1r8mq65 c2f6rw4`}>
{"Subscribe"}
</button>
</RemixForm>
</div>
</div>
<div
className={`w-element`}>
<h2
className={`w-element c5rehfq cehtmkl c1pswt0r c1k51def`}>
{"connect with us"}
<br />
{""}
</h2>
<Slot>
<Fragment_1>
<div
className={`w-element c1hwaj93 coadzlo c1oesrr9 ck22vl6 c19l2j17`}>
<Link
aria-label={"Our Whatsapp phone number"}
className={`w-element`}>
<div
className={`w-element cvfa173`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\"\naria-label=\"WhatsApp\" role=\"img\"\nviewBox=\"0 0 512 512\"><path\nd=\"m0 0H512V512H0\"\nfill=\"#25d366\"/><path fill=\"#fff\" d=\"m79 434 25.7-93.9a181.1 181.2 0 1170.3 68.7M122.5 391l57-15a150.6 150.6 0 10-41.8-40.6m93-127c2 5 0 10-11 22.2-6 6-4 8 6.6 23s28 29 44 36.5 15 7 21.7-1c15-17 11-21 26-14.2l27 13c8 4 8.4 4 8.5 9s-1.7 18-7 23.6-25 24.8-60 12-59-23-99-77-1.6-86 3.6-88 7-1.5 17-1.3q4 0 7 5\"/></svg>\n"}
className={`w-html-embed`} />
</div>
</Link>
<Link
href={"tel:+86 15624145254"}
aria-label={"Our Wechat phone number"}
className={`w-element`}>
<div
className={`w-element cvfa173`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\"\naria-label=\"WeChat\" role=\"img\"\nviewBox=\"0 0 512 512\"\nfill=\"#fff\"><path\nd=\"m0 0H512V512H0\"\nfill=\"#00c70a\"/><path d=\"M402 369c23-17 38-42 38-70 0-51-50-92-111-92s-110 41-110 92 49 92 110 92c13 0 25-2 36-5 4-1 8 0 9 1l25 14c3 2 6 0 5-4l-6-22c0-3 2-5 4-6m-110-85a15 15 0 110-29 15 15 0 010 29m74 0a15 15 0 110-29 15 15 0 010 29\"/><path d=\"M250 198a18 18 0 000-35 18 18 0 100 35m-89 0a18 18 0 000-35 18 18 0 100 35m44-93c66 0 121 41 131 93-64-4-147 44-123 128-3 0-25 2-51-6-4-1-8 0-11 2l-30 17c-3 1-7-1-6-6l7-24c1-5-1-8-4-10-28-20-45-50-45-83 0-61 59-111 132-111\"/></svg>"}
className={`w-html-embed`} />
</div>
</Link>
<Link
href={"https://www.linkedin.com/company/qnp-turbine/"}
aria-label={"Go to our LinkedIn page"}
className={`w-element`}>
<div
className={`w-element cvfa173`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\"\naria-label=\"LinkedIn\" role=\"img\"\nviewBox=\"0 0 512 512\"\nfill=\"#fff\"><path\nd=\"m0 0H512V512H0\"\nfill=\"#0077b5\"/><circle cx=\"142\" cy=\"138\" r=\"37\"/><path stroke=\"#fff\" stroke-width=\"66\" d=\"M244 194v198M142 194v198\"/><path d=\"M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32\"/></svg>\n"}
className={`w-html-embed`} />
</div>
</Link>
<Link
href={"https://www.facebook.com/QNPower/"}
aria-label={"Go to our Facebook page"}
className={`w-element`}>
<div
className={`w-element cvfa173`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 266.893 266.895\">\n  <rect width=\"266.893\" height=\"266.895\" fill=\"#485a96\"/>\n  <path d=\"M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z\" fill=\"#fff\"/>\n</svg>\n"}
className={`w-html-embed`} />
</div>
</Link>
</div>
</Fragment_1>
</Slot>
</div>
</div>
<div
className={`w-element c1ja3vha c19l7ece c11df7z4 cf4w2qm c1vxo7ql c1te217r c1hwaj93 c151ww2q c1txal4q c1bf1g6`}>
<h2
className={`w-element c5rehfq cehtmkl c1pswt0r c1k51def`}>
{"Get in touch"}
</h2>
<p
className={`w-element c1kiku3z`}>
{"Call or email us to enjoy our fast, reliable service before, during, and after projects!"}
</p>
<div
className={`w-element c1hwaj93 c11df7z4 crk2sef c1qpf0i0 ck22vl6 c19l2j17`}>
<Slot>
<Fragment_1>
<div
className={`w-element c1hwaj93 cfs0eor c1vxo7ql coadzlo c1oesrr9 cma995l`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-phone\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" /></svg>"}
className={`w-html-embed`} />
<Text
className={`w-text`}>
{"Tel:"}
</Text>
<Link
href={`tel:${PhoneNumber1}`}
className={`w-element cf0p5pk cu8qysr c1nyguh5`}>
{`${PhoneNumber1}`}
</Link>
</div>
<div
className={`w-element c1hwaj93 cfs0eor c1vxo7ql coadzlo c1oesrr9 cma995l`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-phone\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" /></svg>"}
className={`w-html-embed`} />
<Text
className={`w-text`}>
{"Tel:"}
</Text>
<Link
href={`tel:${PhoneNumber2}`}
className={`w-element cf0p5pk cu8qysr c1nyguh5`}>
{`${PhoneNumber2}`}
</Link>
</div>
<div
className={`w-element c1hwaj93 cfs0eor c1vxo7ql coadzlo c1oesrr9 cma995l`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-device-mobile\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z\" /><path d=\"M11 4h2\" /><path d=\"M12 17v.01\" /></svg>"}
className={`w-html-embed`} />
<Text
className={`w-text`}>
{"Mobile:"}
</Text>
<Link
href={`tel:${MobilePhoneNumber}`}
className={`w-element cf0p5pk cu8qysr c1nyguh5`}>
{`${MobilePhoneNumber}`}
</Link>
</div>
<div
className={`w-element c1hwaj93 cfs0eor c1vxo7ql coadzlo c1oesrr9 cma995l`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-mail\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\" /><path d=\"M3 7l9 6l9 -6\" /></svg>"}
className={`w-html-embed`} />
<Text
className={`w-text`}>
{"Email:"}
</Text>
<Link
href={`mailto:${ContactEmail}`}
className={`w-element cf0p5pk cu8qysr c1nyguh5`}>
{`${ContactEmail}`}
</Link>
</div>
</Fragment_1>
</Slot>
</div>
</div>
<div
className={`w-element c1ja3vha c19l7ece c11df7z4 cf4w2qm c1vxo7ql c1te217r c1gu8x36 c1hwaj93 c1txal4q`}>
<h2
className={`w-element c5rehfq cehtmkl c1pswt0r c1k51def`}>
{"Our Locations"}
</h2>
<div
className={`w-element c1hwaj93 cf4w2qm c1vxo7ql`}>
<div
className={`w-element cfs0eor c1vxo7ql c11sbn20 cmf4y3u c1y6ih9j c1hwaj93`}>
<div
className={`w-element cvfa173`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-world-pin\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20.972 11.291a9 9 0 1 0 -8.322 9.686\" /><path d=\"M3.6 9h16.8\" /><path d=\"M3.6 15h8.9\" /><path d=\"M11.5 3a17 17 0 0 0 0 18\" /><path d=\"M12.5 3a16.986 16.986 0 0 1 2.578 9.018\" /><path d=\"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z\" /><path d=\"M19 18v.01\" /></svg>"}
className={`w-html-embed`} />
</div>
<p
className={`w-element`}>
{"West End of Dongjing Road, Qingzhou Economic Development Zone, Weifang City, Shandong Province"}
{""}
<br />
{""}
</p>
</div>
</div>
</div>
</Box>
<div
className={`w-element c1uq8m3h c27kisn c1u0ikh cm1xtns ccs8evk c1dv94qm cvo4xvs`}>
<div
className={`w-element c1hwaj93 c69ybg3 cp911us cyakkz2 cmmqq4e c1do62g3 c3uv146 cwdmzj4 c1pe1t0k c8xi9pu c1xoq5oa`}>
<Text
data-ws-tag="div"
className={`w-text c1rvoic cplk5y6`}>
{"© 2025 Shandong Qingneng Steam Turbine Co., Ltd."}
</Text>
<div
className={`w-element c1hwaj93 c1ke3tv4 c10ff2yi cma995l cfs0eor c197046t c1mxkk2n ccw2nbv cyqnoww`}>
<Link
href={"/privacy-statement"}
className={`w-element c1u0ikh c19ex2t3 c1htwclw c1rvoic cplk5y6`}>
{"Privacy Statement"}
</Link>
<Text
className={`w-text c1u0ikh c1rvoic c1kiku3z c19xcw1k`}>
{"Built with <3 using "}
<Link
href={"https://webstudio.is/"}
className={`w-element c5rehfq c3ztxkm c1kiku3z`}>
{"Webstudio"}
</Link>
</Text>
</div>
</div>
</div>
</div>
</Box>
<HtmlEmbed
code={"<script> if (navigator.doNotTrack !== \"1\") { var d = document; var s = d.createElement(\"script\"); s.async = true; s.defer = true; s.src = \"https://umami.qnpturbines.com/script.js\"; s.dataset.websiteId = \"4c852a37-e35a-45f1-b30e-ad084a94d818\"; s.dataset.cache = \"true\"; d.head.appendChild(s); } </script>"}
clientOnly={true}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    