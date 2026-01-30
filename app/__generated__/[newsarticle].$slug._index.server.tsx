/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const system = _props.system
  const CMSData_1: ResourceRequest = {
    name: "CMS Data",
    url: `https://cms.qnpturbines.com/items/News_Articles?filter[slug][_eq]=${system?.params?.slug}&fields=image.*,*`,
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const CMSDataNext: ResourceRequest = {
    name: "CMS Data Next",
    url: "https://example.com",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMSData_1", CMSData_1],
    ["CMSDataNext", CMSDataNext],
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
    