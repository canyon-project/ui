import { FC, useEffect, useMemo, useRef, useState } from 'react';
interface JacocoReportProps {
  Editor: any;
  monaco: any;
}
const JacocoReport: FC<JacocoReportProps> = ({ Editor, monaco }) => {
  const sourcecode = `const a = 1;`;
  const [editor, setEditor] = useState<any>(false);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
    setEditor(editor);
  }
  const decorations = useMemo(() => {
    // console.log(annotateList)
    return [];
  }, []);
  useEffect(() => {
    if (editor) {
      editor?.deltaDecorations?.(
        [], // oldDecorations 每次清空上次标记的
        decorations.map(({ inlineClassName, startLine, startCol, endLine, endCol }) => ({
          range: new monaco.Range(startLine, startCol, endLine, endCol),
          options: {
            isWholeLine: false,
            inlineClassName: inlineClassName,
          },
        })),
      );
      // 监听编辑器的滚动事件
      editor.onDidScrollChange(function (e: any) {
        console.log(e);
        // e.preventDefault(); // 阻止默认行为
      });
    }
  }, [editor, decorations]);

  return (
    <div>
      <Editor
        onMount={handleEditorDidMount}
        options={{
          // lineNumbers: 'off',
          readOnly: true,
          folding: false,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          showUnused: false,
          // fontFamily: 'IBMPlexMono',
        }}
        height={'90vh'}
        value={sourcecode}
        language={'javascript'}
      />
    </div>
  );
};

export default JacocoReport;
