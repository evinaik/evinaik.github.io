import * as React from "react";
import { Layout } from "./src/layouts/Layout"
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
