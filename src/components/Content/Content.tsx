import React, { FC } from 'react';
import { ContentWrapper } from './Content.styled';
import ModuleCardInfo from '../ModuleCardInfo/ModuleCardInfo';

interface ContentProps {}

const Content: FC<ContentProps> = () => (
 <ContentWrapper>
  <ModuleCardInfo/>
  <ModuleCardInfo/>
 </ContentWrapper>
);

export default Content;
