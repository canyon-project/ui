import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

import { CanyonJacocoReport } from '../../components/report';
const Report = () => {
  return (
    <div>
      {/*<Editor></Editor>*/}
      <CanyonJacocoReport Editor={Editor} monaco={monaco} />
    </div>
  );
};

export default Report;
