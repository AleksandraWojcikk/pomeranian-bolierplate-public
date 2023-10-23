import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnCLickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { materialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { useEffectsRouterMetaData } from './UseEffects/router-data';
import { toDoWithServerRouterMetaData } from './ToDoWithServer/router-data';
import { brawoScreenRouterMetaData } from './ToDoWithServer/BrawoScreen/router-dataBrawoScreen';
import { sorryScreenRouterMetaData } from './ToDoWithServer/SorryScreen/router-dataSorryScreen';
import { createNewToDoRouterMetaData } from './ToDoWithServer/CreateNewToDo/router-dataCreateNewToDo';
import { editToDoRouterMetaData } from './ToDoWithServer/EditToDoList/router-dataEditToDoList';
import { reactUseRefMetaData } from './ReactUseRef/router-data';
import { reactUseRefExerciseMetaData } from './ReactUseRefExercise/router-data';
import { formsMetaData } from './Forms/router-data';
import { basicFormMetaData } from './BasicForm/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnCLickRouterMetaData,
  materialUIBasicElementsMetaData,
  useEffectsRouterMetaData,
  toDoWithServerRouterMetaData,
  brawoScreenRouterMetaData,
  sorryScreenRouterMetaData,
  createNewToDoRouterMetaData,
  editToDoRouterMetaData,
  reactUseRefMetaData,
  reactUseRefExerciseMetaData,
  formsMetaData,
  basicFormMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
