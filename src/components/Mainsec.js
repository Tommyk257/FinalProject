import deal from  '../images/products-promotion.jpg';



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
        <h2>Pay the brands bitch</h2>
        <div className="brand-page-link-grid">
          <article className="brand-cards">
            <image>Image</image>
            <h2>Nike</h2>
            <p>Products</p>
            <p>Jumbo</p>
          </article>
          <article className="brand-cards">
            <image>Image</image>
            <h2>Other shoe</h2>
            <p>Products</p>
            <p>Jumbo</p>
          </article>
          <article className="brand-cards">
            <image>Image</image>
            <h2>That foot thingy</h2>
            <p>Products</p>
            <p>Jumbo</p>
          </article>
          <article className="brand-cards">
            <image>Image</image>
            <h2>Crocks</h2>
            <p>Products</p>
            <p>Jumbo</p>
          </article>
          <article className="brand-cards">
            <image>Image</image>
            <h2>Other rubber shoes</h2>
            <p>Products</p>
            <p>Jumbo</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Main;
