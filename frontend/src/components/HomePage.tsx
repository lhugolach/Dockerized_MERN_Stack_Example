import React from 'react';
import { HomeHead } from './HomeHead';
import { HomeBody } from './HomeBody';

export const HomePage: React.FunctionComponent = () => {
  return <>
    <HomeHead />
    <HomeBody />
  </>
}