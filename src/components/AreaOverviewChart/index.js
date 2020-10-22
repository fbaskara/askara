import React from 'react'
import PropTypes from "prop-types";

import {
  VictoryArea,
  VictoryChart,
  VictoryStack,
  VictoryAxis,
} from "victory";
import styled, { css } from "styled-components";
import { colorValues } from "../../utils";

export const setContainerBg = (color, opacity) => {
  const bgColor = colorValues(color);

  return `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${opacity})`;
};

export const DetailContainer = styled.div`
  padding: 20px 20px;
  background: linear-gradient(180deg, ${props => props.bgColor ? 
    `${setContainerBg(props.bgColor, 0.7)}` : `${setContainerBg(`rgba(235,234,247, 0.7)`, 0.7)}`} 11%, rgba(255,255,255,1) 78%);

`;

export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7.5px 10px 7.5px;
  border-color: transparent transparent #318D70 transparent;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 7.5px 0 7.5px;
  border-color: #dd3323 transparent transparent transparent;
`;

export const DiffLabel = styled.p`
  margin: 0 0 0 18px;
  font-size: 13px;
  ${props => props.diffType === 'up' ? 
    css`
      color: #318D70;
    ` :
    css`
      color: #dd3323;
    `
  }
`

const LegendItem = (props) => {
  return (
    <div style={{...{ display: "flex", alignItems: "center"}, ...props.style}}>
      <div
        className="legendIcon"
        style={{ background: props.bgColor, width: props.width, height: props.height }}
      ></div>
      <h5 style={{ margin: "0 0 0 8px", fontWeight: 'normal' }}>{props.title}</h5>
    </div>
  );
}

const DetailItem = (props) => {
  const item = props.item;

  return (
    <div
      key={props.key+'='+item.detail.diffPercent}
      style={localStyle.detailWrap}
    >
      {item.detail.diffType === "up" ? (
        <TriangleUp style={{ position: "absolute", left: "0", top: "3px" }} />
      ) : (
        <TriangleDown style={{ position: "absolute", left: "0", top: "5px" }} />
      )}

      <DiffLabel diffType={item.detail.diffType}>
        {item.detail.diffPercent}
      </DiffLabel>
      <h2 style={localStyle.detailTitle}>{item.detail.value}</h2>

      <LegendItem
        bgColor={item.symbol.fill}
        width="10px"
        height="10px"
        title={item.title}
      />
    </div>
  );
}

const SingleDetailItem = props => {
  const item = props.item[0];

  return (
    <div style={localStyle.detailWrap}>
      {item.detail.diffType === "up" ? (
        <TriangleUp style={{ position: "absolute", left: "0", top: "3px" }} />
      ) : (
        <TriangleDown style={{ position: "absolute", left: "0", top: "5px" }} />
      )}

      <DiffLabel diffType={item.detail.diffType}>
        {item.detail.diffPercent}
      </DiffLabel>
      
      <h2 style={localStyle.detailTitle}>{item.detail.value}</h2>

      <div style={localStyle.flex}>
        {props.item.map((legend, idx) => {
          return (
            <LegendItem
              key={legend.title+'='+idx}
              style={{ marginRight: "20px" }}
              bgColor={legend.symbol.fill}
              width="10px"
              height="10px"
              title={legend.title}
            />
          );
        })}
      </div>
    </div>
  );
};

function AreaOverviewChart(props) {
  const data = props.items.data;

  return (
    <div className="areaOverviewChart">
      <style>{customCss}</style>

      <VictoryChart padding={0}>
        <VictoryAxis tickFormat={() => ""} />

        <VictoryStack>
          {data.map((item, index) => {
            return (
              <VictoryArea
                key={item.title + "=" + index}
                interpolation="natural"
                style={item.areaStyle}
                data={item.data}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>

      <DetailContainer bgColor={data[0].areaStyle.data.fill}>
        {
          props.showOneLegend ?
            <div>
              <SingleDetailItem item={data}/>
            </div> 
            :
            <div style={localStyle.flex}>
              {
                data.map((item, index) => {
                  return (
                    <DetailItem item={item}  key={index + "-" + item.detail.diffPercent} />
                  );
                })
              }
            </div>
        }
       
      </DetailContainer>
    </div>
  );
}

const customCss = `
  g[role='presentation'] {
    display: none;
  }

  .areaOverviewChart .VictoryContainer {
    line-height: 0;
  }
`;

const localStyle = {
  flex: { display: "flex" },
  detailTitle: { margin: "5px 0 10px 0" },
  detailWrap: { position: "relative", flex: "1" }
};

const propsData = {
  data: [
    {
      title: "Page Views",
      detail: { diffPercent: "12,7%", diffType: "up", value: "9,265,987" },
      symbol: { fill: "#AF56BC", type: "square" },
      areaStyle: {
        data: {
          stroke: "#AF56BC",
          fill: "#EBEAF7",
          strokeWidth: 2,
          fillOpacity: 0.7
        }
      },
      data: [
        { x: 2, y: 8 },
        { x: 4, y: 9 },
        { x: 5, y: 14 }
      ]
    },
    {
      title: "Unique Page Views",
      detail: { diffPercent: "5,2%", diffType: "down", value: "9,265,987" },
      symbol: { fill: "#1C74D9", type: "square" },
      areaStyle: {
        data: {
          stroke: "#1C74D9",
          fill: "#ECF3FC",
          strokeWidth: 2,
          fillOpacity: 0.7
        }
      },
      data: [
        { x: 3, y: 7 },
        { x: 1, y: 3 },
        { x: 2, y: 8 }
      ]
    }
  ]
};

AreaOverviewChart.defaultProps = {
  items: propsData,
  showOneLegend: false
};

AreaOverviewChart.propTypes = {
  items: PropTypes.object,
  showOneLegend: PropTypes.bool
};

export default AreaOverviewChart;