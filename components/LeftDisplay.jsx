import ContactLogos from "@/components/ContactLogos";

export default function LeftDisplay() {
  return (
    <>
      <div className="main-left">
        <div className="offerDiv">
          <div className="offers">
            <span className="sale-offer">
              40% <span className="sale-offer-smaller">Flash sale</span>
            </span>
            <span className="sale-description">on certain shoes</span>
            <div className="sale-button">Shop now</div>
            <img src="/images/saleShoe.png" className="offer-image" />
          </div>
          <div className="dealNavigation">
            <span class="material-symbols-outlined arrow">
              arrow_back_ios_new
            </span>
            <p className="circleGroup">
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </p>
            <span class="material-symbols-outlined arrow">
              arrow_forward_ios
            </span>
          </div>
        </div>
        <ContactLogos />
      </div>
    </>
  );
}
