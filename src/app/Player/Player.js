import { PlayIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Recomendados from "../../@components/Recomendados";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getCanal,
  getCapitulo,
  getCapitulos,
  selectCanal,
  selectCapitulo,
} from "../features/CanalesReducer";
import { useParams } from "react-router";
import Sidebar from "../../@components/Sidebar";
import Superbar from "../../@components/Superbar";
import { slice } from "lodash";
import { format, secondsToMinutes } from "date-fns";
import { Link } from "react-router-dom";
import { secondsToHours } from "date-fns/esm";

const Player = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [showMore, setShowMore] = useState(true);
  const itemCapitulos = useSelector(selectCapitulo);

  useEffect(() => {
    async function fetch() {
      await dispatch(getCapitulo(routeParams?.id));
    }
    fetch();
  }, [dispatch, routeParams?.id]);

  return (
    <div className="grid grid-cols-9 bg-negro h-full">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <section className="col-span-7">
        <div className="bg-gradient-to-b from-black to-negro">
          <Superbar />
          <div className="flex p-10 items-end">
            <img
              src={itemCapitulos.audio_clip?.channel?.urls.logo_image.original}
              alt="fotopodcast"
              className="shadow-black shadow-2xl h-52"
            />
            <div className="flex flex-col">
              <h1 className="text-white font-semibold mx-10">PODCAST</h1>
              <h1 className="text-white text-6xl font-black mx-10 my-4 capitalize">
                {itemCapitulos.audio_clip?.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex ml-10 mt-4">
          <h1 className="text-grisclaro ml-2 my-4">{itemCapitulos.audio_clip?.uploaded_at} •</h1>
          <h1 className="text-grisclaro my-4 ml-1 font-black">
            Tiempo restante: {itemCapitulos.audio_clip?.duration < 3600? <div>{secondsToMinutes(itemCapitulos.audio_clip?.duration)} min</div> : <div>{secondsToHours(itemCapitulos.audio_clip?.duration)} hr</div>}
          </h1>
        </div>
        <button>
          <PlayIcon className="h-16 text-verde ml-10" />
        </button>
        <section className="grid grid-cols-5">
          <div className="col-span-3">
            <h1 className="text-blanco text-xl font-black mx-10 my-10">
              Description
            </h1>
            {showMore ? (
              <p className="text-blanco mx-10 my-4">
                {slice(itemCapitulos.audio_clip?.description, 0, 200)}
                <button
                  onClick={() => setShowMore(false)}
                  className="text-white font-semibold ml-1"
                >
                  ... show more
                </button>
              </p>
            ) : (
              <div>
                <p className="text-blanco mx-10 my-4">
                  {itemCapitulos.audio_clip?.description}
                </p>
                <button
                  onClick={() => setShowMore(true)}
                  className="text-white font-semibold ml-10 mt-5"
                >
                  show less
                </button>
              </div>
            )}
            <Link to={`/canal/${itemCapitulos.audio_clip?.channel?.id}`} className="text-white border border-grisclaro rounded-3xl font-bold py-1 px-4 mx-10 mt-10">
              See all episodes
            </Link>
          </div>
        </section>
        <h1 className="text-white font-bold text-2xl mx-10 my-5">
          You might also like
        </h1>
        <div className="mb-40">
          <Recomendados />
        </div>
      </section>
    </div>
  );
};

export default Player;
