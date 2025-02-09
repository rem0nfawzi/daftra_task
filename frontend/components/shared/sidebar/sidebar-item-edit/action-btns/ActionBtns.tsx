import React from "react";
import Edit from "@/components/shared/icons/Edit";
import Eye from "@/components/shared/icons/Eye";
import EyeSlash from "@/components/shared/icons/EyeSlash";

interface ActionBtnsProps {
  setIsEditingText: React.Dispatch<React.SetStateAction<boolean>>;
  showItem: boolean;
  onEyeClick: () => void;
}
const ActionBtns = ({
  setIsEditingText,
  showItem,
  onEyeClick,
}: ActionBtnsProps) => {
  return (
    <div className="flex items-center gap-2.5 ml-auto">
      <button onClick={() => setIsEditingText((prev) => !prev)}>
        <Edit width={25} height={25} />
      </button>
      <button onClick={onEyeClick}>
        {showItem ? (
          <Eye width={25} height={25} />
        ) : (
          <EyeSlash width={25} height={25} />
        )}
      </button>
    </div>
  );
};

export default ActionBtns;
