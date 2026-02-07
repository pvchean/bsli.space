/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let CMS_Item_URL = "https://cms.bsli.a2.lab512.org/items/"
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
  const CurrentDate_1: ResourceRequest = {
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
  const CMS_Member_1: ResourceRequest = {
    name: "CMS_Member",
    url: CMS_Item_URL + "BSLI_Members",
    searchParams: [
      { name: "fields", value: "*,role_id.*.*" },
      { name: "filter[osu_ndn][_eq]", value: system?.params?.ndn },
      { name: "deep[role_id][_sort]", value: "end,start" },
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
  const _data = new Map<string, ResourceRequest>([
    ["CMS_Sponsors_External_1", CMS_Sponsors_External_1],
    ["CMS_Sponsors_External_2", CMS_Sponsors_External_2],
    ["CurrentDate_1", CurrentDate_1],
    ["now", now],
    ["CMS_Member_1", CMS_Member_1],
    ["CMS_Sponsors_external_1", CMS_Sponsors_external_1],
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
    