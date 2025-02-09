import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import {
  SidebarMainItem as SidebarItemType,
  SidebarMainItem,
} from "@/store/useNavigationStore";
import Drag from "../../icons/Drag";
import SubMenuItem from "./SubMenuItem.tsx/SubMenuItem";
import ActionBtns from "./action-btns/ActionBtns";
import Text from "./text/Text";

interface SidebarItemEditProps {
  item: SidebarItemType;
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarMainItem[]>>;
}
const SidebarItemEdit: FC<SidebarItemEditProps> = ({ item, setLocalItems }) => {
  const { id, text, showItem, subItems } = item;
  const setNewItem = ({
    id,
    newItem,
  }: {
    id: number;
    newItem: SidebarItemType;
  }) => {
    setLocalItems((prev) =>
      prev.map((item) => (item.id === id ? newItem : item))
    );
  };

  const [isEditingText, setIsEditingText] = useState(false);
  return (
    <>
      <div
        className={cn(
          "w-full bg-gray-200 px-[30px] py-[19px] rounded-sm text-gray-500 text-2xl font-medium mb-3.5 flex items-center justify-between"
        )}
      >
        <div
          className={cn("flex items-center gap-1", !showItem && "text-gray-50")}
        >
          <button>
            <Drag
              width={30}
              height={30}
              fill={showItem ? undefined : "#CDCDCD"}
            />
          </button>
          <Text
            text={text}
            isEditingText={isEditingText}
            onChange={(e) =>
              setNewItem({
                id,
                newItem: {
                  ...item,
                  text: (e.target as HTMLInputElement).value,
                },
              })
            }
          />
        </div>
        <ActionBtns
          setIsEditingText={setIsEditingText}
          showItem={showItem}
          onEyeClick={() =>
            setNewItem({
              id: item.id,
              newItem: { ...item, showItem: !item.showItem },
            })
          }
        />
      </div>
      {subItems && (
        <div className="flex flex-col gap-3.5">
          {subItems.map((subItem) => (
            <SubMenuItem
              key={subItem.id}
              item={subItem}
              parentItem={item}
              setNewItem={setNewItem}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItemEdit;
