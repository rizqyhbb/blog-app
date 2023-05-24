'use client'

import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface ICode {
  children: React.ReactElement
}

const CodeBlock: FC<ICode> = ({ children }) => {
  const { className, children: code } = children.props;
  const language = className?.replace("lang-", "");
  return (
    <div>
      <div className='flex justify-between item-scenter bg-slate-600 px-4 py-1 rounded-t-lg text-white'>
        <span>{language}</span>
        <button>Copy</button>
      </div>
      <SyntaxHighlighter language={language} style={a11yDark} customStyle={{ marginTop: 0, borderRadius: "0 0 8px 8px", }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;