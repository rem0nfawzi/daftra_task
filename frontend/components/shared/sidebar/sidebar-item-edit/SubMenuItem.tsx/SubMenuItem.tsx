import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Drag from "@/components/shared/icons/Drag";
import { SidebarBaseItem, SidebarMainItem } from "@/store/useNavigationStore";
import ActionBtns from "../action-btns/ActionBtns";
import Text from "../text/Text";

interface SubMenuItemProps {
  item: SidebarBaseItem;
  parentItem: SidebarMainItem;
  setNewItem: ({
    id,
    newItem,
  }: {
    id: number;
    newItem: SidebarMainItem;
  }) => void;
}
const SubMenuItem = ({ item, parentItem, setNewItem }: SubMenuItemProps) => {
  const { showItem } = item;
  const [isEditingText, setIsEditingText] = useState(false);

  return (
    <div
      key={item.id}
      className={cn(
        "flex items-center gap-1 text-gray-500 text-xl py-3 mx-6 px-6 rounded-sm text-left mb-3.5 transition hover:bg-gray-200",
        !showItem && "text-gray-50"
      )}
    >
      <button>
        <Drag width={30} height={30} fill={showItem ? undefined : "#CDCDCD"} />
      </button>
      <Text
        text={item.text}
        isEditingText={isEditingText}
        onChange={(e) =>
          setNewItem({
            id: parentItem.id,
            newItem: {
              ...parentItem,
              subItems: parentItem.subItems?.map((subItem) =>
                subItem.id === item.id
                  ? { ...subItem, text: (e.target as HTMLInputElement).value }
                  : subItem
              ),
            },
          })
        }
      />
      <ActionBtns
        setIsEditingText={setIsEditingText}
        showItem={showItem}
        onEyeClick={() =>
          setNewItem({
            id: parentItem.id,
            newItem: {
              ...parentItem,
              subItems: parentItem.subItems?.map((subItem) =>
                subItem.id === item.id
                  ? { ...subItem, showItem: !subItem.showItem }
                  : subItem
              ),
            },
          })
        }
      />
    </div>
  );
};

export default SubMenuItem;
