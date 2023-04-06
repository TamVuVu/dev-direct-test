import { useDispatch } from "react-redux";
import { ElementTypes } from "../../constant";
import { setCurrentElement } from "../../Reducers";
import { IElement } from "../../types";

type ActionItemType = {
  item: IElement;
};
export const ActionItem = ({ item }: ActionItemType) => {
  const dispatch = useDispatch();

  return (
    <div>
      {item.component === ElementTypes.BUTTON ? (
        <button
          className="p-1"
          onClick={() => {
            dispatch(setCurrentElement(item));
          }}
        >
          {item.props.text ? item.props.text : ElementTypes.BUTTON}
        </button>
      ) : (
        <p
          onClick={() => {
            dispatch(setCurrentElement(item));
          }}
        >
          {item.props.message ? item.props.message : ElementTypes.PARAGRAPH}
        </p>
      )}
    </div>
  );
};
