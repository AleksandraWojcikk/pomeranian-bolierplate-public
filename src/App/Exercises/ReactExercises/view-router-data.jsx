import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnCLickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { materialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { useEffectsRouterMetaData } from './UseEffects/router-data';
import { toDoWithServerRouterMetaData } from './ToDoWithServer/router-data';
import { brawoScreenRouterMetaData } from './ToDoWithServer/BrawoScreen/router-dataBrawoScreen';
import { sorryScreenRouterMetaData } from './ToDoWithServer/SorryScreen/router-dataSorryScreen';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnCLickRouterMetaData,
  materialUIBasicElementsMetaData,
  useEffectsRouterMetaData,
  toDoWithServerRouterMetaData,
  brawoScreenRouterMetaData,
  sorryScreenRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
