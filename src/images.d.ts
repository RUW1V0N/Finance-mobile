declare module '*.png' {
  import {ImageRequireSource} from 'react-native';
  const src: ImageRequireSource;
  export default src;
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

declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
