import React, { useCallback, useRef, useState } from "react";
import update from "immutability-helper";
import { cn } from "@/lib/utils";
import Drag from "@/components/shared/icons/Drag";
import { SidebarBaseItem, SidebarMainItem } from "@/store/useNavigationStore";
import ActionBtns from "../action-btns/ActionBtns";
import Text from "../text/Text";
import { DragSourceMonitor, useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import { DragItem } from "../SidebarItemEdit";

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
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarMainItem[]>>;
  index: number;
}
const SubMenuItem = ({
  item,
  parentItem,
  setNewItem,
  setLocalItems,
  index,
}: SubMenuItemProps) => {
  const { id, showItem } = item;
  const ref = useRef<HTMLDivElement>(null);
  const [isEditingText, setIsEditingText] = useState(false);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setLocalItems((prevItems) =>
        prevItems.map((item) =>
          item.id === parentItem.id
            ? {
                ...item,
                subItems: update(item.subItems, {
                  $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, item.subItems![dragIndex]],
                  ],
                }),
              }
            : item
        )
      );
    },
    [parentItem.id, setLocalItems]
  );

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "sub-item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "sub-item",
    item: () => {
      return { id, index };
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      key={item.id}
      ref={ref}
      className={cn(
        "flex items-center gap-1 text-gray-500 text-xl py-3 mx-6 px-6 rounded-sm text-left mb-3.5 transition hover:bg-gray-200",
        !showItem && "text-gray-50"
      )}
      style={{ opacity }}
      data-handler-id={handlerId}
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
