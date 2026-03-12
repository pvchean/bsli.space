import { redirect } from "react-router";
import { url, status } from "../__generated__/[projects].[nasa]._index";

export const loader = () => {
  throw redirect(url, status);
};
