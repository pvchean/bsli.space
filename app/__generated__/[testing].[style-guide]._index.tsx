/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Text as Text, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Heading as Heading, Slot as Slot, Paragraph as Paragraph, Span as Span, Blockquote as Blockquote, List as List, ListItem as ListItem, Separator as Separator, CodeText as CodeText, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body, RichTextLink as RichTextLink, Link as Link_1 } from "@webstudio-is/sdk-components-react-router";


      export const projectId = "424b8b88-aeeb-4083-bade-6685af7363cb";

      export const lastPublished = "2026-02-04T07:33:52.985Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"tAFRweP7yGMMQI5CmE4yb"},{"id":"XTdymZ9XqqAKLq2TuXM6-","maxWidth":991},{"id":"3E4R89ToUooxuXCXSOciI","maxWidth":767},{"id":"w1CiYUsWrNY7Y9wcpTy3K","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "bsli-logo-hr_2-640x480_EzVFM3BPUgqqBgDDQY0YK.webp";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["AnekDevanagari-VariableFont_wdth_wght_WlsGXRLNI8fsI8VlvhIUd.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box c11cvd9l c1lufqxe cnbmf4z`}>
<Box
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs c1470z5h c13ho07r c1flzvby c1fhcu5x`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
className={`w-heading c97u9uk cr340of c16tluoy c1iwa1os cbewb4j c4vnhzq ccq64u2`}>
{"Style Guide"}
</Heading>
<Slot>
<Fragment_1>
<Text
className={`w-text`}>
{"Version 1.2"}
</Text>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph ctxsfy ckhpfcg`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cablujx c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c11cvd9l c1lufqxe csf549j c14jnrlx c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 cnbmf4z c1d051iu`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi chlecrf cbn0s32 c15ziikq c1jfo4di c10utwzz c1wvwf6y cp0jmbs c2jpees c1bctvrt cptfpme c16qquiv c89byf cwiuw9u c1fhcu5x c1d051iu`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume ca9k1ea c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c2jpees c1bctvrt cqmqoqg c1d051iu cjc2o43 c13kj1ir c16nciq0`}>
<Box
className={`w-box c1ylbt5d c121ow9u`}>
<Text
className={`w-text c17lgwgr cull5mc c1b5jxj c1mr6vvn cfivbop cc0n72g cj20esf c3eev2k c1qdzuay c1lkbaaj cx8n37q ce5jf0f c1fzb25u c1wvwf6y`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph cihtga9 c1kofstr`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c18rwu55 c9enewt c162yw8a cut6zwa c1vn25wx c1voizkc c3z33ta c109vr0h`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c18rwu55 c9enewt c162yw8a cut6zwa c1vn25wx c1voizkc c3z33ta c109vr0h`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading c1iebxzq cr340of c1iwa1os cbewb4j c3eev2k`}>
{"Foreground"}
</Heading>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c4vnhzq cn26xen`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c1p20jqi c1d051iu`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c145f7eq cn26xen`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c1jt1fo7 cn26xen`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c223jcu cn26xen`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c1iebxzq cr340of c1iwa1os cbewb4j c3eev2k`}>
{"Background"}
</Heading>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--background-primary"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c1ey2qna c1d051iu`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 cilo3jb cn26xen`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--background-accent"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c5elor3 cn26xen`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--background-card"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 ccnq9qh cn26xen`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c1iebxzq cr340of c1iwa1os cbewb4j c3eev2k`}>
{"Other"}
</Heading>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text cx5wgbl c1mr6vvn cfivbop c6yaayu c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf c1kt2uv0`}>
{"--focus-color"}
</Text>
<Box
className={`w-box c1mffhsv cxciect c1o2qwnh c1w7e3f7 cnmxwi8 cyrirbg c1n1fq70 c12v8l65 cn26xen`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c14b9ffx c1san6ol c10utwzz c1wvwf6y cp0jmbs cqryjv3 cdzs6l6 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"button-group"}
</Text>
<Box
className={`w-box c1fsvg17 c1flzvby c1san6ol c1l7q0iu c1i3l1kc cnn2qey`}>
<Link
className={`w-link cl4qqj9 c1jmf9np c18rcc0p c1wj3e6m c1fzf5s c1ahzc86 c1w6jm9 c100axkl c1fedw3o cqarlqx c1xkkw6h c1fhcu5x c6zneyq ckmcig3 cib2qxx chdqs4z`}>
{"button"}
</Link>
<Link
className={`w-link c1mderik cug58nh c18rcc0p c1wj3e6m c1fzf5s c1ahzc86 c1w6jm9 c100axkl c1fedw3o cqarlqx c1xkkw6h c1fhcu5x c6zneyq c1r92k6l cib2qxx chdqs4z`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c14b9ffx c1san6ol c10utwzz c1wvwf6y cp0jmbs cqryjv3 cdzs6l6 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"link"}
</Text>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c97u9uk cr340of c16tluoy c1iwa1os cbewb4j c4vnhzq ccq64u2`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1iebxzq cr340of c1iwa1os cbewb4j c3eev2k`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1hvzz07 cr340of c1iwa1os cbewb4j`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c3xj8hq cr340of c1iwa1os cbewb4j`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c3xj8hq cr340of c1iwa1os cbewb4j`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote cbewb4j ci0n9y5 cqy4eam c1c2tedt c11vigfl`}>
<Span
className={`w-text-1 c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"list"}
</Text>
<List
className={`w-list cbewb4j`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"separator"}
</Text>
<Separator
className={`w-separator c1n170ie c89byf c1iwa1os cbewb4j`} />
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c18rwu55 c9enewt c162yw8a cut6zwa c1vn25wx c1voizkc c3z33ta c109vr0h`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Text
className={`w-text c17lgwgr c1mr6vvn cfivbop cm6nhus c3eev2k c13lfb4j c4w3pr1 cwk6zv9 cq5b81a c5qvjxf`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box c1fsvg17 cp0jmbs c1tbdp3s c16u12qv c74yqvr`}>
<Box
className={`w-box c1fsvg17 cp0jmbs cgxl3bw cwn5zzf c1ov9q2r`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph cihtga9 c1kofstr`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box ca9k1ea cqmqoqg c11hykm7 c1ezwkgn cvtksgq`}>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c1flzvby cafamdi c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--foreground-primary\n--foreground-secondary\n--foreground-accent\n--foreground-muted\n--foreground-border\n\n--background-primary\n--background-secondary\n--background-accent\n--background-card\n\n--gap-xs\n--gap-s\n--gap-m\n--gap-l\n\n--focus-color\n--focus-width\n--focus-offset\n\n--duration-default\n--easing-default"}
className={`w-code-text c18rwu55 c9enewt c162yw8a cut6zwa c3z33ta c89byf c109vr0h c128ldpo`} />
</Box>
<Box
className={`w-box cjxujza c1i7ltwx c19c37rj co52ume c1fsvg17 c14b9ffx c1san6ol c10utwzz c1wvwf6y cp0jmbs c1dw2fcd ck2f9w5 c1d051iu cjc2o43`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 c18rwu55 c9enewt c162yw8a cut6zwa c1vn25wx c1voizkc c3z33ta c109vr0h`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text c18rwu55 c9enewt c162yw8a cut6zwa c3z33ta c89byf c109vr0h c128ldpo`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c828f2h cno0pav czo9i5g c1hqntle c1vcw128 c1iq19mg cdbjjrt c3z33ta co1ll7o cahebid`}>
<Box
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 c1hb1gqv cgxl3bw cwn5zzf c1flzvby c1fhcu5x c1412oo6 c7q89f2`}>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Layout"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Colors"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Links & Buttons"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Elements"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Forms"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Radix"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Utility"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Slots"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Custom"}
</Link>
<Link
className={`w-link cib2qxx chdqs4z c1ni26wq cj6dqoz cee7ro`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs c1l7q0iu c1i3l1kc c1flzvby c1fhcu5x c11cvd9l c1lufqxe cnbmf4z cafamdi`}>
<Heading
tag={"h2"}
className={`w-heading cbwi5wk cr340of c1iwa1os cbewb4j`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1kofstr c3eev2k c1jt1fo7`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<Box
tag={"nav"}
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs c2jpees c1bctvrt c1flzvby c1fhcu5x`}>
<Link
className={`w-link`}>
<Image
loading={"eager"}
className={`w-image`} />
</Link>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box c11cvd9l c1lufqxe cnbmf4z`}>
<Box
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs c2jpees c1bctvrt c1flzvby c1fhcu5x`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box`}>
<Box
className={`w-box cptfpme c16qquiv c1jfo4di c15ziikq c89byf cwiuw9u c1fsvg17 cp0jmbs c2jpees c1bctvrt c1flzvby c1fhcu5x`} />
</Box>
</Fragment_1>
</Slot>
</Box>
<Link_1
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
className={`w-element cfucm7u c1cjzpa1 cvvhphr c1flzvby cafamdi czo9i5g c1bl0qat cqdk6hy ctb8qzz c187g819 c73u5ra c1h1st8w c16kb148 c1yz7wtw c1fhcu5x c153h3rn c6zneyq c8kgf22 c6qekg3 cx81yyj cf631hx c1w9zl6x c1xkkw6h c1iiqnje crp24wo c1xhw62t cez110p c13l961t`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"m12.32 12.416 2.62-8.085a1.205 1.205 0 1 0-2.292-.746l-2.62 8.084a1.205 1.205 0 1 0 2.292.747Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8 7.624c.297 0 .517.175.704.394.207.243.373.545.514.866.634 1.44.753 3.241.753 3.241a1.206 1.206 0 0 0 1.285 1.122 1.207 1.207 0 0 0 1.12-1.287s-.16-2.25-.952-4.05C10.744 6.364 9.594 5.208 8 5.208c-1.594 0-2.744 1.156-3.424 2.7-.792 1.8-.951 4.05-.951 4.05a1.207 1.207 0 0 0 1.12 1.288 1.206 1.206 0 0 0 1.284-1.122s.119-1.8.753-3.24a3.52 3.52 0 0 1 .514-.867c.187-.22.406-.394.704-.394Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M5.973 11.669 3.352 3.585a1.205 1.205 0 1 0-2.293.746l2.622 8.084a1.205 1.205 0 1 0 2.292-.746Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed cwxng9o cacdksa c17ot7td c1wvwf6y`} />
<div
className={`w-element`}>
{"Built with Webstudio"}
</div>
</Link_1>
</Body>
}


      export { Page }
    