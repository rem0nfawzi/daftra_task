import React from "react";
import Settings from "../../icons/Settings";
import Check from "../../icons/Check";
import Exit from "../../icons/Exit";
import { SidebarItem, useNavigationStore } from "@/store/useNavigationStore";

interface ActionBtnsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  localItems: SidebarItem[];
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarItem[]>>;
}
const ActionBtns = ({
  isEditing,
  setIsEditing,
  localItems,
  setLocalItems,
}: ActionBtnsProps) => {
  const { sidebarItems, saveItems } = useNavigationStore();
  return (
    <div className="flex items-center justify-between px-[42px] py-[34px] border-b border-gray-100">
      <p className="text-2xl text-gray-500 font-medium capitalize">Menu</p>
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(true);
            setLocalItems(sidebarItems);
          }}
        >
          <Settings width={30} height={30} />
        </button>
      )}
      {isEditing && (
        <div className="flex gap-2">
          <button
            onClick={() => {
              saveItems(localItems);
              setIsEditing(false);
            }}
          >
            <Check width={43} height={43} />
          </button>
          <button onClick={() => setIsEditing(false)}>
            <Exit width={43} height={43} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionBtns;
