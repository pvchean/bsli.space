/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, Link as Link_1 } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, Box as Box, Image as Image, HtmlEmbed as HtmlEmbed, Slot as Slot, Button as Button, Text as Text, Heading as Heading, Paragraph as Paragraph } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose, Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "424b8b88-aeeb-4083-bade-6685af7363cb";

      export const lastPublished = "2026-01-31T21:10:20.377Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"tAFRweP7yGMMQI5CmE4yb"},{"id":"XTdymZ9XqqAKLq2TuXM6-","maxWidth":991},{"id":"3E4R89ToUooxuXCXSOciI","maxWidth":767},{"id":"w1CiYUsWrNY7Y9wcpTy3K","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "bsli-logo-hr_2-640x480_EzVFM3BPUgqqBgDDQY0YK.webp";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [Active_Members_URL, set$Active_Members_URL] = useVariableState<any>("/members/browse?membersSearch=&membersSearchType=Name&membersSearchScope=Active&membersSortType=Joined")
let [Former_Members_URL, set$Former_Members_URL] = useVariableState<any>("/members/browse?membersSearch=&membersSearchType=Name&membersSearchScope=Retired&membersSortType=Joined")
let [Social_Link, set$Social_Link] = useVariableState<any>("https://linktr.ee/buckeye_sli")
let [CMS_Asset_URL, set$CMS_Asset_URL] = useVariableState<any>("https://cms.bsli.a2.lab512.org/assets/")
let CMS_Sponsors_External = useResource("CMS_Sponsors_External_2")
let CMS_Sponsors_External_1 = useResource("CMS_Sponsors_External_3")
let CurrentDate = useResource("CurrentDate_1")
return <Body
className={`w-element cafamdi c1flzvby`}>
<div
className={`w-element c1fsvg17 cp0jmbs c1412oo6 c18fr3nm`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n    /* So we don't need to add a token to every paragraph to remove margin. */\n    p {\n        margin: 0;\n    }\n\n    * {\n        /* Make links scroll to their sections smoothly. */\n        scroll-behavior: smooth;\n    }\n\n    /* Nav Trigger show active when submenu is open. */\n    nav button[data-state=\"open\"] {\n        --navigation-menu-trigger-icon-transform: 180deg;\n        color: var(--foreground-muted);\n    }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n  body {\n    cursor: url(\"data:image/svg+xml;utf8,\\\n<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000' transform='rotate(0)matrix(-1, 0, 0, 1, 0, 0)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'>\\\n<path d='M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3'/>\\\n<path d='M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3'/>\\\n<path d='M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'/>\\\n</svg>\") 4 4, auto;\n  }\n</style>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<div
className={`w-element c1ha922v caaf2sz ctceiha c1517000 c3as5a5 c1h7pdcy`}>
<Box
tag={"header"}
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u ca9k1ea cp0jmbs c2jpees c1bctvrt c1flzvby c1fhcu5x cmimdx8 c1hqntle caaf2sz cr1yw4f csfjp84 ct7e8mf c14ri6jw c16nciq0 cjv9a89 cobla0g caf9fuo`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link cib2qxx chdqs4z c1fsvg17 c1xkkw6h cee7ro capzw2w c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1flzvby cafamdi cxkx6pe c1jggrh7 cp1jzw6 cuzmxq4 clacsc2`}>
<Image
src={"https://www.bsli.space/_astro/bsli_logo.Bras2UvP.png"}
className={`w-image ch1llrh c11buura`} />
<div
className={`w-element cjl8er8 cv1zxuk c13l961t`}>
{"BSLI"}
</div>
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y camp34b`}>
<NavigationMenu
className={`w-navigation-menu c89byf`}>
<NavigationMenuList
className={`w-menu-list c1fsvg17 c10utwzz c167ums0 caolt3e c1slfvmz c1flzvby cafamdi ca5zzoi cfrk7dk c6zneyq c1cbgey cnjvulf cll65rd cmimdwh`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<Link
href={"/"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq cvfslw5 c1flzvby cafamdi cug58nh c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1dlgajh cb3y8iq ciz9etv cuzmxq4 c138cqna c4o45ll`}>
{"Home"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq cvfslw5 c1flzvby cafamdi cug58nh c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1dlgajh cb3y8iq ciz9etv cuzmxq4 c138cqna c4o45ll`}>
<Text
className={`w-text c6zneyq`}>
{"Teams"}
</Text>
<Box
className={`w-box c1bwj3k1 c1fzb25u c1wvwf6y chnfnc0 c1to3kz4 c152vyhe c1imj6t3 c1kmx7u7 c3air8l c1mq7p96`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1mjxydt cvuc00n c1fsvg17 c2jpees c1bctvrt c1hqntle c1vcw128 c1cjq5fs`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cxkx6pe c1jggrh7`}>
<Link
href={"/teams/Nasa"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq c1flzvby c1san6ol cxkx6pe c1jggrh7 cjxujza c1i7ltwx c19c37rj co52ume c12d0zc7 c1b3b22y cho9p8j c1gjgb2x c1oehldr c1n772oz ckf1t7t czjcsg8 cuzmxq4`}>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1khw8dr c9ffb6f`}>
<Text
tag={"span"}
className={`w-text cjl8er8`}>
{"NASA"}
</Text>
<Text
tag={"span"}
className={`w-text c1jt1fo7`}>
{"A research-based competitive,"}
{""}
<br />
{""}
{"experiential exploration project."}
</Text>
</Box>
</Link>
<Link
href={"/teams/Irec"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq c1flzvby c1san6ol cxkx6pe c1jggrh7 cjxujza c1i7ltwx c19c37rj co52ume c12d0zc7 c1b3b22y cho9p8j c1gjgb2x c1oehldr c1n772oz ckf1t7t czjcsg8 cuzmxq4`}>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1khw8dr c9ffb6f`}>
<Text
tag={"span"}
className={`w-text cjl8er8`}>
{"IREC"}
</Text>
<Text
tag={"span"}
className={`w-text c1jt1fo7`}>
{"A competition team for IREC's"}
{""}
<br />
{""}
{"30k Student Research and Developed"}
{""}
<br />
{""}
{"(SRAD) category."}
</Text>
</Box>
</Link>
<Link
href={"/teams/Liquids"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq c1flzvby c1san6ol cxkx6pe c1jggrh7 cjxujza c1i7ltwx c19c37rj co52ume c12d0zc7 c1b3b22y cho9p8j c1gjgb2x c1oehldr c1n772oz ckf1t7t czjcsg8 cuzmxq4`}>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1khw8dr c9ffb6f`}>
<Text
tag={"span"}
className={`w-text cjl8er8`}>
{"Liquids"}
</Text>
<Text
tag={"span"}
className={`w-text c1jt1fo7`}>
{"A team developing a liquid bi-propellant"}
{""}
<br />
{""}
{"rocket engine for a space-shot rocket."}
</Text>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c1fsvg17 cp0jmbs c1412oo6 cgxl3bw cwn5zzf c1qdzuay c1lkbaaj cx8n37q ce5jf0f cwo73pd ctkbqoa c9ffb6f c1xkkw6h c4vnhzq c1uoj13n c1ewg6un c8e02rt c209sw5 c8mwnvb cwsyufx czfw4y0 cziki7s c96y687 c1xi5py c1rw67qd`}>
<Box
className={`w-box c1fsvg17 c14b9ffx c1san6ol cp0jmbs cgxl3bw cwn5zzf`}>
<Heading
tag={"h3"}
className={`w-heading c1iebxzq cr340of c1iwa1os cbewb4j`}>
{"BSLI Teams"}
</Heading>
</Box>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1san6ol cgxl3bw cwn5zzf`}>
<Paragraph
className={`w-paragraph`}>
{"BSLI is composed of multiple teams"}
{""}
<br />
{""}
{"that work together in order to provie"}
{""}
<br />
{""}
{"students with experience working"}
{""}
<br />
{""}
{"in a large team towards challenging"}
{""}
<br />
{""}
{"goals. Each team focuses in a specific"}
{""}
<br />
{""}
{"category, take a look and see which"}
{""}
<br />
{""}
{"team you want to be part of!"}
</Paragraph>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq cvfslw5 c1flzvby cafamdi cug58nh c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1dlgajh cb3y8iq ciz9etv cuzmxq4 c138cqna c4o45ll`}>
<Text
className={`w-text c6zneyq`}>
{"Members"}
</Text>
<Box
className={`w-box c1bwj3k1 c1fzb25u c1wvwf6y chnfnc0 c1to3kz4 c152vyhe c1imj6t3 c1kmx7u7 c3air8l c1mq7p96`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1mjxydt cvuc00n c1fsvg17 c2jpees c1bctvrt c1hqntle c1vcw128 c1cjq5fs`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cxkx6pe c1jggrh7 c1eve8s5`}>
<Link
href={"/leadership"}
prefetch={"intent"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq c1flzvby c1san6ol cxkx6pe c1jggrh7 cjxujza c1i7ltwx c19c37rj co52ume c12d0zc7 c1b3b22y cho9p8j c1gjgb2x c1oehldr c1n772oz ckf1t7t czjcsg8 cuzmxq4`}>
<Box
className={`w-box ctmc8oc c1pqpmx cjud7nn cgcsuzi c6tuzht cspx408 c3air8l c1mq7p96 cho9p8j`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cjud7nn`} />
</Box>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1khw8dr c9ffb6f`}>
<Text
tag={"span"}
className={`w-text cjl8er8`}>
{"Leadership Team"}
</Text>
<Text
tag={"span"}
className={`w-text c1jt1fo7`}>
{"Keeping BSLI running smoothly"}
</Text>
</Box>
</Link>
<Link
href={Active_Members_URL}
prefetch={"intent"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq c1flzvby c1san6ol cxkx6pe c1jggrh7 cjxujza c1i7ltwx c19c37rj co52ume c12d0zc7 c1b3b22y cho9p8j c1gjgb2x c1oehldr c1n772oz ckf1t7t czjcsg8 cuzmxq4`}>
<Box
className={`w-box ctmc8oc c1pqpmx cjud7nn cgcsuzi c6tuzht cspx408 c3air8l c1mq7p96 cho9p8j`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cjud7nn`} />
</Box>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1khw8dr c9ffb6f`}>
<Text
tag={"span"}
className={`w-text cjl8er8`}>
{"Current Members"}
</Text>
<Text
tag={"span"}
className={`w-text c1jt1fo7`}>
{"Getting things done for launch"}
</Text>
</Box>
</Link>
<Link
href={Former_Members_URL}
prefetch={"intent"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq c1flzvby c1san6ol cxkx6pe c1jggrh7 cjxujza c1i7ltwx c19c37rj co52ume c12d0zc7 c1b3b22y cho9p8j c1gjgb2x c1oehldr c1n772oz ckf1t7t czjcsg8 cuzmxq4`}>
<Box
className={`w-box ctmc8oc c1pqpmx cjud7nn cgcsuzi c6tuzht cspx408 c3air8l c1mq7p96 cho9p8j`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cjud7nn`} />
</Box>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1khw8dr c9ffb6f`}>
<Text
tag={"span"}
className={`w-text cjl8er8`}>
{"Former Members"}
</Text>
<Text
tag={"span"}
className={`w-text c1jt1fo7`}>
{"Benefiting from the experience gained"}
</Text>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c1fsvg17 cp0jmbs c1412oo6 cgxl3bw cwn5zzf c1qdzuay c1lkbaaj cx8n37q ce5jf0f cwo73pd ctkbqoa c9ffb6f c1xkkw6h c4vnhzq c1uoj13n c1ewg6un c8e02rt c209sw5 c8mwnvb c1eve8s5 cwsyufx czfw4y0 cziki7s c96y687 c1xi5py c1rw67qd`}>
<Box
className={`w-box c1fsvg17 c14b9ffx c1san6ol cp0jmbs cgxl3bw cwn5zzf`}>
<Heading
tag={"h3"}
className={`w-heading c1iebxzq cr340of c1iwa1os cbewb4j`}>
{"The BSLI Family"}
</Heading>
</Box>
<Box
className={`w-box c1fsvg17 cp0jmbs c14b9ffx c1san6ol cgxl3bw cwn5zzf`}>
<Paragraph
className={`w-paragraph`}>
{"A repository of all of our wonderful current and past engineers"}
</Paragraph>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<Link
href={"/sponsor"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq cvfslw5 c1flzvby cafamdi cug58nh c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1dlgajh cb3y8iq ciz9etv cuzmxq4 c138cqna c4o45ll`}>
{"Sponsor"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="5"
className={`w-menu-item`}>
<Link
href={"/contact"}
className={`w-link cib2qxx chdqs4z cfucm7u c1xkkw6h c4vnhzq cvfslw5 c1flzvby cafamdi cug58nh c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1dlgajh cb3y8iq ciz9etv cuzmxq4 c138cqna c4o45ll`}>
{"Contact"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box c1mjxydt c1vcw128 cwj95vl c1fsvg17 cafamdi c19ubv75 c4g1j3m c1iq19mg`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport cs5nzqp c1wt6ray c17gfoat c1w6jm9 c100axkl c1fedw3o cqarlqx cqz42d7 cnbmf4z c7u5a6p crioxpz cyg0e3w c209sw5 c8mwnvb c1j4oh4o`} />
<div
className={`w-element c1xwme09 csfhxvn`}>
{" "}
</div>
</Box>
</NavigationMenu>
</Box>
<Box
className={`w-box c1w29cqu camp34b`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c10wrjl3`}>
<Link
href={Social_Link}
className={`w-link cl4qqj9 c1jmf9np c1etu4bm c6v2f5e c1fzf5s cosky7r c1w6jm9 c100axkl c1fedw3o cqarlqx c1xkkw6h c1fhcu5x c6zneyq c1u187jj cuvhotc c6tuzht c1oum3n3 c3air8l c1mq7p96 cnfu8e6 c1fsvg17 cuk7sto c1ymtqd1 ckmcig3 cib2qxx chdqs4z cx9ojor c1oq5ean cfibmfk ccc53j5 c6i7bmd c12g0c4a`}>
<span
className={`w-element`}>
{"Join Us "}
</span>
<p
className={`w-element c508zfy cuvhotc cosi8l5 c1b15gz3 c3air8l c1mq7p96 c1mo5vyb`}>
{"🚀"}
</p>
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box c1xd87pa c1prqdl7`}>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cl4qqj9 c1jmf9np c18rcc0p c1wj3e6m c1fzf5s c1ahzc86 c1w6jm9 c100axkl c1fedw3o cqarlqx c1xkkw6h c1fhcu5x c6zneyq ckmcig3 cib2qxx chdqs4z c6mokt cq0c29d chgeeuj c1143txj c1sg78af ccgrk0p c1ohkffh cvpds31 cs4hfdr c114khjg c15bg5ez`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ani={"fade"}
className={`w-dialog-overlay cp0jmbs c1y78w3t cap329v cccbq4d crf16is chepm2h c1a6y99f c1bwv40z c1xkn8mk c16nciq0 c13kj1ir c1dbveta`}>
<DialogContent
className={`w-dialog-content c10utwzz c16nciq0 c1of7z6c cpj75bb c13kj1ir cebu4ha c5t9kbh c159vw9f c1mrebke cqf1kmb conc72g`}>
<Box
className={`w-box c16nciq0 cobla0g cjv9a89`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link cib2qxx chdqs4z c1fsvg17 c1xkkw6h cee7ro capzw2w c1x5j7jp c1w8q7w3 c4f9xwy c1sm3e4y c1flzvby cafamdi cxkx6pe c1jggrh7 cp1jzw6 cuzmxq4 clacsc2`}>
<Image
src={"https://www.bsli.space/_astro/bsli_logo.Bras2UvP.png"}
className={`w-image ch1llrh c11buura`} />
<div
className={`w-element cjl8er8 cv1zxuk c13l961t`}>
{"BSLI"}
</div>
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cl4qqj9 c1jmf9np c18rcc0p c1wj3e6m c1fzf5s c1ahzc86 c1w6jm9 c100axkl c1fedw3o cqarlqx c1xkkw6h c1fhcu5x c6zneyq ckmcig3 cib2qxx chdqs4z c6mokt cq0c29d chgeeuj c1143txj c1sg78af ccgrk0p c1ohkffh cvpds31 cs4hfdr c114khjg c15bg5ez`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box c16nciq0 cj1r6i8 cf6g7sd c1ghud8g c13kj1ir`}>
<Accordion
collapsible={true}
className={`w-accordion c13kj1ir`}>
<AccordionItem
data-ws-index="0"
className={`w-item cvdddm5`}>
<Link_1
href={"/"}
className={`w-element cib2qxx chdqs4z cj20esf cj6dqoz cee7ro c11ze5x0 c1f3bza8 chwh08j cs4hfdr c1ghud8g c18xtsld c1wsyy83 cypsx38`}>
{"Home"}
</Link_1>
</AccordionItem>
<AccordionItem
data-ws-index="1"
className={`w-item cvdddm5`}>
<AccordionHeader
className={`w-item-header c1fsvg17`}>
<AccordionTrigger
className={`w-item-trigger c11ze5x0 c1f3bza8 chwh08j cs4hfdr c1ghud8g c18xtsld c1wsyy83 cypsx38 c1fsvg17 c10utwzz c167ums0 c1w8b2ns c1flzvby c1jwaylw c15wh6je c1gv7k1f c18q2u3w cy0jph6 c6zneyq cskft4f c1hqx5et cqb32sg`}>
<Text
className={`w-text`}>
{"Teams"}
</Text>
<Box
className={`w-box c1uk46yp c1d9st3e c1glodg c1wvwf6y cuvhotc c1hzukz1 c1k1e95b c1mku3eu c1mq7p96`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
className={`w-item-content c19ubv75 c4g1j3m c1qh3k9k c1kn31ar cuvhotc co9pqhk c1k1e95b c1mku3eu c1mq7p96 c18q2u3w c16nciq0 c13kj1ir cf8ja59 cb6mw6t cmzqacz c19t2nva c1pqfee0`}>
<Link_1
href={"/teams/Nasa"}
target={"_self"}
className={`w-element chwh08j cs4hfdr c18xtsld cei00iu cypsx38 cj20esf`}>
{"NASA SL"}
</Link_1>
<Link_1
href={"/teams/Irec"}
target={"_self"}
className={`w-element chwh08j cs4hfdr c18xtsld cei00iu cypsx38 cj20esf`}>
{"IREC"}
</Link_1>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="2"
className={`w-item cvdddm5`}>
<AccordionHeader
className={`w-item-header c1fsvg17`}>
<AccordionTrigger
className={`w-item-trigger c11ze5x0 c1f3bza8 chwh08j cs4hfdr c1ghud8g c18xtsld c1wsyy83 cypsx38 c1fsvg17 c10utwzz c167ums0 c1w8b2ns c1flzvby c1jwaylw c15wh6je c1gv7k1f c18q2u3w cy0jph6 c6zneyq cskft4f c1hqx5et cqb32sg`}>
<Text
className={`w-text`}>
{"Members"}
</Text>
<Box
className={`w-box c1uk46yp c1d9st3e c1glodg c1wvwf6y cuvhotc c1hzukz1 c1k1e95b c1mku3eu c1mq7p96`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
className={`w-item-content c19ubv75 c4g1j3m c1qh3k9k c1kn31ar cuvhotc co9pqhk c1k1e95b c1mku3eu c1mq7p96 c18q2u3w c16nciq0 c13kj1ir cf8ja59 cb6mw6t cmzqacz c19t2nva c1pqfee0`}>
<Link_1
href={"/leadership"}
className={`w-element chwh08j cs4hfdr c18xtsld cei00iu cypsx38 cj20esf`}>
{"Leadership Members"}
</Link_1>
<Link_1
href={Active_Members_URL}
className={`w-element chwh08j cs4hfdr c18xtsld cei00iu cypsx38 cj20esf`}>
{"Active Members"}
</Link_1>
<Link_1
href={Former_Members_URL}
className={`w-element chwh08j cs4hfdr c18xtsld cei00iu cypsx38 cj20esf`}>
{"Former Members"}
</Link_1>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="4"
className={`w-item cvdddm5`}>
<Link_1
href={"/sponsor"}
className={`w-element cib2qxx chdqs4z cj20esf cj6dqoz cee7ro c11ze5x0 c1f3bza8 chwh08j cs4hfdr c1ghud8g c18xtsld c1wsyy83 cypsx38`}>
{"Sponsor Us!"}
</Link_1>
</AccordionItem>
<AccordionItem
data-ws-index="5"
className={`w-item cvdddm5`}>
<Link_1
href={"/contact"}
className={`w-element cib2qxx chdqs4z cj20esf cj6dqoz cee7ro c11ze5x0 c1f3bza8 chwh08j cs4hfdr c1ghud8g c18xtsld c1wsyy83 cypsx38`}>
{"Contact Us"}
</Link_1>
</AccordionItem>
</Accordion>
</Box>
<Box
className={`w-box co74p4k cmv1zps c1bkp8hc`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c10wrjl3`}>
<Link
href={Social_Link}
className={`w-link cl4qqj9 c1jmf9np c1etu4bm c6v2f5e c1fzf5s cosky7r c1w6jm9 c100axkl c1fedw3o cqarlqx c1xkkw6h c1fhcu5x c6zneyq c1u187jj cuvhotc c6tuzht c1oum3n3 c3air8l c1mq7p96 cnfu8e6 c1fsvg17 cuk7sto c1ymtqd1 ckmcig3 cib2qxx chdqs4z cx9ojor c1oq5ean cfibmfk ccc53j5 c6i7bmd c12g0c4a`}>
<span
className={`w-element`}>
{"Join Us "}
</span>
<p
className={`w-element c508zfy cuvhotc cosi8l5 c1b15gz3 c3air8l c1mq7p96 c1mo5vyb`}>
{"🚀"}
</p>
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</div>
</Fragment_1>
</Slot>
<div
className={`w-element chlecrf cbn0s32 cnbmf4z`}>
<div
className={`w-element cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs cxkx6pe c1jggrh7 c1flzvby c1fhcu5x`}>
<div
className={`w-element c3eev2k c149an7b c3reh9r c8kgf22 c1nzl49g cs5nzqp c145f7eq`}>
<div
className={`w-element`}>
{"404"}
</div>
<div
className={`w-element c1mjxydt c3uabvi chnjbpv c1ov3q5h c54yjzg c1lalx8r`}>
{"404"}
</div>
<div
className={`w-element c1mjxydt c3uabvi c1huqjn9 c1ov3q5h cg41c99 c1lalx8r`}>
{"404"}
</div>
<div
className={`w-element c1mjxydt ctvnhz1 c1wv1eol c89byf ck8rfg2 ceb8qgf`} />
</div>
<p
className={`w-element c1cu6i67 c43u5xt c14s6yal c1g0f1uu c3eev2k ck7r5gb`}>
{"Page not found as it went ballistic and was lost in the New Mexico desert."}
{""}
<br />
{""}
{""}
<br />
{""}
</p>
</div>
</div>
<Slot>
<Fragment_1>
<div
className={`w-element chlecrf c1lufqxe cnbmf4z cd9xxqw c1psuk3c cu3vj2g ckkkp6t`}>
<div
className={`w-element cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs c2jpees c1bctvrt c1flzvby c1fhcu5x cr6l4at c9p96au`}>
<h1
className={`w-element cbwi5wk cr340of c1iwa1os cbewb4j c3eev2k c1ns6fne c1k10hzu`}>
{"Our Awesome Sponsors"}
</h1>
<div
className={`w-element c89byf carfxkz cp92zs6 c57lil3 cptmabw`}>
<div
className={`w-element ${"logo-slider"}`}>
<div
className={`w-element ${"logo-track"}`}>
{[1,2,3]?.map?.((collectionItem_1: any, index_1: number) =>
<Fragment key={index_1}>
{CMS_Sponsors_External?.data?.data?.map?.((collectionItem: any, index: number) =>
<Fragment key={index}>
<Link_1
href={collectionItem?.["Sponsor_Website_URL"]}
target={"_blank"}
className={`w-element`}>
<Image
src={`${CMS_Asset_URL}${collectionItem?.image}`}
className={`w-image clnat8x carfxkz c89byf ccpu1nd cbdmr7j cua263c`} />
</Link_1>
</Fragment>
)}
</Fragment>
)}
</div>
</div>
<HtmlEmbed
code={"<style>.logo-slider {\n  background: #fff;\n  overflow: hidden;\n  left: 0px;\n  position: absolute;\n  right: 0px\n}\n\n.logo-track {\n  display: flex;\n  width: max-content; \n  animation: scroll 40s linear infinite;\n}\n\n.logo-track img {\n  object-fit: contain;\n}\n\n@keyframes scroll {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(-33.333%); }\n}\n</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element c1fsvg17 c1flzvby cafamdi cmr7w05 c19ldtn2 cb6mw6t cmzqacz c194y5ox cmem9uo`}>
{[{"image":"https://www.bsli.space/_astro/OSUCOE.CtuEF25R.webp","Sponsor_Name":"","Sponsor_Website_URL":"https://engineering.osu.edu/"},{"image":"https://www.bsli.space/_astro/osu%20battelle%20center.D64vWBvM.webp","Sponsor_Name":"","Sponsor_Website_URL":"https://battellecenter.osu.edu/"}]?.map?.((collectionItem_3: any, index_3: number) =>
<Fragment key={index_3}>
<Link_1
href={collectionItem_3?.["Sponsor_Website_URL"]}
target={"_blank"}
className={`w-element c1fsvg17 c1flzvby cafamdi`}>
<Image
src={`${collectionItem_3?.image}`}
className={`w-image cpkvuvm cm703g2 c13v84m3 c7zeh76 c19n8h5r`} />
</Link_1>
</Fragment>
)}
</div>
</div>
</div>
<div
className={`w-element c89byf c1czb951 c1vw3iks c1ui0x5x c1fsvg17 cp0jmbs c1flzvby cp37hgp c1dh4qz9 c9znzqy`}>
<div
className={`w-element c1lynjaq c89byf c74yqvr c1fsvg17 cp0jmbs c2jpees c1bctvrt`}>
<div
className={`w-element c1fsvg17 c1412oo6 c1flzvby c13kj1ir cb6mw6t cmzqacz`}>
<Image
src={"https://www.bsli.space/_astro/OSUCOE-Logo.DtgUvi6S.webp"}
className={`w-image cm703g2`} />
<Slot>
<div
className={`w-element c1fsvg17`}>
<Link_1
href={"https://www.linkedin.com/company/the-buckeye-space-launch-initiative"}
target={"_blank"}
className={`w-element clk9q2j c11k4s38 cc74oq0 c1b4x081 cuvhotc c176bk4h cpyozji c3air8l c1mq7p96 c1jt1fo7 cj20esf c16huols cdw8mzm c1f3dy5b`}>
<div
className={`w-element c1mrxjnq cw4wfcb c1flzvby cafamdi`}>
<Slot>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" width=\"1.4em\" height=\"1.4em\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M8 11v5\" /><path d=\"M8 8v.01\" /><path d=\"M12 16v-5\" /><path d=\"M16 16v-3a2 2 0 1 0 -4 0\" /><path d=\"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10\" /></svg>"}
className={`w-html-embed cwxng9o`} />
</Slot>
</div>
</Link_1>
<Link_1
href={"https://www.facebook.com/spacelaunchinitiative/"}
target={"_blank"}
className={`w-element clk9q2j c11k4s38 cc74oq0 c1b4x081 cuvhotc c176bk4h cpyozji c3air8l c1mq7p96 c1jt1fo7 cj20esf c16huols cdw8mzm c1f3dy5b`}>
<div
className={`w-element c1mrxjnq cw4wfcb c1flzvby cafamdi`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3\" /></svg>"}
className={`w-html-embed cwxng9o`} />
</div>
</Link_1>
<Link_1
href={"https://www.youtube.com/@buckeyesli1865/videos"}
target={"_blank"}
className={`w-element clk9q2j c11k4s38 cc74oq0 c1b4x081 cuvhotc c176bk4h cpyozji c3air8l c1mq7p96 c1jt1fo7 cj20esf c16huols cdw8mzm c1f3dy5b`}>
<div
className={`w-element c1mrxjnq cw4wfcb c1flzvby cafamdi`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8\" /><path d=\"M10 9l5 3l-5 3l0 -6\" /></svg>"}
className={`w-html-embed cwxng9o`} />
</div>
</Link_1>
<Link_1
href={"https://www.instagram.com/buckeye_sli/"}
target={"_blank"}
className={`w-element clk9q2j c11k4s38 cc74oq0 c1b4x081 cuvhotc c176bk4h cpyozji c3air8l c1mq7p96 c1jt1fo7 cj20esf c16huols cdw8mzm c1f3dy5b`}>
<div
className={`w-element c1mrxjnq cw4wfcb c1flzvby cafamdi`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /><path d=\"M16.5 7.5v.01\" /></svg>"}
className={`w-html-embed cwxng9o`} />
</div>
</Link_1>
<Link_1
href={"https://github.com/osu-bsli"}
target={"_blank"}
className={`w-element clk9q2j c11k4s38 cc74oq0 c1b4x081 cuvhotc c176bk4h cpyozji c3air8l c1mq7p96 c1jt1fo7 cj20esf c16huols cdw8mzm c1f3dy5b`}>
<div
className={`w-element c1mrxjnq cw4wfcb c1flzvby cafamdi`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-brand-github\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\" /></svg>"}
className={`w-html-embed cwxng9o`} />
</div>
</Link_1>
</div>
</Slot>
</div>
<p
className={`w-element c89byf c3eev2k`}>
{`© ${CurrentDate?.data?.year} Buckeye Space Launch Initiative`}
</p>
<div
className={`w-element c1fsvg17 c2jpees c1bctvrt c1i5lp6y c1jt1fo7 c1412oo6 crr88tp c13kj1ir c191262q`}>
<p
className={`w-element`}>
{"Website Styled By: Brian Jia ("}
<Link_1
href={"mailto:jia.659@buckeyemail.osu.edu"}
className={`w-element cib2qxx chdqs4z c1ni26wq cj6dqoz c1jt1fo7`}>
{"jia.659@buckeyemail.osu.edu"}
</Link_1>
{")"}
</p>
<p
className={`w-element`}>
{"Maintained By: Paul Chean ("}
<Link_1
href={"mailto:cheandominguez.1@buckeyemail.osu.edu"}
className={`w-element cib2qxx chdqs4z c1ni26wq cj6dqoz c1jt1fo7`}>
{"cheandominguez.1@buckeyemail.osu.edu"}
</Link_1>
{")"}
</p>
</div>
</div>
</div>
</Fragment_1>
</Slot>
</div>
</Body>
}


      export { Page }
    