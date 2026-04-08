declare module '*.png' {
  import {ImageRequireSource} from 'react-native';
  const src: ImageRequireSource;
  export default src;
  const value: string;
  export default value;
}

declare module '*.jpg' {
  import {ImageRequireSource} from 'react-native';
  const src: ImageRequireSource;
  export default src;
}

declare module '*.jpeg' {
  import {ImageRequireSource} from 'react-native';
  const src: ImageRequireSource;
  export default src;
}

declare module '@env' {
  export const API_URL: string;
}

declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
