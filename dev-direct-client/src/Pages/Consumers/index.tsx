import { ActionItem } from "../../Components";
import { Mode } from "../../constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getElements } from "../../Api";
import { useAppDispatch } from "../../hooks";

import "./index.scss";

export const ConsumerPage = () => {
  const { config } = useSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getElements() as any);
  }, []);

  return (
    <div className="h-screen">
      <div className="body relative" id="main">
        <main className="main">
          <div className="action">
            {config.elements.map((item: any) => (
              <ActionItem key={item.id} item={item} mode={Mode.CONSUMER} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
