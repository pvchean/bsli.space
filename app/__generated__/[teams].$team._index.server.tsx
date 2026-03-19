/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let CMS_Item_URL = "https://cms.bsli.space/items/"
  const system = _props.system
  const CMS_Sponsors_External_1: ResourceRequest = {
    name: "CMS_Sponsors_External",
    url: `${CMS_Item_URL}BSLI_Sponsors_External`,
    searchParams: [
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=60000" },
    ],
  }
  const CMS_Sponsors_External_2: ResourceRequest = {
    name: "CMS_Sponsors_External",
    url: `${CMS_Item_URL}BSLI_Sponsors_External`,
    searchParams: [
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=60000" },
    ],
  }
  const CMS_Subteams_1: ResourceRequest = {
    name: "CMS_Subteams",
    url: `${CMS_Item_URL}BSLI_SubTeams`,
    searchParams: [
      { name: "filter[_and][0][team][Team_Name][_eq]", value: `${system?.params?.team}` },
      { name: "filter[_and][1][name][_neq]", value: "Leadership" },
      { name: "fields", value: "*,images.directus_files_id.*,roles.position.*,roles.member_id.*" },
      { name: "deep[roles][_filter][_and][0][end][_null]", value: "" },
      { name: "deep[roles][_filter][_and][1][position][rank][_gt]", value: "1" },
      { name: "deep[roles][_sort]", value: "-position.rank" },
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=86400" },
    ],
  }
  const CMS_Overview_1: ResourceRequest = {
    name: "CMS_Overview",
    url: `${CMS_Item_URL}BSLI_Projects?fields=*`,
    searchParams: [
      { name: "filter[team][Team_Name][_eq]", value: system?.params?.team },
      { name: "sort", value: "-start" },
      { name: "limit", value: "1" },
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=86400" },
    ],
  }
  const CMS_Leadership_1: ResourceRequest = {
    name: "CMS_Leadership",
    url: `${CMS_Item_URL}BSLI_SubTeams`,
    searchParams: [
      { name: "filter[_and][0][team][Team_Name][_eq]", value: `${system?.params?.team}` },
      { name: "filter[_and][1][name][_eq]", value: "Leadership" },
      { name: "fields", value: "images.directus_files_id,roles.position.*,roles.member_id.*" },
      { name: "deep[roles][_filter][_and][0][end][_null]", value: "" },
      { name: "deep[roles][_filter][_and][1][position][rank][_gt]", value: "1" },
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=86400" },
    ],
  }
  const CurrentDate_2: ResourceRequest = {
    name: "Current Date",
    url: "/$resources/current-date",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const CMS_Team_Project_1: ResourceRequest = {
    name: "CMS_Team_Project",
    url: `${CMS_Item_URL}BSLI_Projects`,
    searchParams: [
      { name: "fields", value: "*,team.*.*" },
      { name: "filter", value: `{"team": {"Team_Name":{"_eq": "${system?.params?.team}"}}}` },
      { name: "sort", value: "-start" },
    ],
    method: "get",
    headers: [
    ],
  }
  const now: ResourceRequest = {
    name: "now",
    url: "/$resources/current-date",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const CMS_Sponsors_external_1: ResourceRequest = {
    name: "CMS_Sponsors_external",
    url: "https://cms.bsli.a2.lab512.org/items/BSLI_Sponsors_External",
    searchParams: [
      { name: "filter[active][_eq]", value: "true" },
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=86400" },
    ],
  }
  const CurrentDate_3: ResourceRequest = {
    name: "Current Date",
    url: "/$resources/current-date",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const CMS_Team_1: ResourceRequest = {
    name: "CMS_Team",
    url: "https://cms.bsli.space/items/BSLI_Teams",
    searchParams: [
      { name: "fields", value: "display_name,purpose_paragraph,goals_paragraph,purpose_image.*,goals_image.*" },
      { name: "filter[Team_Name][_eq]", value: "IREC" },
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMS_Sponsors_External_1", CMS_Sponsors_External_1],
    ["CMS_Sponsors_External_2", CMS_Sponsors_External_2],
    ["CMS_Subteams_1", CMS_Subteams_1],
    ["CMS_Overview_1", CMS_Overview_1],
    ["CMS_Leadership_1", CMS_Leadership_1],
    ["CurrentDate_2", CurrentDate_2],
    ["CMS_Team_Project_1", CMS_Team_Project_1],
    ["now", now],
    ["CMS_Sponsors_external_1", CMS_Sponsors_external_1],
    ["CurrentDate_3", CurrentDate_3],
    ["CMS_Team_1", CMS_Team_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  let system_1 = system
  let CMS_Team = resources.CMS_Team_1
  let CMS_Asset_URL = "https://cms.bsli.space/assets/"
  return {
    title: `BSLI | ${system_1?.params?.team} Team`,
    description: CMS_Team?.data?.data?.[0]?.["purpose_paragraph"],
    excludePageFromSearch: false,
    language: "en-US",
    socialImageAssetName: undefined,
    socialImageUrl: CMS_Asset_URL + CMS_Team?.data?.data?.[0]?.["purpose_image"]?.id,
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "cheandominguez.1@buckeyemail.osu.edu";
    