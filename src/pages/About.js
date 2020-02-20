import React from "react";
import ReactCompareImage from "react-compare-image";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import SubHeader from "../components/SubHeader";
import Text from "../components/Text";
import TextAnchor from "../components/TextAnchor";

const AboutComp = () => {
  return (
    <PageBase>
      <PageHeader>About This Project</PageHeader>
      <SubHeader>What is SUTDLAND?</SubHeader>
      <Text>
        It is a virtual recreation of the SUTD Campus in Minecraft. Come join
        our server and walk around our beautiful campus. Sneak a peek at our
        classrooms, labs, and recreational facilities. Who knows, you might find
        some fun easter eggs, as well as some starbucks vouchers cleverly hidden
        in remote corners of the school!
      </Text>
      <SubHeader>Our story</SubHeader>
      <Text>
        SUTDLAND (SUTD in Minecraft) has its humble origins as a private
        survival server for a small group of friends in the ISTD Pillar, running
        off a decomissioned laptop sitting on top of a fridge in a student's
        hostel room. When the call came to re-invent our Open House virtually,
        SUTD students answered. In less than 14 days, students came up with new
        initiatives, and the small survival server was turned into a public
        server containing a virtual SUTD campus in Minecraft for visitors to
        explore.
      </Text>
      <SubHeader>Teasers</SubHeader>
      <ul>
        <li>
          <TextAnchor
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwj8vd7ZjN7nAhUkwzgGHenFBjkQwqsBMAF6BAgKEAc&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFqkrV5Z2jkg&usg=AOvVaw3z1axWdE9LjvmqTHF8kkxJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phase 1 Construction Video
          </TextAnchor>
        </li>
        <li>
          <TextAnchor
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwj8vd7ZjN7nAhUkwzgGHenFBjkQwqsBMAB6BAgKEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkyXLRVrzYJ0&usg=AOvVaw2Tecty7f8HFPdjp5JwAbqF"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phase 2 Construction Video
          </TextAnchor>
        </li>
      </ul>
      <div>
        <ReactCompareImage
          leftImage={require("../assets/images/before-after/b1_dbs.jpg")}
          rightImage={require("../assets/images/before-after/b1_dbs.png")}
          sliderLineColor="var(--color-accent)"
        />
      </div>
      <div>
        <ReactCompareImage
          leftImage={require("../assets/images/before-after/campus.jpg")}
          rightImage={require("../assets/images/before-after/campus.png")}
          sliderLineColor="var(--color-accent)"
        />
      </div>
      <div>
        <ReactCompareImage
          leftImage={require("../assets/images/before-after/library.jpg")}
          rightImage={require("../assets/images/before-after/library.png")}
          sliderLineColor="var(--color-accent)"
        />
      </div>
      <div>
        <ReactCompareImage
          leftImage={require("../assets/images/before-after/b2_inner.jpg")}
          rightImage={require("../assets/images/before-after/b2_inner.png")}
          sliderLineColor="var(--color-accent)"
        />
      </div>
      <div>
        <ReactCompareImage
          leftImage={require("../assets/images/before-after/b2.jpg")}
          rightImage={require("../assets/images/before-after/b2.png")}
          sliderLineColor="var(--color-accent)"
        />
      </div>
    </PageBase>
  );
};

export default AboutComp;
