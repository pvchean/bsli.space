/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const CMSData_2: ResourceRequest = {
    name: "CMS Data",
    url: "https://cms.qnpturbines.com/items/Services_SpareParts_SteamTurbine",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const CMSData_3: ResourceRequest = {
    name: "CMS Data",
    url: "https://cms.e2.lab512.org/items/Services_SpareParts_Generator",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMSData_2", CMSData_2],
    ["CMSData_3", CMSData_3],
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
    title: "Spare Parts",
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
    