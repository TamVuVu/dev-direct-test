import { ActionItem, NavBar } from "../../Components";
import { useDrop } from "react-dnd";
import { ElementTypes, ItemTypes } from "../../constant";

import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInstances, changeProps, setDragging } from "../../Reducers";
import { IElement } from "../../types";
export const AdminPage = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const { config } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.DRAG_ITEM,
      hover: (e: any) => {
        dispatch(setDragging(e.text + "Element"));
      },
      drop: (e) => {
        dispatch(setDragging(""));
        dispatch(addInstances(e));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [config.dragging]
  );

  const renderConfig = (element: IElement) => {
    if (element.component === ElementTypes.PARAGRAPH) {
      const config = {
        id: element.id,
        component: element.component,
        props: {
          message: element.props.message,
        },
      };
      return config;
    }
    return element;
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMouseX(e.offsetX);
      setMouseY(e.offsetY);
    });
    return;
  }, []);

  return (
    <div ref={drop} className="h-screen">
      <header className="p-3 border-b-2">
        <nav className="flex justify-center gap-3">
          <button
            className="p-1 bg-red-500 text-white"
            onClick={() => console.log(config.elements)}
          >
            Save
          </button>
          <button className="p-1 bg-red-500 text-white">Undo</button>
          <button className="p-1 bg-red-500 text-white">Redo</button>
          <button className="p-1 bg-red-500 text-white">Export</button>
          <button className="p-1 bg-red-500 text-white">Import</button>
          <button className="p-1 bg-red-500 text-white">View</button>
        </nav>
      </header>
      <div className="body relative left-1/5" id="main">
        <NavBar className="nav-bar absolute left-0" />
        <main className="main">
          <div className="config-info p-3">
            <p>
              Mouse: ({mouseX}, {mouseY})
            </p>
            <p>Dragging: {config.dragging}</p>
            <p>Instances: {config.elements.length}</p>
            <p>
              Config:{" "}
              {config.currentIndex >= 0 &&
                JSON.stringify(
                  renderConfig(config.elements[config.currentIndex])
                )}
            </p>
          </div>
          <div className="action">
            {config.elements.map((item: any) => (
              <ActionItem key={item.id} item={item} />
            ))}
          </div>
          <footer className="p-3 border-t-2 absolute bottom-0 w-4/5">
            {config.elements.length > 0 && config.currentIndex >= 0 ? (
              config.elements[config.currentIndex]?.["component"] ===
              ElementTypes.BUTTON ? (
                <div>
                  <label>Button Text</label>
                  <br />
                  <input
                    placeholder=""
                    value={config.elements[config.currentIndex]?.props?.text}
                    onChange={(e) =>
                      dispatch(changeProps(["text", e.target.value]))
                    }
                    className="border border-width-1 border-solid border-black"
                  />
                  <br />
                  <label>Alert Message</label>
                  <br />
                  <input
                    value={config.elements[config.currentIndex]?.props?.message}
                    onChange={(e) =>
                      dispatch(changeProps(["message", e.target.value]))
                    }
                    className="border border-width-1 border-solid border-black"
                  />
                </div>
              ) : (
                <div>
                  <label>Paragraph Text</label>
                  <br />
                  <input
                    className="border border-width-1 border-solid border-black"
                    value={config.elements[config.currentIndex]?.props?.message}
                    onChange={(e) =>
                      dispatch(changeProps(["message", e.target.value]))
                    }
                  />
                </div>
              )
            ) : (
              ""
            )}
          </footer>
        </main>
      </div>
    </div>
  );
};
