import React from 'react';
import {Button} from 'react-native';
import UserServices from './src/services/UserServices';
import container from './src/dependencies/dependencies';
import {PostClient} from './src/networking/post/PostClient';
import UseStateExample from './src/presentation/component/UseStateExample';
import UseEffectExample from './src/presentation/component/UseEffectExample';
import {UseCallBackExample} from './src/presentation/UseCallbackExample';
import {UseMemoExample} from './src/presentation/component/UseMemoExample';

function App(): JSX.Element {
  return (
    <>
      <UseMemoExample />
    </>
  );
}

export default App;
