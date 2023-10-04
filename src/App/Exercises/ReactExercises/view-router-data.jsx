import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnCLickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { materialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { useEffectsRouterMetaData } from './UseEffects/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnCLickRouterMetaData,
  materialUIBasicElementsMetaData,
  useEffectsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
