import { PlayIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Sidebar from "../../@components/Sidebar";
import Superbar from "../../@components/Superbar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getCanal,
  getCapitulos,
  selectCanal,
  selectCapitulos,
} from "../features/CanalesReducer";
import { useParams } from "react-router";
import { format, secondsToMinutes } from "date-fns";
import { Link } from "react-router-dom";
import { secondsToHours } from "date-fns/esm";

const Canal = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [showMore, setShowMore] = useState(true);
  const itemCanal = useSelector(selectCanal);
  const itemCapitulos = useSelector(selectCapitulos);

  useEffect(() => {
    async function fetch() {
      await dispatch(getCanal(routeParams?.id));
      await dispatch(getCapitulos(routeParams?.id));
    }
    fetch();
  }, [dispatch, routeParams?.id]);

  console.log(itemCanal);
  console.log(itemCapitulos);
  console.log(showMore);

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
              src={itemCanal.channel?.urls.logo_image.original}
              alt="fotopodcast"
              className="shadow-black shadow-2xl h-52"
            />
            <div className="flex flex-col">
              <h1 className="text-white font-semibold mx-10">PODCAST</h1>
              <h1 className="text-white text-6xl font-black mx-10 my-4 capitalize">
                {itemCanal.channel?.title}
              </h1>
            </div>
          </div>
        </div>
        <section>
          <button className="m-10 mb-0 rounded-sm bg-transparent border text-blanco py-1 px-3 font-bold border-grisclaro">
            SEGUIR
          </button>
          <section className="grid grid-cols-6">
            <div className="m-10 col-span-4">
              <div className="flex justify-between mb-10">
                <h1 className="text-blanco font-bold text-xl">All Episodes</h1>
                <select
                  name="cars"
                  className="text-grisclaro font-bold bg-transparent rounded outline-none"
                >
                  <option value="recent">De mas reciente a mas antiguo </option>
                  <option value="recent">De mas reciente a mas antiguo </option>
                </select>
              </div>
              {itemCapitulos.map((capitulo, i) => {
                return (
                  <div className="px-6 hover:bg-grisclaro rounded-xl">
                    <Link
                      to={`/player/${capitulo.id}`}
                      key={i}
                      className="grid grid-cols-12 border-y py-4 border-grisclaro items-center hover:bg-grisclaro"
                    >
                      <img
                        src={capitulo.channel.urls.logo_image.original}
                        alt="prueba"
                        className="col-span-2 rounded-xl"
                      />
                      <div className="col-span-10">
                        <h1 className="text-blanco font-semibold text-lg ml-10">
                          {capitulo.title}
                        </h1>
                        <p className="text-grisclaro ml-10 my-4">
                          {capitulo.description.slice(0, 100)}...
                        </p>
                        <div className="flex ml-10">
                          <button>
                            <PlayIcon className="h-10 text-white" />
                          </button>
                          <h1 className="text-grisclaro ml-2 my-4">
                            {format(new Date(capitulo.uploaded_at), "dd - MMM")} •
                          </h1>
                          <h1 className="text-grisclaro my-4 ml-1 font-black">
                          {capitulo.duration < 3600? <div>{secondsToMinutes(capitulo.duration)} min</div> : <div>{secondsToHours(capitulo.duration)} hr</div>}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="col-span-2">
              <h1 className="text-blanco text-2xl font-black mx-10">About</h1>
              {showMore ? (
                <p className="text-blanco mx-10 mt-4">
                  {itemCanal.channel?.description.slice(0, 200)}
                  <button
                    onClick={() => setShowMore(false)}
                    className="text-white font-semibold ml-1"
                  >
                    ... show more
                  </button>
                </p>
              ) : (
                <div>
                  <p className="text-blanco mx-10 mt-4">
                    {itemCanal.channel?.description}
                  </p>
                  <button
                    onClick={() => setShowMore(true)}
                    className="text-white font-semibold ml-10 mt-5"
                  >
                    show less
                  </button>
                </div>
              )}
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Canal;
