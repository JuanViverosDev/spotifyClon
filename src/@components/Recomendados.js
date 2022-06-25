import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, selectCanales } from "../app/features/CanalesReducer";

const Recomendados = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectCanales).slice(0, 5);

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  console.log(item);

  return (
    <div className="">
      <div className="grid grid-cols-5 mx-10">
        {item.map((podcast, i) => {
          return (
            <div className="m-4" key={i}>
              <a href={`/canal/${podcast.id}`} className="mx-2 mt-4">
                <img src={podcast.urls.logo_image.original} alt="podcast" />

                <h1 className="text-white font-black mt-4">{podcast.title}</h1>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomendados;
