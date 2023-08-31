import deal from  '../images/products-promotion.jpg';
import React from 'react';


function Main() {
  return (
    <div className="Main">
        {/* promotion */}
      <section className="main-deal-section">
        <img className='lastest-deal' src={deal} alt="lastest deal" />
      </section>
      {/* deal cards */}
      <div className="card-container">
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
      </div>

      
      {/* brand links */}
      <div className="brand-page-link">
        <h2></h2>
        <div className="brand-page-link-grid">
          <article className="brand-cards">
            <image></image>
            <h2></h2>
            <p></p>
            <p></p>
          </article>
          <article className="brand-cards">
            <image></image>
            <h2></h2>
            <p></p>
            <p></p>
          </article>
          <article className="brand-cards">
            <image></image>
            <h2></h2>
            <p></p>
            <p></p>
          </article>
          <article className="brand-cards">
            <image></image>
            <h2></h2>
            <p></p>
            <p></p>
          </article>
          <article className="brand-cards">
            <image></image>
            <h2></h2>
            <p></p>
            <p></p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Main;
