import React, { useState } from "react";
import BoxContainer from "../../components/BoxContainer";
import TableContainer from "../../components/TableContainer";
import ArticleContent from "../../components/ArticleContent";
import AreaOverviewChart from "../../components/AreaOverviewChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const dataSuhu = {
  title: "Current Temperature",
  value: 60
}

const dataSinar = 
{
  title: "Current Sunlight Exposure",
  value: 50
}

const dataKelembaban = 
{
  title: "Current Humidity",
  value: 30
}

const dataUdara = {
  title: "Current Air Pressure",
  value: 30
}

const dataAir = {
  title: "Watering",
  value: 1000
}

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date()
    };
  }

  onChangeDate (date) {
    // useState(new Date())
  }

  
  
  render() {
    return (
      <>
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>

            <div className="level-right" style={{ width:"18%" }}>
              <DatePicker 
                selected={this.state.startDate} 
                onChange={date => this.onChangeDate(date)} 
                dateFormat="MMMM d, yyyy"
                className="input" />
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <ArticleContent 
                    data={dataSuhu}
                    classTitle="is-5"
                  />
                  <ArticleContent 
                    data={dataSinar}
                    classTitle="is-5"
                  />
                </div>
                <div className="tile is-parent is-vertical">
                  <ArticleContent 
                    data={dataKelembaban}
                    classTitle="is-5"
                  />
                  <ArticleContent 
                    data={dataUdara}
                    classTitle="is-5"
                  />
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <ArticleContent 
                data={dataAir}
                classTitle="is-1  "                
              />
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <BoxContainer
                titleStyle={{ paddingBottom: "20px" }}
                title="Page View"
                containerStyle={{ marginBottom: "24px" }}
                contentStyle={{ padding: "0" }}
                linkTarget="/details/cohort"
                linkTitle="View summary"
              >
                <AreaOverviewChart showOneLegend={true} items={propsData} />
              </BoxContainer>
            </div>
            <div className="tile is-parent">
              <BoxContainer
                titleStyle={{ paddingBottom: "20px" }}
                title="Page View"
                containerStyle={{ marginBottom: "24px" }}
                contentStyle={{ padding: "0" }}
                linkTarget="/details/cohort"
                linkTitle="View summary"
              >
                <AreaOverviewChart showOneLegend={true} items={propsData} />
              </BoxContainer>
            </div>
            <div className="tile is-parent">
              <BoxContainer
                titleStyle={{ paddingBottom: "20px" }}
                title="Page View"
                containerStyle={{ marginBottom: "24px" }}
                contentStyle={{ padding: "0" }}
                linkTarget="/details/cohort"
                linkTitle="View summary"
              >
                <AreaOverviewChart showOneLegend={true} items={propsData} />
              </BoxContainer>
            </div>
            <div className="tile is-parent">
              <BoxContainer
                titleStyle={{ paddingBottom: "20px" }}
                title="Page View"
                containerStyle={{ marginBottom: "24px" }}
                contentStyle={{ padding: "0" }}
                linkTarget="/details/cohort"
                linkTitle="View summary"
              >
                <AreaOverviewChart showOneLegend={true} items={propsData} />
              </BoxContainer>
            </div>
          </div>
        
          <section className="section">
            <TableContainer />
          </section>
        </div>
      </>
    );
  }
}

export default Dashboard;