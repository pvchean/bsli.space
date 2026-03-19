/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let CMS_Item_URL = "https://cms.bsli.space/items/"
  const system = _props.system
  let CMS_Default_Limit = 25
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
  const CurrentDate_2: ResourceRequest = {
    name: "Current Date",
    url: "/$resources/current-date",
    searchParams: [
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
  const CMS_Recruitment_1: ResourceRequest = {
    name: "CMS_Recruitment",
    url: CMS_Item_URL + "BSLI_Member_Recruitment",
    searchParams: [
      { name: "fields", value: "id,status,title,suggested_majors,responsibilities,contact_email,team.display_name,subteam.name,date,commitment,keywords,contact_member.Name,contact_member.Email,contact_member.Major,contact_member.role_id.*" },
      { name: "sort", value: `${system?.search?.searchOrder == "on" ? '-' : ''}${system?.search?.sortType}` },
      { name: "filter", value: `{"_and":[{"${system?.search?.searchType}":{"${system?.search?.search == '' ? "_nnull" : "_icontains"}":"${system?.search?.search == '' ? true : system?.search?.search}"}}]}`
 },
      { name: "limit", value: system?.search?.searchLimit != null && system?.search?.searchLimit > 0 ? system?.search?.searchLimit : CMS_Default_Limit },
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMS_Sponsors_External_1", CMS_Sponsors_External_1],
    ["CMS_Sponsors_External_2", CMS_Sponsors_External_2],
    ["CurrentDate_2", CurrentDate_2],
    ["now", now],
    ["CMS_Sponsors_external_1", CMS_Sponsors_external_1],
    ["CurrentDate_3", CurrentDate_3],
    ["CMS_Recruitment_1", CMS_Recruitment_1],
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
    title: "BSLI | Work with us!",
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


      export const contactEmail = "cheandominguez.1@buckeyemail.osu.edu";
    