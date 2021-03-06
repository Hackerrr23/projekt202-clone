import React from "react";
import "./ExplainingServices.scss";
import Service_0 from "../../images/service-1.png";
import Service_1 from "../../images/service-2.png";
import Service_2 from "../../images/service-3.png";
import Service_3 from "../../images/service-4.png";
export default function ExplainingServices() {
  return (
    <div>
      <div className="explaining">
        <h1 className="orange">Delivering Experiences That Matter</h1>
        <div className="explain-para">
          <p>
            projekt202 is the #1 choice for the world’s most successful
            companies looking to transform their customer and employee
            experiences. Why? It’s in our unique,{" "}
            <span className="orange">established methodology</span> for
            understanding people in context — we reveal your customers’ unmet
            needs, wants and motivations — which drives everything we do. This
            leads to a genuine, clear understanding of the customer, which
            shapes the <span className="orange">design and developmen</span>t of
            new software solutions and experiences.
          </p>
        </div>
        <div className="explain-para">
          <p>
            With over 15 years perfecting our approach, we have the experience,
            <span className="orange">teams</span>, skills and scale to deliver
            sophisticated software that improves any and all touchpoints across
            the user journey.
          </p>
        </div>
        <div className="explain-para">
          <p>
            Looking to improve a product, deliver a new workplace solution, or
            disrupt your industry? Look no further than projekt202 for today's
            experience-driven transformation opportunities.
          </p>
        </div>
      </div>
      <div className="main-servicers">
        {/* <div className="projekt-servicers">
          <img src={Service_0} />
          <h3>Strategy & Insight</h3>
          <p>
            Understand customer and user needs to strategically propel your
            business forward and deliver on the promise of your brand
          </p>
          <div className="service-1" />
        </div> */}
        <div className="projekt-servicers">
          <img src={Service_0} />
          <h3>Strategy % insights</h3>
          <p>
            Understand customer and user needs to strategically propel your
            business forward and deliver on the promise of your brand
          </p>
          <div className="service-2" />
        </div>
        <div className="projekt-servicers">
          <img src={Service_1} />
          <h3>User Experiece Design</h3>
          <p>
            Design visually appealing, innovative and intuitive experiences
            across mobile and desktop that are in line with brand standards
          </p>
          <div className="service-2" />
        </div>
        <div className="projekt-servicers">
          <img src={Service_2} />
          <h3>Software Development</h3>
          <p>
            Using the tech behind experience-driven transformations, we build
            large, complex systems with blended teams that increase velocity
          </p>
          <div className="service-3" />
        </div>
        <div className="projekt-servicers">
          <img src={Service_3} />
          <h3>Marketing & Analytics</h3>
          <p>
            Our expert team makes sense of massive amounts of customer data and
            insights to help your team drive new business channels
          </p>

          <div className="service-4" />
        </div>
      </div>
    </div>
  );
}
