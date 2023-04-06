import { ElementTypes } from "../constant";

export interface IComponentPropsType {
  className?: string;
}

export interface IElement {
  id?: string;
  component?: ElementTypes;
  props: {
    text?: string;
    message: string;
  };
}
