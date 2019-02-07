import React from "react";

class About extends React.Component {

  state = { centered: true }

  render () {
    return (
      <section className="about">
        <div className="about__overview">
            <div className="about__overview-group">
                <h3 className="heading-tertiary u-margin-bottom-small">
                    Profile
                </h3>
                <p className="paragraph">
                    Deeply committed to mastering my craft, I thrive on the day to day challenges that arise when creating content for the web. I aim to grow in the area of web development applying the latest trends and standards in a company that allows me to develop my creativity while acquiring new experience.
                </p>
            </div>
            <div className="about__overview-group">
                <h3 className="heading-tertiary u-margin-bottom-small">
                    Skill
                </h3>
                <p className="paragraph">
                    +2 years developing JavaScript applications including:
                </p>
            </div>

        </div>

        <div className="about__skills">
            <h3 className="heading-tertiary u-margin-bottom-small">
                Programming Languages
            </h3>
            <div className="about__skills__item about__skills__item--90">JavaScript </div>
            <div className="about__skills__item about__skills__item--80">Python</div>               
            <div className="about__skills__item about__skills__item--60">PHP</div>
            <div className="about__skills__item about__skills__item--40">C++/C</div>
            <div className="about__skills__item about__skills__item--40">GoLang</div>                    
            <h3 className="heading-tertiary u-margin-bottom-small">
                Frameworks
            </h3>
            <div className="about__skills__item about__skills__item--90">ReactJS</div>
            <div className="about__skills__item about__skills__item--80">NodeJS</div>               
            <h3 className="heading-tertiary u-margin-bottom-small">
                DataBases
            </h3>
            <div className="about__skills__item about__skills__item--90">MySQL</div>
            <div className="about__skills__item about__skills__item--80">Neo4J/Cypher</div>
            <div className="about__skills__item about__skills__item--70">Mongo</div> 
                            
        </div>

      </section>
    );
  }
}

export default About;
