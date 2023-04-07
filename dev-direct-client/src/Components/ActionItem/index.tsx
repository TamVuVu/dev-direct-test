import { useDispatch } from "react-redux";
import { ElementTypes, Mode } from "../../constant";
import { setCurrentElement } from "../../Reducers";
import { IElement } from "../../types";

type ActionItemPropsType = {
  item: IElement;
  mode: Mode;
};
export const ActionItem = ({ item, mode }: ActionItemPropsType) => {
  const dispatch = useDispatch();

  return (
    <div>
      {item.component === ElementTypes.BUTTON ? (
        <button
          className="p-1"
          onClick={() => {
            mode === Mode.ADMIN
              ? dispatch(setCurrentElement(item))
              : alert(item.props.message);
          }}
        >
          {item.props?.text ? item.props.text : ElementTypes.BUTTON}
        </button>
      ) : (
        <p
          onClick={() => {
            dispatch(setCurrentElement(item));
          }}
        >
          {item.props?.message ? item.props.message : ElementTypes.PARAGRAPH}
        </p>
      )}
    </div>
  );
};
