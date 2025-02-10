import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import SidebarItemEdit from "../sidebar-item-edit/SidebarItemEdit";
import { SidebarMainItem } from "@/store/useNavigationStore";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const Backend = isMobile ? TouchBackend : HTML5Backend;
interface EditWrapperProps {
  localItems: SidebarMainItem[];
  setLocalItems: React.Dispatch<React.SetStateAction<SidebarMainItem[]>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditWrapper = ({
  localItems,
  setLocalItems,
  setIsEditing,
}: EditWrapperProps) => {
  return (
    <DndProvider backend={Backend}>
      {localItems.map((item, index) => (
        <SidebarItemEdit
          key={item.id}
          item={item}
          setLocalItems={setLocalItems}
          index={index}
        />
      ))}
      <div className="py-4 text-center md:hidden">
        <button
          className="text-red-500 font-medium"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </DndProvider>
  );
};

export default EditWrapper;
