import { ElementTypes, ItemTypes } from "../../constant";
import { IComponentPropsType } from "../../types";
import { DragItem } from "../DragItem";

interface NavBarPropsType extends IComponentPropsType {}
export const NavBar = (props: NavBarPropsType) => {
  return (
    <nav
      className={`${props.className} flex flex-col p-5 w-1/5 border-r-2 gap-5 min-h-full`}
    >
      <DragItem
        type={ItemTypes.DRAG_ITEM}
        text="Paragraph"
        elementType={ElementTypes.PARAGRAPH}
      />
      <DragItem
        type={ItemTypes.DRAG_ITEM}
        text="Button"
        elementType={ElementTypes.BUTTON}
      />
    </nav>
  );
};
