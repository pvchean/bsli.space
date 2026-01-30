/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Box as Box, Input as Input, Image as Image, HtmlEmbed as HtmlEmbed, Text as Text, Slot as Slot, Button as Button, Select as Select } from "@webstudio-is/sdk-components-react";
import { Body as Body, Link as Link, Link as Link_1, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-router";
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
<section
className={`w-element cjbow84 cpdpg5g c1hwaj93 cf4w2qm c1vxo7ql c1nte9kh cyakkz2 cp911us c1knx7yf cti8d2k cpk1khk cypm9hq c1ct96h3 cafzb5u c1ov5wtd c1l43p3t c1s7i8t0 c11df7z4 c1ozd5ub c1n7te52`}>
<h1
className={`w-element caand4 c1nljhgy c1e3pql6 c1w1v2ay cn8st3g c1k51def`}>
{"Privacy Statement"}
</h1>
<p
className={`w-element c2tza3x ctm807d`}>
{"     QNP is committed to protecting your privacy with which QNPTurbines website (the \"website\") may come into contact. Please read carefully our privacy policy and protocol before using the website. "}
{""}
<br />
{""}
{" "}
{""}
<br />
{""}
<b
className={`w-element`}>
{"Personal Information"}
</b>
{" "}
{""}
<br />
{""}
{"     In general, you are not required to provide such private information as your name when visiting our website. But particular circumstance may give rise to information requirements, for example, when you send email to us or subscribe to newsletter for free, we may need your email address, name and contact information; when you apply for our job, we may need your name, gender, age, and education background. Such information is needed to accomplish a deal/process or improve the service."}
{""}
<br />
{""}
{""}
<br />
{""}
{"     A log of domain and IP of visitors will be automatically recorded. These information can only identify the computer with which the visitor browse the website rather than the individual visitors. We will use such information to analyze coverage and traffic of the website, so as to better understand users' preference and improve the service we provide. We do not establish link between the log and visitors' personal data."}
{""}
<br />
{""}
{" "}
{""}
<br />
{""}
<b
className={`w-element`}>
{"Security"}
</b>
{""}
<br />
{""}
{"     We have adopted necessary security policies, protocols, and technical measures to strictly manage and protect your personal information and prevent it from unauthorized access and alteration, improper use or disclosure, sabotage or leakage."}
{""}
<br />
{""}
{"When necessary, we will have to appoint a third party to assist us in providing the information, goods and services you need, or help us process and analyze the information, which will make your personal information accessible to the third party. We promise that the third party will keep your personal information secrete and not use it for purpose other than the services authorized by us. "}
{""}
<br />
{""}
{" "}
{""}
<br />
{""}
<b
className={`w-element`}>
{"Link"}
</b>
{""}
<br />
{""}
{"     To provide information and convenience, the website contains links to website of a third party including our subsidiary company (hereafter referred as the \"third-party website\"). When visiting the third-party websites, you exit our website. We have no control over the third-party websites or their privacy protocol which may differ from ours. We make no warranty or representation as to the third-party websites. This privacy statement of this website is not applicable to the disclosure of your personal information to any third party. In case the third-party websites offer to share their pool of personal information with us, such information sharing is only subject to their privacy policy."}
{""}
<br />
{""}
{" "}
{""}
<br />
{""}
<b
className={`w-element`}>
{"Disclaimer"}
</b>
{""}
<br />
{""}
{"     The website disclaims liability for any loss if:"}
{""}
<br />
{""}
{"1. Your information is disclosed to an administrative or judiciary institution, or for the sake of public security, as required by applicable laws, regulations and codes "}
{""}
<br />
{""}
{"2. Your information is leaked, lost, appropriated or tampered with as a result of force majeure that interrupts the network, such as computer virus or government order for suspension "}
{""}
<br />
{""}
{"3. Leakage of personal information by other website linked with the website and any legal dispute and consequence arising from such a leakage "}
{""}
<br />
{""}
{"4. Leakage of personal information not due to our willful misconduct and gross negligence. "}
{""}
<br />
{""}
{" "}
{""}
<br />
{""}
<b
className={`w-element`}>
{"Governing Law"}
</b>
{" "}
{""}
<br />
{""}
{"     Any litigation or dispute related to this privacy statement shall be governed by applicable laws of the People's Republic of China."}
{""}
<br />
{""}
{""}
<br />
{""}
{"qnpower reserves all rights to interpret, revise and update this privacy statement."}
</p>
</section>
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
    