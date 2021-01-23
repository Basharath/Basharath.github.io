import React from 'react';

export default function Hero({ mode }) {
  return (
    <section className={'hero' + (mode ? ' light' : ' dark')} id="home">
      <div className="wrapper">
        <span className="title">Basharath</span>
        <span className="tagline">Frontend Developer </span>
      </div>
    </section>
  );
}
