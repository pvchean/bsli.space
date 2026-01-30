/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let CMS_Item_URL = "https://cms.bsli.a2.lab512.org/items/"
  const system = _props.system
  const CMS_Sponsors_External_3: ResourceRequest = {
    name: "CMS_Sponsors_External",
    url: `${CMS_Item_URL}BSLI_Sponsors_External`,
    searchParams: [
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=60000" },
    ],
  }
  const CMS_Sponsors_External_4: ResourceRequest = {
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
    url: `${CMS_Item_URL}BSLI_SubTeams?deep[important_roles][_filter][end][_null]`,
    searchParams: [
      { name: "filter[_and][0][team][Team_Name][_eq]", value: `${system?.params?.team}` },
      { name: "filter[_and][1][name][_neq]", value: "Leadership" },
      { name: "fields", value: "*,images.directus_files_id,roles.*,roles.member_id.*" },
      { name: "deep[roles][_filter][_and][0][end][_null]", value: "" },
      { name: "deep[roles][_filter][_and][1][rank][_gt]", value: "1" },
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
      { name: "filter[team][BSLI_Teams_id][Team_Name][_eq]", value: system?.params?.team },
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
    url: `${CMS_Item_URL}BSLI_SubTeams?deep[important_roles][_filter][end][_null]`,
    searchParams: [
      { name: "filter[_and][0][team][Team_Name][_eq]", value: `${system?.params?.team}` },
      { name: "filter[_and][1][name][_eq]", value: "Leadership" },
      { name: "fields", value: "*,images.directus_files_id,important_roles.*,important_roles.member_id.*,roles.*.*" },
      { name: "deep[roles][_filter][_and][0][end][_null]", value: "" },
      { name: "deep[roles][_filter][_and][1][rank][_gt]", value: "1" },
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=86400" },
    ],
  }
  const CMS_Team_1: ResourceRequest = {
    name: "CMS_Team",
    url: `${CMS_Item_URL}BSLI_Teams`,
    searchParams: [
      { name: "fields", value: "display_name,purpose_paragraph,goals_paragraph,purpose_image,goals_image" },
      { name: "filter[Team_Name][_eq]", value: system?.params?.team },
    ],
    method: "get",
    headers: [
    ],
  }
  const CMS_Sponsors_External_2: ResourceRequest = {
    name: "CMS_Sponsors_External",
    url: `${CMS_Item_URL}BSLI_Sponsors_External`,
    searchParams: [
    ],
    method: "get",
    headers: [
      { name: "Cache-Control", value: "max-age=86400" },
    ],
  }
  const CurrentDate_1: ResourceRequest = {
    name: "Current Date",
    url: "/$resources/current-date",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMS_Sponsors_External_3", CMS_Sponsors_External_3],
    ["CMS_Sponsors_External_4", CMS_Sponsors_External_4],
    ["CMS_Subteams_1", CMS_Subteams_1],
    ["CMS_Overview_1", CMS_Overview_1],
    ["CMS_Leadership_1", CMS_Leadership_1],
    ["CMS_Team_1", CMS_Team_1],
    ["CMS_Sponsors_External_2", CMS_Sponsors_External_2],
    ["CurrentDate_1", CurrentDate_1],
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
  return {
    title: "Untitled",
    description: "",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
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


      export const contactEmail = "pvchean@gmail.com";
    