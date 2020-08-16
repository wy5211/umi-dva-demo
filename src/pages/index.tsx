import React from 'react';
import * as umi from 'umi';
import styles from './index.less';

export default () => {
  console.log('umi', umi);
  console.log('自定义变量', a);
  return (
    <div className={styles['demo-test']}>
      <h1>Page index</h1>
    </div>
  );
};
