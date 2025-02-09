import React, { FC, useCallback, useRef, useState } from "react";
import update from "immutability-helper";
import { cn } from "@/lib/utils";
import {
  SidebarMainItem as SidebarItemType,
  SidebarMainItem,
} from "@/store/useNavigationStore";
import Drag from "../../icons/Drag";
import SubMenuItem from "./SubMenuItem.tsx/SubMenuItem";
import ActionBtns from "./action-btns/ActionBtns";
import Text from "./text/Text";
import { DragSourceMonitor, useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";

interface SidebarItemEditProps {
  item: SidebarItemType;
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarMainItem[]>>;
  index: number;
}
export interface DragItem {
  index: number;
  id: string;
  type: string;
}

const SidebarItemEdit: FC<SidebarItemEditProps> = ({
  item,
  setLocalItems,
  index,
}) => {
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
  const ref = useRef<HTMLDivElement>(null);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setLocalItems((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    },
    [setLocalItems]
  );

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "item",
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

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "item",
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
    <>
      <div
        ref={ref}
        className={cn(
          "w-full bg-gray-200 px-[30px] py-[19px] rounded-sm text-gray-500 text-2xl font-medium mb-3.5 flex items-center justify-between"
        )}
        style={{ opacity }}
        data-handler-id={handlerId}
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
          {subItems.map((subItem, index) => (
            <SubMenuItem
              key={subItem.id}
              item={subItem}
              parentItem={item}
              setNewItem={setNewItem}
              index={index}
              setLocalItems={setLocalItems}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItemEdit;
