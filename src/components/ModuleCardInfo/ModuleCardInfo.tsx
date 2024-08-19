import React, { FC } from 'react';
import {ModuleCardInfoWrapper,InteriorStyle} from './ModuleCardInfo.styled';

interface ModuleCardInfoProps {}

const ModuleCardInfo: FC<ModuleCardInfoProps> = () => (
 <ModuleCardInfoWrapper>
   <InteriorStyle>
      ModuleCardInfo Component

   </InteriorStyle>
 </ModuleCardInfoWrapper>
);

export default ModuleCardInfo;
