/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, RichTextLink as RichTextLink, Link as Link, Link as Link_1, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, Box as Box, Slot as Slot, Input as Input, Image as Image, HtmlEmbed as HtmlEmbed, Text as Text, Button as Button, Select as Select } from "@webstudio-is/sdk-components-react";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";
import { AnimateChildren as AnimateChildren, StaggerAnimation as StaggerAnimation } from "@webstudio-is/sdk-components-animation";


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

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

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
className={`w-box cbfiek c1mmldci c10e38bv c1hwaj93 cfs0eor ca3qjfp c11df7z4 c1knx7yf cti8d2k c16m0elw cpk1khk c1gatq2q cypm9hq c1oe0otl`}>
<div
className={`w-element cypm9hq c1wvwfq6 c1i0c1ev ci4pm0o cmwfg6r cnv6yzu`}>
<div
className={`w-element c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1mcynhr c1hwssjk c1wvwfq6 czzh73o cbfiek c1mmldci chj81v2 c1l3o9hw`}>
<div
data-slides-per-view={"1"}
data-infinite-loop={"true"}
data-nav={"true"}
data-nav-next-el={".swiper-button-next"}
data-nav-prev-el={".swiper-button-prev"}
data-swiper={"true"}
data-parallax={"true"}
data-slider-speed={"750"}
data-autoplay={"true"}
data-autoplay-delay={"0"}
className={`w-element c14kfnhb cmwfg6r cnv6yzu c1wvwfq6 cbpsstc ${"swiper swiper-c-auto"}`}>
<div
className={`w-element c1hwaj93 cf4w2qm c1vxo7ql c14kfnhb chs5cno cypm9hq c1wvwfq6 crlqmg5 c1vtq11c crc1cb5 cax6tm1 ${"swiper-wrapper"}`}>
<div
className={`w-element c14kfnhb c1i0c1ev ci4pm0o cmwfg6r cnv6yzu c1a12uy8 cypm9hq ${"swiper-slide"}`}>
<Image
src={"/assets/20200520173234307_l4nRvZry_uisOSRHkr2Au.jpeg"}
width={1920}
data-swiper-parallax={"75%"}
data-swiper-parallax-scale={"1.03"}
loading={"eager"}
fetchPriority={"high"}
className={`w-image c1a12uy8 c1l9s2yj cwjov7n c1s2p3de c1djnx40`} />
</div>
<div
className={`w-element c14kfnhb c1i0c1ev ci4pm0o cmwfg6r cnv6yzu c1a12uy8 cypm9hq ${"swiper-slide"}`}>
<Image
src={"/assets/20240326134731229_8Em2kYMpqm8WSr4xBsPp1.jpeg"}
width={1920}
data-swiper-parallax={"75%"}
data-swiper-parallax-scale={"1.03"}
loading={"lazy"}
className={`w-image c1a12uy8 c1l9s2yj ccftrgi c1djnx40 c19l1v5`} />
</div>
<div
className={`w-element c14kfnhb c1i0c1ev ci4pm0o cmwfg6r cnv6yzu c1a12uy8 cypm9hq ${"swiper-slide"}`}>
<Image
src={"/assets/20240326134732721_1umBUdenGItN09UB3plGw.jpeg"}
width={1920}
data-swiper-parallax={"75%"}
data-swiper-parallax-scale={"1.03"}
loading={"lazy"}
className={`w-image c1a12uy8 c1l9s2yj c3ce4sq c1skxt5g c1f5olbo c19l1v5 c183u6g5`} />
</div>
</div>
<div
className={`w-element c1hwaj93 cx672i8 c197046t cwjov7n cv4wk15 cdl6qu7 c11sbn20 cmf4y3u c1roqd8f crb5xud c9gczlv c1qiu6lg cj9plyf`}>
<div
className={`w-element cigaxps cjy71k1 clmzv4a csm0go1 c1hwaj93 cfs0eor ca3qjfp c1a12uy8 c1llwn0i c14kt25 c14kv328 cjjcqrl c18mhujp cj1mvtg ${"swiper-button-prev"}`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg viewBox=\"0 0 24 24\" x=\"0\" y=\"0\" width=\"50%\" height=\"50%\"><g transform=\"matrix(-1,0,0,1,24.17136001586914,0)\"><path fill=\"currentColor\" d=\"M7.412 24 6 22.588l9.881-9.881a1 1 0 0 0 0-1.414L6.017 1.431 7.431.017l9.862 9.862a3 3 0 0 1 0 4.242Z\"></path></g></svg>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</div>
<div
className={`w-element cigaxps cjy71k1 clmzv4a csm0go1 c1hwaj93 cfs0eor ca3qjfp c1a12uy8 c1llwn0i c14kt25 c14kv328 cjjcqrl c18mhujp c14ganw0 ${"swiper-button-next"}`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg viewBox=\"0 0 24 24\" x=\"0\" y=\"0\" width=\"50%\" height=\"50%\"><g transform=\"matrix(-1,0,0,1,24.17136001586914,0)\"><path fill=\"currentColor\" d=\"M7.412 24 6 22.588l9.881-9.881a1 1 0 0 0 0-1.414L6.017 1.431 7.431.017l9.862 9.862a3 3 0 0 1 0 4.242Z\"></path></g></svg>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</div>
</div>
</div>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script src=\"https://unpkg.com/swiper/swiper-bundle.min.js\" defer=\"\"></script>\n<script type=\"module\">\ndocument.querySelectorAll('[data-swiper=\"true\"]:not(.swiper-initialized)').forEach(function(container, index) {\n  \n  const dataset = container.dataset\n  \n  const options = {\n    loop: dataset.infiniteLoop === 'true',\n    speed: parseFloat(dataset.sliderSpeed) || 1000,\n    parallax: dataset.parallax === 'true',\n    spaceBetween: parseFloat(dataset.spaceBetweenSlides) || 0,\n    slidesPerView: dataset.slidesPerView === 'auto' ? 'auto' : parseFloat(dataset.slidesPerView) || 1,\n    effect: dataset.effect || 'slide',\n    fadeEffect: { crossFade: dataset.crossfadeEffect === 'true' },\n    autoplay: dataset.autoplay === 'true' ? {\n      delay: parseFloat(dataset.autoplayDelay) || 5000,\n      disableOnInteraction: dataset.autoplayInteractDisable === 'true',\n    } : false,\n    pagination: dataset.pagination === 'true' ? {\n      el:  container.querySelector(dataset.paginationEl || '.swiper-pagination'),\n      clickable: dataset.paginationClickable === 'true',\n    } : false,\n    navigation: dataset.nav === 'true' ? {\n      nextEl: container.querySelector(dataset.navNextEl || '.swiper-button-next'),\n      prevEl: container.querySelector(dataset.navPrevEl || '.swiper-button-prev'),\n    } : false,\n    freeMode: dataset.freeMode === 'true',\n    centeredSlides: dataset.centeredSlides === 'true', // Apply general setting\n  };\n  \n  new Swiper(container, options);\n});\n</script>"}
clientOnly={true}
executeScriptOnCanvas={false}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</div>
</div>
<h1
className={`w-element cyzo9wi c1nljhgy c1gsg4b8 cwe47r5 c2yl5up c1k51def ci4x79s c1uoblff c1uqey4e c1wupk29 c4e5wte c1j7oda4`}>
{"About us"}
</h1>
<Slot>
<Fragment_1>
<section
className={`w-element cjbow84 cuo5jv4 c1hwaj93 cf4w2qm c69ybg3 c1nte9kh cyakkz2 cp911us c1knx7yf cti8d2k cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c1y6ih9j c4idxmm c1ozd5ub csgkqoj c9iyq6f c1n7te52 c82471s c1pe1t0k cixq0oj c1o8cjkk czixm4w c1hxitid c1uosxp0 c1j95kyk c1mwfw3a`}>
<div
className={`w-element c1hwaj93 c11df7z4 c1knx7yf cti8d2k ca3qjfp cf4w2qm c1l82mzd c1xb2e9k`}>
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci0w4j0 c1o1ddn c1wquhym`}>
{"the "}
<span
className={`w-element c1jjfi8f c1htwclw crwkda7 clm496a c11tbwwm c18xjlmd`}>
{"leading"}
</span>
{" industrial manufacturer since 1993"}
</h2>
<p
className={`w-element c1601kjc c3et322`}>
{"      The main business of Shandong Qingneng Steam Turbine Co., Ltd (hereinafter called QNP) involves steam turbine, generator, EPC projects of power plant, energy-saving renovation, installation and maintenance, etc., and continuously extends its product industry chain. It is a comprehensive manufacturing enterprise integrating scientific research, design, manufacturing, installation, service and EPC projects. The market covers both at home and abroad, and the business scope ranges from single machine to complete set."}
</p>
</div>
<Image
src={"/assets/汽轮机门口_AtPG_hhn7M3l2lUWnCgva.jpg"}
loading={"eager"}
className={`w-image c1l9s2yj c1eft87i c77lyzt c1ml14d5 c10s4plh c1t417fb ci4pm0o c1s7i8t0 cx8nipw c1weonz c184y4xx cg7s5zj c1g2hgso cy3p133 c1ypk2qu cveq8r1`} />
</section>
</Fragment_1>
</Slot>
<div
className={`w-element c1fi0kw1 cuo5jv4 c1hwaj93 cf4w2qm c1vxo7ql cyjyvta cyakkz2 cp911us c1vj743w c17ni5cc cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c2v3q7q c1qz44hq c4fma0y c15lrgxi ccfvb11 c1ozd5ub c1n7te52 c1ylhhjg`}>
<div
className={`w-element c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c1knx7yf cti8d2k c1veac25 c1nb0od0 cfs0eor cyys4c6 cznybda cw60snx c1njmdp4`}>
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci4x79s c1uoblff c1umjwd8 c1wupk29 ctgffn c1yktvrb c19aw4it`}>
{"Why QNP is your best choice"}
</h2>
<div
className={`w-element c1hwaj93 c1knx7yf cti8d2k ctvv4k cp8jkcu c1ozd5ub c15r62zr cngbrcc`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Fade In","description":"Fade in the element as it scrolls into view.","keyframes":[{"offset":0,"styles":{"opacity":{"type":"unit","unit":"number","value":0}}}],"timing":{"easing":"var(--ease-out-2)","fill":"backwards","duration":{"type":"unit","value":500,"unit":"ms"},"rangeStart":["entry",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["entry",{"type":"unit","value":100,"unit":"%"}]}},{"name":"Fly In","description":"A fly in animation moves an element as it scrolls into view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":100}]}}}],"timing":{"easing":"var(--ease-out-2)","fill":"backwards","duration":{"type":"unit","value":500,"unit":"ms"},"rangeStart":["entry",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["entry",{"type":"unit","value":100,"unit":"%"}]}}],"isPinned":false}}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1cduq1k c1t417fb cdatf86 c1vxo7ql cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i csb93d2 ct2lnvt c544xj2`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"We are "}
<span
className={`w-element c1jjfi8f c1htwclw cyys8ct c1v8cvlv c11tbwwm c18xjlmd`}>
{"experts"}
</span>
{" in turbo-machinery"}
</h3>
<p
className={`w-element`}>
{"As the of the largest manufacturing companies in china, we have mastered manufacturing at scale. Our experienced engineers and machinist will create the perfect equipment for you."}
</p>
<div
className={`w-element cyakkz2 c1hwaj93 c11df7z4 c11sbn20 cmf4y3u`}>
<div
className={`w-element cfs0eor c1vxo7ql c11sbn20 cmf4y3u c1y6ih9j c1hwaj93`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-calendar-week\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M7 14h.013\" /><path d=\"M10.01 14h.005\" /><path d=\"M13.01 14h.005\" /><path d=\"M16.015 14h.005\" /><path d=\"M13.015 17h.005\" /><path d=\"M7.01 17h.005\" /><path d=\"M10.01 17h.005\" /></svg>"}
className={`w-html-embed`} />
<Text
data-ws-tag="div"
className={`w-text`}>
{"30+ Years of Experience"}
</Text>
</div>
<div
className={`w-element cfs0eor c1vxo7ql c11sbn20 cmf4y3u c1y6ih9j c1hwaj93`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-bolt\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11\" /></svg>"}
className={`w-html-embed`} />
<Text
data-ws-tag="div"
className={`w-text`}>
{"25GW+ of Capacity Installed"}
</Text>
</div>
<div
className={`w-element cfs0eor c1vxo7ql c11sbn20 cmf4y3u c1y6ih9j c1hwaj93`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-settings\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /></svg>"}
className={`w-html-embed`} />
<Text
data-ws-tag="div"
className={`w-text`}>
{"600+ Units Installed"}
</Text>
</div>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 cgp6gzp c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1t417fb ci4pm0o cwtzh48 c1cduq1k cutzd1e cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e cjtyyfu c1y1yc5i cwujbjr co6ivl9 cp3ds58 c44wqy9`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"We provide "}
<span
className={`w-element c1jjfi8f c1htwclw cyys8ct chh4uuo c11tbwwm c18xjlmd`}>
{"fast"}
</span>
{" deliveries"}
</h3>
<p
className={`w-element`}>
{"At QNP, we make sure each client gets their project done on time, without any delays or budget overruns"}
</p>
<div
className={`w-element c1hwaj93 cuo5jv4 c1eft87i c77lyzt c1ml14d5 c10s4plh`}>
<div
className={`w-element c1hwaj93 c11sbn20 cmf4y3u cx672i8 c1vxo7ql c1lnwtw0 c1s8ppun c1ck8gbt c7pzt1f c11df7z4 cu0hd70`}>
<Text
data-ws-tag="div"
className={`w-text cp076gf cbvshrq c1gvlbm7 ${"progress-text"}`}>
{"QNP"}
</Text>
<Text
data-ws-tag="div"
className={`w-text cp076gf cbvshrq cehtmkl ${"progress-text"}`}>
{"Others"}
</Text>
</div>
<div
className={`w-element c1cduq1k c1t417fb ci4pm0o`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c11sbn20 cmf4y3u c14kfnhb c1lnwtw0 c1a8x6kf c1s8ppun c1t417fb ci4pm0o cv5ym52 ${"bar-on-view"}`}>
<div
className={`w-element cf4w2qm ca3qjfp c1u6b5h2 cpv68n2 c1a12uy8 cwjov7n c1hwaj93 c1pmzsm9 c1rvoic cahkn5y c17t7au0 c17861ur`}>
<Text
data-ws-tag="div"
className={`w-text c14kfnhb c11xtweg`}>
{"Planning"}
</Text>
</div>
<div
className={`w-element cf4w2qm ca3qjfp cj9476j cpv68n2 cskk83j cwjov7n c1hwaj93 c1pmzsm9 c1rvoic cahkn5y c27levq c1sus64i cwc9fyh c1l7rimh`}>
<Text
data-ws-tag="div"
className={`w-text c11xtweg c14kfnhb`}>
{"Design"}
</Text>
</div>
<div
className={`w-element cf4w2qm ca3qjfp c8e4i07 cpv68n2 c1a12uy8 cwjov7n c1hwaj93 c1pmzsm9 c1rvoic cahkn5y c1sus64i cwc9fyh`}>
<Text
data-ws-tag="div"
className={`w-text c14kfnhb c11xtweg c12oglvt`}>
{"Manufacturing"}
</Text>
</div>
<div
className={`w-element cf4w2qm ca3qjfp cn89otq cpv68n2 cskk83j cwjov7n c1hwaj93 c1pmzsm9 c1rvoic cahkn5y c27levq c1sus64i cwc9fyh c1l7rimh c1e24s6`}>
<Text
data-ws-tag="div"
className={`w-text c14kfnhb c11xtweg`}>
{"Testing"}
</Text>
</div>
<div
className={`w-element cf4w2qm ca3qjfp c11x9q1x cpv68n2 c1a12uy8 cwjov7n c1hwaj93 c1pmzsm9 c1rvoic cahkn5y c17t7au0 c17861ur`}>
<Text
data-ws-tag="div"
className={`w-text c14kfnhb c11xtweg c1rvoic c1oxrped`}>
{"Operation"}
</Text>
</div>
<AnimateChildren
action={{"type":"view","subject":"--generated-timeline-33MZSQArlAYAC5z3S9ocQ","animations":[{"name":"New Animation","description":"Create a new animation.","keyframes":[{"offset":0,"styles":{"--bar-progress":{"type":"unit","unit":"%","value":0}}},{"styles":{"--bar-progress":{"type":"unit","unit":"%","value":100}}}],"timing":{"easing":"linear","fill":"both","rangeStart":["cover",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["contain",{"type":"unit","value":100,"unit":"%"}]}}]}}>
<div
className={`w-element c1c97k4k c1wvwfq6 ck0tt0r c77lyzt c1k7mpr c10s4plh cbvshrq cfrmrsc`} />
<div
className={`w-element c19x1arc c1wvwfq6 ck0tt0r c77lyzt c1k7mpr c10s4plh cbvshrq c4bg7qe`} />
</AnimateChildren>
</div>
<div
className={`w-element c1hwaj93 cx672i8 c197046t c117vfuv c1iw4gwc cw3v7to cry4hfb ${"chart-counter"}`}>
<Text
data-ws-tag="div"
className={`w-text cbfiek cd9f1lh c1pmzsm9 cbmxn7o c1xqjxjo ck7swmi`}>
{"Illustrative only"}
</Text>
</div>
</div>
</div>
</div>
</AnimateChildren>
</div>
</div>
</div>
<div
className={`w-element c1fi0kw1 cuo5jv4 c1hwaj93 cf4w2qm c1vxo7ql cyjyvta cyakkz2 cp911us c1vj743w c17ni5cc cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c1ozd5ub c1ljsysi c1n7te52`}>
<div
className={`w-element c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c1knx7yf cti8d2k c1veac25 c1nb0od0 cfs0eor cyys4c6 cznybda cxewgql c19bf6n8`}>
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci4x79s c1uoblff c1umjwd8 c1wupk29`}>
{"What we offer"}
</h2>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Fade In","description":"Fade in the element as it scrolls into view.","keyframes":[{"offset":0,"styles":{"opacity":{"type":"unit","unit":"number","value":0}}}],"timing":{"easing":"linear","fill":"backwards","duration":{"type":"unit","value":1,"unit":"s"},"rangeStart":["contain",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["contain",{"type":"unit","value":50,"unit":"%"}]}},{"name":"Fly In","description":"A fly in animation moves an element as it scrolls into view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":50}]}}}],"timing":{"easing":"linear","fill":"backwards","duration":{"type":"unit","value":1,"unit":"s"},"rangeStart":["contain",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["contain",{"type":"unit","value":50,"unit":"%"}]}}],"isPinned":false,"debug":false}}>
<StaggerAnimation
className={`w-stagger-animation c1mzxru4 c1knx7yf cti8d2k cma995l cp8jkcu c1613xo3 cpk1khk c1dwaweu cypm9hq c1ozd5ub csgkqoj c15r62zr c53pmr4 cngbrcc c82471s c1pe1t0k c21t7td c1o8cjkk c1uosxp0`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element c82471s cakf1rj c282ygl ccw2nbv cyqnoww cts8vso c1hmhrv7 c1hwaj93 cngwqdf cfs0eor c1knx7yf cti8d2k`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Quality Assurance"}
</h3>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"var(--icon-stroke-width)"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element ${"icon icon-tabler icons-tabler-outline icon-tabler-certificate"}`}>
<path
stroke={"none"}
d={"M0 0h24v24H0z"}
fill={"none"}
className={`w-element`} />
<path
d={"M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}
className={`w-element`} />
<path
d={"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}
className={`w-element`} />
<path
d={"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"}
className={`w-element`} />
<path
d={"M6 9l12 0"}
className={`w-element`} />
<path
d={"M6 12l3 0"}
className={`w-element`} />
<path
d={"M6 15l2 0"}
className={`w-element`} />
</svg>
</div>
</div>
<Text
data-ws-tag="div"
className={`w-text`}>
{"We are CE, ISO 9001, 14001, and 45001 Certified and have mastered the craft of manufacturing"}
</Text>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element c82471s cakf1rj c282ygl ccw2nbv cyqnoww cts8vso c1hmhrv7 c1hwaj93 cngwqdf cfs0eor c1knx7yf cti8d2k`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Better Value"}
</h3>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-tag\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
</div>
<Text
data-ws-tag="div"
className={`w-text`}>
{"We help our customers reduce their acquisition and operational expenses through great equipment"}
</Text>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element c82471s cakf1rj c282ygl ccw2nbv cyqnoww cts8vso c1hmhrv7 c1hwaj93 cngwqdf cfs0eor c1knx7yf cti8d2k`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Expert Service"}
</h3>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-headset\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 14v-3a8 8 0 1 1 16 0v3\" /><path d=\"M18 19c0 1.657 -2.686 3 -6 3\" /><path d=\"M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z\" /><path d=\"M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
</div>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Our specialized team will quickly answer your inquiries and help you with any issues regarding our equipment"}
</Text>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element c82471s cakf1rj c282ygl ccw2nbv cyqnoww cts8vso c1hmhrv7 c1hwaj93 cngwqdf cfs0eor c1knx7yf cti8d2k`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Fast Shipping"}
</h3>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5\" /><path d=\"M3 9l4 0\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
</div>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Once the equipment is ready, our team will deliver it swiftly and securely to the installation site"}
</Text>
</div>
</StaggerAnimation>
</AnimateChildren>
</div>
</div>
<h1
id={"Products"}
className={`w-element cyzo9wi c1nljhgy c12yz1b7 cwe47r5 c2yl5up c1k51def ci4x79s c1uoblff c1uqey4e c1wupk29 c4e5wte c1j7oda4 ci6l988 c12bsr2u cdr3mb1`}>
{"Our Products"}
</h1>
<Box
tag={"section"}
className={`w-box cjbow84 cuo5jv4 c1hwaj93 cf4w2qm c1vxo7ql cyjyvta cyakkz2 cp911us c1vj743w c17ni5cc cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c19xbkes c1ozd5ub c1n7te52`}>
<Box
className={`w-box c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c1knx7yf cti8d2k c1veac25 c1nb0od0 cfs0eor cyys4c6 cznybda c7bbilx c14d6sru`}>
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci4x79s c1uoblff c1umjwd8 c1wupk29 c1fe4vhe c1a50kcx`}>
{"steam turbines"}
</h2>
<div
className={`w-element c63p1ag c1ulld7a cf4w2qm c1hwaj93 c11df7z4`}>
<div
className={`w-element c1hwaj93 c11df7z4 c1knx7yf cti8d2k cypm9hq`}>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def cw9kraa cgvpqv9 ci4x79s c1uoblff ctj1g1a c1gkfn2t c14wa33z`}>
{"Types Offered:"}
</h3>
<p
className={`w-element c16veqhn cehtmkl cewsyt cue4bq1`}>
{"Our steam turbines can come in many types, depending on the client's needs"}
</p>
</div>
<Link_1
href={"/products/steam-turbines"}
prefetch={"intent"}
className={`w-link c1mzxru4 c1knx7yf cti8d2k cma995l cp8jkcu c1613xo3 cpk1khk ckej5u7 cmn8rrp c1ozd5ub csgkqoj c15r62zr c53pmr4 cngbrcc c82471s c1pe1t0k cixq0oj c1o8cjkk`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/冷凝式汽轮机_joPHn_rN3ErWW11vWym04.jpg"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 c1ipkkpe ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h4
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def c1g5ho12 c1gymt5u c184y4xx c1h8qjn6`}>
{"Condensing"}
</h4>
</div>
<p
className={`w-element`}>
{"Condensing steam turbines fully extract the energy of steam in order to produce shaft power."}
</p>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/泰国135MW机组-2_LeLRD_P5ohJkX_29oqtVY.jpg"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 c1ipkkpe ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h4
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def c1g5ho12 c1gymt5u c184y4xx c1h8qjn6`}>
{"Extraction Condensing"}
</h4>
</div>
<p
className={`w-element`}>
{"Extraction condensing steam turbines have extraction points where lower pressure steam can be extracted."}
</p>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/背压式汽轮机_-JFtbETGkKyycTWN38X39.jpg"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 c1ipkkpe ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h4
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def c1g5ho12 c1gymt5u c184y4xx c1h8qjn6`}>
{"Back Pressure"}
</h4>
</div>
<p
className={`w-element`}>
{"Back pressure steam turbines have an exhaust pressure above 1 bar for other industrial steam needs."}
</p>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/GI0A1589_KIXHwG5yQFUcCAjmxOiji.JPG"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 c1ipkkpe ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h4
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def c1g5ho12 c1gymt5u c184y4xx c1h8qjn6`}>
{"Extraction Back Pressure"}
</h4>
</div>
<p
className={`w-element`}>
{"Extraction back pressure steam turbines have extraction points where higher pressure steam can be extracted."}
</p>
</div>
</Link_1>
</div>
<div
className={`w-element c1hwaj93 c11df7z4 c1knx7yf cti8d2k cypm9hq`}>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def cw9kraa cgvpqv9 ci4x79s c1uoblff ctj1g1a c1gkfn2t c14wa33z`}>
{"Series Offered:"}
</h3>
<p
className={`w-element c16veqhn cehtmkl cewsyt cue4bq1`}>
{"Our steam turbines come in two series:"}
</p>
</div>
<div
className={`w-element c1hwaj93 c1knx7yf cti8d2k cma995l cp8jkcu c1dwaweu c4idxmm cugofm5 ca3qjfp cwxz3uf c1ozd5ub csgkqoj cwo6rf1 c15r62zr c1j95kyk c16h49jv c16p0h7d cngbrcc c1o8cjkk cvoogz2`}>
<AnimateChildren
action={{"type":"view","animations":[{"name":"Fade In","description":"Fade in the element as it scrolls into view.","keyframes":[{"offset":0,"styles":{"opacity":{"type":"unit","unit":"number","value":0}}}],"timing":{"easing":"var(--ease-out-2)","fill":"backwards","duration":{"type":"unit","value":500,"unit":"ms"},"rangeStart":["entry",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["entry",{"type":"unit","value":100,"unit":"%"}]}},{"name":"Fly In","description":"A fly in animation moves an element as it scrolls into view.","keyframes":[{"offset":0,"styles":{"translate":{"type":"tuple","value":[{"type":"unit","unit":"number","value":0},{"type":"unit","unit":"px","value":100}]}}}],"timing":{"easing":"var(--ease-out-2)","fill":"backwards","duration":{"type":"unit","value":500,"unit":"ms"},"rangeStart":["entry",{"type":"unit","value":0,"unit":"%"}],"rangeEnd":["entry",{"type":"unit","value":100,"unit":"%"}]}}]}}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-galaxy\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 3c-1.333 1 -2 2.5 -2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2 -.667 3.5 -2 4.5\" /><path d=\"M19.794 16.5c-.2 -1.655 -1.165 -2.982 -2.897 -3.982c-2.597 -1.5 -4.897 -.518 -4.897 -.518s-2.299 .982 -4.897 -.518c-1.732 -1 -2.698 -2.327 -2.897 -3.982\" /><path d=\"M19.794 7.5c-1.532 -.655 -3.165 -.482 -4.897 .518c-2.597 1.5 -2.897 3.982 -2.897 3.982s-.299 2.482 -2.897 3.982c-1.732 1 -3.365 1.173 -4.897 .518\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<h4
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Normal Impulse"}
</h4>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Reliable and Efficient Steam Turbine that drives rotors through Impulse using High Velocity Steam Nozzles"}
</Text>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-adjustments-bolt\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M6 4v4\" /><path d=\"M6 12v8\" /><path d=\"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M12 4v10\" /><path d=\"M19 16l-2 3h4l-2 3\" /><path d=\"M12 18v2\" /><path d=\"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M18 4v1\" /><path d=\"M18 9v3\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<h4
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"High Efficiency"}
</h4>
<Text
data-ws-tag="div"
className={`w-text`}>
{"High precision, High Efficiency Steam Turbine composed of Impulse-Reaction blades and a series of low enthalpy drops stages that maximize bardic and thermal energy conversion efficiency "}
</Text>
</div>
</AnimateChildren>
</div>
</div>
</div>
</Box>
<Box
className={`w-box c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c11sbn20 cmf4y3u c1veac25 c1nb0od0 cfs0eor ctvv4k cyys4c6 cznybda c7bbilx c14d6sru`}>
<h2
className={`w-element c1biv8gg c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci4x79s c1uoblff c1umjwd8 c1wupk29 ctgffn c1yktvrb c19aw4it`}>
{"Suitable for many industries"}
</h2>
<p
className={`w-element c16veqhn cehtmkl c142cmue cewsyt cue4bq1`}>
{"Our steam turbines can generate power from a variety of energy sources"}
</p>
<div
className={`w-element c1dwaweu ctvv4k cypm9hq c1613xo3 c1hwaj93 c1lyhs4a c1ypdb17 c1gqh8o0 c1ttav41 cvoogz2 csgkqoj c170k3z5 c1pe1t0k`}>
<div
className={`w-element c1knx7yf c1gqh8o0 cna2wuy cpk1khk c1mzxru4 cfs0eor c69ybg3 c82471s c1pe1t0k c1nsjsqw cq8gsh9 c1o8cjkk c53pmr4 c1ikq3qr`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 c15inbko c1gu8x36 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c c1w4tzip c15j0g95 c153s7oh cwx3236 ch11ofk cts8vso c1pbxqw2 c1q4p8tu cj8x7oq`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-flame\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c142cmue c1k51def`}>
{"Combustion"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Powerful steam turbines that run by combusting fuel in a boiler"}
</Text>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 c15inbko c1gu8x36 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c c1w4tzip c15j0g95 c153s7oh cwx3236 ch11ofk cts8vso c1pbxqw2 c1q4p8tu cj8x7oq`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-glass\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M8 21h8\" /><path d=\"M12 16v5\" /><path d=\"M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6\" /><path d=\"M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0 -10 0\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c142cmue c1k51def`}>
{"Waste Heat"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Recover waste heat from industrial processes such as glass making and metallurgy"}
</Text>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 c15inbko c1gu8x36 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c c1w4tzip c15j0g95 c153s7oh cwx3236 ch11ofk cts8vso c1pbxqw2 c1q4p8tu cj8x7oq`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-trash\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 7l16 0\" /><path d=\"M10 11l0 6\" /><path d=\"M14 11l0 6\" /><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" /><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c142cmue c1k51def`}>
{"Waste Incineration"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Uses the heat from incinerating waste to produce electricity"}
</Text>
</div>
</div>
</div>
<div
className={`w-element c1knx7yf c1gqh8o0 c4idxmm cpk1khk c1mzxru4 c82471s c1pe1t0k csgkqoj cixq0oj c1o8cjkk c1j95kyk c1ikq3qr c1sdbv2v c1jbd0h4`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 c15inbko c1gu8x36 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c c1w4tzip c15j0g95 c153s7oh cwx3236 ch11ofk cts8vso c1pbxqw2 c1q4p8tu cj8x7oq`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-leaf\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 21c.5 -4.5 2.5 -8 7 -10\" /><path d=\"M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c142cmue c1k51def`}>
{"Biomass"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Heat generated from the combustion of biomass to produce electricity"}
</Text>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 c15inbko c1gu8x36 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c c1w4tzip c15j0g95 c153s7oh cwx3236 ch11ofk cts8vso c1pbxqw2 c1q4p8tu cj8x7oq`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<HtmlEmbed
code={"<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\"  height=\"100%\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"currentColor\"  stroke-width=\"var(--icon-stroke-width)\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-temperature\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5\" /><path d=\"M10 9l4 0\" /></svg>"}
className={`w-html-embed c1m7lom2`} />
</div>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c142cmue c1k51def`}>
{"Geothermal"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Harvest the thermal energy of the earth to produce electricity"}
</Text>
</div>
</div>
</div>
</div>
<div
className={`w-element cypm9hq c1hwaj93 cp911us c1gsg4b8`}>
<Link
href={"/products/steam-turbines"}
aria-label={"Go to steam turbine products page"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1k51def c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c1hwaj93 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr ctm807d cbfiek c11sbn20 cmf4y3u c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
<span
className={`w-element`}>
{"see our produt page"}
</span>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"2"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
height={"28"}
width={"28"}
className={`w-element ${"icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-right-line"}`}>
<path
stroke={"none"}
d={"M0 0h24v24H0z"}
fill={"none"}
className={`w-element`} />
<path
d={"M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z"}
className={`w-element`} />
<path
d={"M3 9v6"}
className={`w-element`} />
</svg>
</Link>
</div>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cjbow84 cuo5jv4 c1hwaj93 cfs0eor c1vxo7ql cyjyvta cyakkz2 cp911us c1knx7yf cti8d2k cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c19xbkes c1ozd5ub c1n7te52`}>
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci4x79s c1uoblff c1umjwd8 c1wupk29 c2f6rw4`}>
{"Synchronous Generators"}
</h2>
<Box
className={`w-box c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c1vj743w c17ni5cc c1veac25 c1nb0od0 cfs0eor cyys4c6 cznybda c7bbilx c14d6sru`}>
<div
className={`w-element c1hwaj93 c11df7z4 c1knx7yf cti8d2k cypm9hq`}>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def cw9kraa cgvpqv9 ci4x79s c1uoblff ctj1g1a c1gkfn2t c14wa33z`}>
{"bespoke equipment:"}
</h3>
<p
className={`w-element c16veqhn cehtmkl cewsyt cue4bq1`}>
{"Our generator offerings are flexible, allowing us to produce tailored solutions that perfectly meet the requirements of out clients"}
</p>
</div>
<div
className={`w-element c1mzxru4 c1knx7yf cti8d2k cma995l cp8jkcu c1613xo3 cpk1khk c1ozd5ub csgkqoj c15r62zr c53pmr4 cngbrcc c82471s c1pe1t0k cixq0oj c1o8cjkk`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/空内冷汽轮发电机_yykzMYQwuAv20Ga2k_1DX.jpg"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Air/Water Cooled"}
</h3>
<p
className={`w-element`}>
{"The most suitable cooling method is selected to maintain the generator cool under operation"}
</p>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/四极发电机_6YON1v4TdJItanjrNjlMJ.png"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"66 kV - 230 kV"}
</h3>
<p
className={`w-element`}>
{"Voltage output of the generators are manufactured to the clients electrical requirements"}
</p>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/水氢氢冷却汽轮发电机_dDm3A3LtBFrFO7_eS8gS-.jpg"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"1500 - 3600 RPM"}
</h3>
<p
className={`w-element`}>
{"Many different speeds supported depending on the pole configuration and grid frequency"}
</p>
</div>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c11sbn20 cmf4y3u c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c54s4wf c11oex5n c1y1yc5i cqigqpv c1v5li7h cr87esx cngbrcc cakf1rj c282ygl`}>
<div
className={`w-element c1hwaj93 cf4w2qm ca3qjfp c11df7z4 c1knx7yf cti8d2k`}>
<Image
src={"/assets/ElectricGenerator_Ln2fD9feADGH-owzVlmQ7.jpg"}
loading={"lazy"}
className={`w-image ctxk4ps cvqux84 c1l9s2yj c58nawe ca2f6f0 ci4x79s c1uoblff c1jd49do c1wupk29`} />
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"1.5 MW - 400 MW"}
</h3>
<p
className={`w-element`}>
{"Generators can be manufactured in many capacities. From small scale up to full grid capacities"}
</p>
</div>
</div>
</div>
</div>
<div
className={`w-element c1hwaj93 c11df7z4 c1knx7yf cti8d2k cypm9hq`}>
<div
className={`w-element`}>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def cw9kraa cgvpqv9 ci4x79s c1uoblff ctj1g1a c1gkfn2t c14wa33z`}>
{"Acquisition Options:"}
</h3>
<p
className={`w-element c16veqhn cehtmkl cewsyt cue4bq1`}>
{"We offer our products as either Standalone, or Integrated into one of our Steam Turbines"}
</p>
</div>
<div
className={`w-element c1knx7yf cti8d2k c4idxmm cpk1khk c1hwaj93 ctvv4k cp8jkcu c1dwaweu cypm9hq ca3qjfp c82471s c1pe1t0k cngbrcc csgkqoj c1ozd5ub cwo6rf1 cixq0oj c1o8cjkk czixm4w c1y1yc5i c53pmr4 c15r62zr`}>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"var(--icon-stroke-width)"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element ${"icon icon-tabler icons-tabler-outline icon-tabler-database"}`}>
<path
d={"M12 12m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"}
className={`w-element`} />
<path
d={"M4 12v6a8 3 0 0 0 16 0v-6"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"standalone Unit"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Generators can be sold as an individual unit to be used with other equipment and turbo machinery"}
</Text>
</div>
<div
className={`w-element c1nb0od0 c1lnwtw0 c1veac25 c1s8ppun c1knx7yf cti8d2k c1eft87i c77lyzt c1ml14d5 c10s4plh cpdpg5g cxgqzuo c1hwaj93 c11df7z4 c151ww2q c1t417fb cfs0eor c16g8tyb cpjvwjo c8wij88 c15inbko culpj3d ccq3oeg c14qyylf czv7hn1 c1gli9w2 cmcv1hp c153xmxp c1xhwtmm c1wltgcv c1jbd0h4 c1do62g3 cmmqq4e c1y1yc5i c5de8fx cbj8tji c1adihq0 c1r0e369 cqa0zom czqunus c1a5p35c ct5goa6 c15j0g95 c153s7oh cwx3236 c1q4p8tu`}>
<div
className={`w-element ccjpesr czimrjb c1g3q9q8 c7uwewa cgu80i4 c1czbr71 c1kain0i c1g5w1xz c15mb727 c1912r3o c1h1ulq0 c1k88m4m c1mz89mi c1opg6n7 cppwnaa catti9s c1kps1ra cnozlni`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"var(--icon-stroke-width)"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element ${"icon icon-tabler icons-tabler-outline icon-tabler-database"}`}>
<path
stroke={"none"}
d={"M0 0h24v24H0z"}
fill={"none"}
className={`w-element`} />
<path
d={"M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"}
className={`w-element`} />
<path
d={"M4 6v6a8 3 0 0 0 16 0v-6"}
className={`w-element`} />
<path
d={"M4 12v6a8 3 0 0 0 16 0v-6"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element ctm807d c1nljhgy c1e3pql6 c1w1v2ay c1k51def`}>
{"Integrated Unit"}
</h3>
<Text
data-ws-tag="div"
className={`w-text`}>
{"Generators can be sold along-side a tailored steam turbine for perfect operation with minimal downtime and installation time"}
</Text>
</div>
</div>
</div>
</Box>
<div
className={`w-element cypm9hq c1hwaj93 cp911us`}>
<Link
href={"/products/generators"}
aria-label={"Go to electrical generator products page"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1k51def c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c1hwaj93 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr ctm807d cbfiek c11sbn20 cmf4y3u c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
<span
className={`w-element`}>
{"see our product page"}
</span>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"2"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
height={"28"}
width={"28"}
className={`w-element ${"icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-right-line"}`}>
<path
stroke={"none"}
d={"M0 0h24v24H0z"}
fill={"none"}
className={`w-element`} />
<path
d={"M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z"}
className={`w-element`} />
<path
d={"M3 9v6"}
className={`w-element`} />
</svg>
</Link>
</div>
</Box>
<Slot>
<Fragment_1>
<div
className={`w-element cjbow84 cuo5jv4 c1hwaj93 cf4w2qm c1vxo7ql c12t1ny cyakkz2 cp911us c1vj743w c17ni5cc cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c12yz1b7 c1ozd5ub c1n7te52 c3up2zw co3mvn0`}>
<div
className={`w-element c1mmldci cbfiek cypm9hq cpk1khk c1hwaj93 c11df7z4 c1vxo7ql c1knx7yf cti8d2k c1veac25 c1nb0od0 cfs0eor ckuk6vt cyys4c6 cznybda cxewgql c19bf6n8`}>
<h2
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def ci4x79s c1uoblff c1umjwd8 c1wupk29`}>
{"Resources"}
</h2>
<p
className={`w-element c16veqhn cehtmkl c15inbko cewsyt cue4bq1`}>
{"Our team of "}
<span
className={`w-element c1jjfi8f c1htwclw c1he3zlu chh4uuo c11tbwwm c18xjlmd`}>
{"Experts"}
</span>
{" are the best resource for assistance. For general information about our products, feel free to read through our brochures and catalogs!"}
</p>
<div
className={`w-element c1hwaj93 cfs0eor c1knx7yf cti8d2k cq9ilfk c1yg2tm2 co48cgp cu0hd70 c1pe1t0k`}>
<Link
href={"/files/QNP_Steam_Turbine_Brochure.pdf"}
download={true}
target={"_blank"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1kiku3z c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c1hwaj93 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
<div
className={`w-element c1hwaj93 crk2sef c1qpf0i0 cfs0eor ca3qjfp`}>
<Slot>
<Fragment_1>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"2"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
height={"19.2"}
width={"19.2"}
className={`w-element c1r55pdj c1ykku0c`}>
<path
stroke={"none"}
d={"M0 0h24v24H0z"}
fill={"none"}
className={`w-element`} />
<path
d={"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"}
className={`w-element`} />
</svg>
</Fragment_1>
</Slot>
<p
className={`w-element`}>
{"Steam Turbine Brochure.pdf"}
</p>
</div>
</Link>
<Link
download={true}
href={"/files/QNP_Generator_Brochure.pdf"}
target={"_blank"}
className={`w-element cqokvus cbytcx9 c1iw4gwc cw3v7to caqguf1 cfpiuje ctxk4ps cvqux84 c13ijjzh c1q9de6q ckej5u7 c1kiku3z c1h7necr crx6tba c10byatf cc21hos c8qbda3 ckhir23 c19ex2t3 cfs0eor c1vxo7ql c1ql0qj0 c18tpsr c1vwwfxq c11ldhx7 c1q3k6zn cgkdo6a cluuk7b c16pppkp`}>
<div
className={`w-element c1hwaj93 crk2sef c1qpf0i0 cfs0eor`}>
<Slot>
<Fragment_1>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 24 24"}
fill={"none"}
stroke={"currentColor"}
strokeWidth={"2"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
height={"19.2"}
width={"19.2"}
className={`w-element c1r55pdj c1ykku0c`}>
<path
stroke={"none"}
d={"M0 0h24v24H0z"}
fill={"none"}
className={`w-element`} />
<path
d={"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"}
className={`w-element`} />
</svg>
</Fragment_1>
</Slot>
<Text
data-ws-tag="div"
className={`w-text`}>
{"QNP Generator Brochure.pdf"}
</Text>
</div>
</Link>
</div>
</div>
</div>
</Fragment_1>
</Slot>
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
    