import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnCLickRouterMetaData } from '../../Components/ReactOnClick/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnCLickRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
