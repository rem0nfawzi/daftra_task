import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SidebarItemEdit from "../sidebar-item-edit/SidebarItemEdit";
import { SidebarMainItem } from "@/store/useNavigationStore";

interface EditWrapperProps {
  localItems: SidebarMainItem[];
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarMainItem[]>>;
}
const EditWrapper = ({ localItems, setLocalItems }: EditWrapperProps) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {localItems.map((item, index) => (
        <SidebarItemEdit
          key={item.id}
          item={item}
          setLocalItems={setLocalItems}
          index={index}
        />
      ))}
    </DndProvider>
  );
};

export default EditWrapper;
