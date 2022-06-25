import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../@components/Sidebar";
import Superbar from "../../@components/Superbar";
import prueba from "../../resources/0.jfif";
import { getData, selectCanales } from "../features/CanalesReducer";

const Podcasts = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectCanales);

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  console.log(item);

  return (
    <article className="bg-grisoscuro grid grid-cols-7 h-full">
      <div className="col-span-7">
        <Superbar />
        <h1 className="text-white font-bold text-2xl mt-10 mx-10">
          Top podcasts
        </h1>
        <div className="grid grid-cols-6 mx-10 mb-52">
          {item.map((podcast, i) => {
            return (
              <div className="m-4" key={i}>
                <Link to={`/canal/${podcast.id}`} className="mx-2 mt-4">
                  <img src={podcast.urls.logo_image.original} alt="podcast" />

                  <h1 className="text-white font-black mt-4">{podcast.title}</h1>

                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Podcasts;
