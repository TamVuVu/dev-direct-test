import { useDrag } from "react-dnd";
import { ElementTypes } from "../../constant";

type DragItemPropsType = {
  type: string;
  text: string;
  elementType: ElementTypes;
};
export const DragItem = ({ type, text, elementType }: DragItemPropsType) => {
  const item = {
    component: elementType,
    props: {},
  };
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: type,
      item: item,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="flex flex-col place-items-center"
    >
      <div className="square border border-width-1 border-solid border-black w-14 h-14"></div>
      <p>{text}</p>
    </div>
  );
};
