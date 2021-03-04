import React, {useState,useLayoutEffect}  from "react";
import ReactCompareImage from "react-compare-image";
import PageHeader from "../components/PageHeader";
import PageBanner from "../components/PageBanner";
import PageBase from "../components/PageBase";
import CTAbtn from "../components/CTAbtn";
import styled from "styled-components";
import details from "../content/gen_img_path/details.json";

function Campus(props) {
  const location = []
  for (const place in details) {
    location.push(place)
  }


  const BtnWraper = styled.div`
    width: auto;
    display:flex;
    justify-content: space-around;
  `
  const Instruction = styled.div`
    width:auto;
    height:200px;
    background:white;
  `
  const Gallery = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width:auto;
    height:auto;
    background: red;
  `
  const [type,setType] = useState(false)
  const change =(state)=>{
    setType(state)
  }
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      const width = document.getElementsByClassName('Preview').offsetWidth
      console.log(width)
      setSize(width/16*9);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const PreviewImg = styled.img`
    margin:20px;
    width:30%;
    height: ${
      size
    }px;
    background: white;
  `
  return (
    <PageBase>
      <PageHeader>SUTD MINECRAFT</PageHeader>
      <PageBanner></PageBanner>
      <BtnWraper>
        <CTAbtn selectUserType={()=>{change(true)}}>View in Minecraft</CTAbtn>
        <CTAbtn selectUserType={()=>{change(false)}}>View Photos</CTAbtn>
      </BtnWraper>
      {type ?
        <Instruction>
          this is the instruciton
        </Instruction>
        :
        <Gallery>
          {location.map((place, index) => {

            return(
              // <ImgWrap key={index}>
              //   <ReactCompareImage
              //
              //     leftImage={require(`../assets/images/before-after/${place}.jpg`)}
              //     rightImage={require(`../assets/images/before-after/${place}.png`)}
              //     sliderLineColor="var(--color-accent)"
              //   />
              // </ImgWrap>
              <PreviewImg key ={index} className={'Preview'} src = {require(`../assets/images/before-after/${place}.png`)}></PreviewImg>
            )
          })}


        </Gallery>
      }
    </PageBase>

  );
}

export default Campus;