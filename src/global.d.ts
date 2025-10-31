// Global type declarations for .cjs data files

declare module "*routes.cjs" {
  const routes: string[];
  export default routes;
}

declare module "*endpoints_new_copy.cjs" {
  interface EndpointParam {
    sample?: any;
    datatype?: string;
    template?: string;
    other_option?: any;
    description?: string;
  }

  interface Endpoint {
    url: string;
    request_type: string;
    params: Record<string, EndpointParam>;
  }

  const endpoints: Endpoint[];
  export default endpoints;
}

declare module "*url_responses_by_category.cjs" {
  interface ResponseData {
    url: string;
    response: any;
  }

  const responses: Record<string, Record<string, ResponseData>>;
  export default responses;
}

declare module "*route_descriptions.cjs" {
  const routeDescriptions: Record<string, string>;
  export default routeDescriptions;
}

