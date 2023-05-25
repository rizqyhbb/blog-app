'use client'

import { FC, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface ICode {
  children: React.ReactElement
}

const CodeBlock: FC<ICode> = ({ children }) => {
  const { className, children: code } = children.props;
  const language = className?.replace("lang-", "");
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      return
    }
  }

  return (
    <div>
      <div className='flex justify-between item-scenter bg-slate-600 px-4 py-2 rounded-t-lg text-white'>
        <span className='text-xs'>{language}</span>
        <button className='text-xs' onClick={handleCopy}>{isCopied ? "Copied!" : "Copy"}</button>
      </div>
      <SyntaxHighlighter language={language} style={a11yDark} customStyle={{ marginTop: 0, borderRadius: "0 0 8px 8px", }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;