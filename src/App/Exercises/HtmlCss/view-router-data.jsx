import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { colorsRouterMetaData } from './Colors/router-data';
import { cSSAnimationsRouterMetaData } from './CssAnimations/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { imageFilesRouterMetaData } from './ImageFiles/router-data';
import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  cSSAnimationsRouterMetaData,
  colorsRouterMetaData,
  imageFilesRouterMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
