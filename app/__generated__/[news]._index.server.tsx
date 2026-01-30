/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const CMSData_1: ResourceRequest = {
    name: "CMS Data",
    url: "https://cms.qnpturbines.com/items/News_Articles?filter[status][_eq]=published&sort=-date_created",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMSData_1", CMSData_1],
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
  let CMSData = resources.CMSData_1
  return {
    title: "News",
    description: "The latest news and achievements from QNP Turbines",
    excludePageFromSearch: false,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: CMSData?.data?.data?.[0]?.id ? 200 : 404,
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
    