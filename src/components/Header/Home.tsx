import React, { FC } from 'react';
import './styles/header.scss';
import { Header } from './Header';
import { Description } from './Description';
import { Managing } from './Managing';
import { Price } from './Price';
import { Footer } from './Footer';

export const Home: FC = () => (
  <>
    <Header />
    <Description />
    <Managing />
    <Price />
    <Footer />
  </>
);
