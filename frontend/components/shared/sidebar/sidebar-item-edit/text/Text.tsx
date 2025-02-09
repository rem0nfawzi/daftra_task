import React from "react";

interface TextProps {
  text: string;
  isEditingText: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
const Text = ({ text, isEditingText, onChange }: TextProps) => {
  return (
    <>
      {isEditingText ? (
        <input type="text" value={text} onChange={onChange} />
      ) : (
        text
      )}
    </>
  );
};

export default Text;
