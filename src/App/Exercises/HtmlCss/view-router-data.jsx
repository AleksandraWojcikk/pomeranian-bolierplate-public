import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { backgroundsRouterMetaData } from './Backgounds/router-data';
import { colorsRouterMetaData } from './Colors/router-data';
import { cSSAnimationsRouterMetaData } from './CssAnimations/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { imageFilesRouterMetaData } from './ImageFiles/router-data';
import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { mediaFilesRouterMetaData } from './MediaFiles/router-data';
import { boxModelRouterMetaData } from './BoxModel/router-data';
import { htmlTablesRouterMetaData } from './HtmlTables/router-data';
import { tablesTennisRouterMetaData } from './TablesTennis/router-data';
import { arrayRenderingRouterMetaData } from './ArrayRendering/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  cSSAnimationsRouterMetaData,
  colorsRouterMetaData,
  imageFilesRouterMetaData,
  backgroundsRouterMetaData,
  mediaFilesRouterMetaData,
  boxModelRouterMetaData,
  htmlTablesRouterMetaData,
  tablesTennisRouterMetaData,
  arrayRenderingRouterMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
