import { ActionItem, NavBar } from "../../Components";
import { useDrop } from "react-dnd";
import { ElementTypes, ItemTypes, Mode } from "../../constant";

import "./index.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addInstance, changeProps, setDragging } from "../../Reducers";
import { bulkCreateElements, getElements } from "../../Api";
import { useAppDispatch } from "../../hooks";
import { Link } from "react-router-dom";
export const AdminPage = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const { config } = useSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.DRAG_ITEM,
      hover: (e: any) => {
        dispatch(setDragging(e.text + "Element"));
      },
      drop: (e) => {
        dispatch(setDragging(""));
        dispatch(addInstance(e));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [config.dragging]
  );

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMouseX(e.offsetX);
      setMouseY(e.offsetY);
    });
    return;
  }, []);

  useEffect(() => {
    dispatch(getElements() as any);
  }, []);

  return (
    <div ref={drop} className="h-screen">
      <header className="p-3 border-b-2">
        <nav className="flex justify-center gap-3">
          <button
            className="p-1 bg-red-500 text-white"
            onClick={() => dispatch(bulkCreateElements(config.elements) as any)}
          >
            Save
          </button>
          <button className="p-1 bg-red-500 text-white">Undo</button>
          <button className="p-1 bg-red-500 text-white">Redo</button>
          <button className="p-1 bg-red-500 text-white">Export</button>
          <button className="p-1 bg-red-500 text-white">Import</button>
          <Link to="/consumers" target="_blank">
            <button className="p-1 bg-red-500 text-white">View</button>
          </Link>
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
                  // renderConfig(config.elements[config.currentIndex])
                  config.elements[config.currentIndex]
                )}
            </p>
          </div>
          <div className="action">
            {config.elements.map((item: any) => (
              <ActionItem key={item.id} item={item} mode={Mode.ADMIN} />
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
                    value={
                      config.elements[config.currentIndex]?.props?.text
                        ? config.elements[config.currentIndex]?.props?.text
                        : ""
                    }
                    onChange={(e) =>
                      dispatch(changeProps(["text", e.target.value]))
                    }
                    className="border border-width-1 border-solid border-black"
                  />
                  <br />
                  <label>Alert Message</label>
                  <br />
                  <input
                    value={
                      config.elements[config.currentIndex]?.props?.message
                        ? config.elements[config.currentIndex]?.props?.message
                        : ""
                    }
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
                    value={
                      config.elements[config.currentIndex]?.props?.message
                        ? config.elements[config.currentIndex]?.props?.message
                        : ""
                    }
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
