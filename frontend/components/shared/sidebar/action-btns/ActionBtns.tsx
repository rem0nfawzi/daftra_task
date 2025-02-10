import React from "react";
import Settings from "../../icons/Settings";
import Check from "../../icons/Check";
import Exit from "../../icons/Exit";
import {
  SidebarMainItem,
  useNavigationStore,
} from "@/store/useNavigationStore";
import { cn } from "@/lib/utils";
import BackArrow from "../../icons/BackArrow";

interface ActionBtnsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  localItems: SidebarMainItem[];
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarMainItem[]>>;
}
const ActionBtns = ({
  isEditing,
  setIsEditing,
  localItems,
  setLocalItems,
}: ActionBtnsProps) => {
  const { sidebarItems, saveItems, setDisplaySidebarOnMobile } =
    useNavigationStore();
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 border-b border-gray-100",
        "md:px-[42px] md:py-[34px]"
      )}
    >
      <div className="flex items-center gap-2">
        <button
          className="md:hidden"
          onClick={() => {
            setDisplaySidebarOnMobile(false);
            setIsEditing(false);
          }}
        >
          <BackArrow width={16} height={15} />
        </button>
        <p
          className={cn(
            "text-lg text-gray-500 font-medium capitalize",
            "md:text-2xl"
          )}
        >
          Menu
        </p>
      </div>
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(true);
            setLocalItems(sidebarItems);
          }}
        >
          <Settings
            width={30}
            height={30}
            className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]"
          />
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
            <Check
              width={43}
              height={43}
              className="w-[34px] h-[34px] md:w-[43px] md:h-[43px]"
            />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="hidden md:block"
          >
            <Exit
              width={43}
              height={43}
              className="w-[34px] h-[34px] md:w-[43px] md:h-[43px]"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionBtns;
