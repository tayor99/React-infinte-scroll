import React, { useState, useRef, useEffect } from 'react';
import model3 from './images/Model3.jfif';
import modelS from './images/ModelS.jfif';
import modelY from './images/ModelY.jfif';
import modelX from './images/ModelX.jfif';
import solarpanel from './images/SolarPanels.jfif';
import solarroof from './images/SolarRoof.jfif';

const Infinite = () => {
  const [displayImages, setDisplayImages] = useState({
    items: [model3, modelS, modelY, modelX, solarpanel, solarroof],
  });

  const [page, setPage] = useState(1);

  const deep = useRef(null);

  useEffect(() => {
    const watch = new IntersectionObserver(handleWatch);
    if (deep.current) {
      watch.observe(deep.current);
    }
  }, []);

  useEffect(() => {
    const newItems = displayImages.items.concat([
      model3,
      modelS,
      modelY,
      modelX,
      solarpanel,
      solarroof,
    ]);
    setDisplayImages({
      items: newItems,
    });
  }, [page]);

  const handleWatch = (morepages) => {
    const currentPages = morepages[0];
    if (currentPages.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  const imageViewer = displayImages.items.map((item, index) => {
    return (
      <div className="container" key={index}>
        <img src={item} alt="image1" />
      </div>
    );
  });

  return (
    <div className="parent">
      <div className="display">{imageViewer}</div>
      <div className="loader" ref={deep}></div>
    </div>
  );
};

export default Infinite;
