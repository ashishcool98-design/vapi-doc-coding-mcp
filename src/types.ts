// Shared type definitions

export interface EndpointParam {
  sample?: any;
  datatype?: string;
  template?: string;
  other_option?: any;
  description?: string;
}

export interface Endpoint {
  url: string;
  request_type: string;
  params: Record<string, EndpointParam>;
}

export interface ResponseData {
  url: string;
  response: any;
}

export interface RouteSearchArgs {
  query: string;
}

export interface EndpointCheckArgs {
  route: string;
}

export interface ResponseCheckArgs {
  route: string;
}

