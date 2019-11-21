
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import socketIOClient from "socket.io-client";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://192.168.43.244:3600"
    };
  }

  componentDidMount(){
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));

  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    //const { response } = this.state;
    return (
      <div className="content">
        <div style={{ textAlign: "center" }}>
          {this.state.response.temperature
              ? <p>
               Realtime Analytics
              </p>
              : <p>PI YET TO BEGIN DATA LOGGING...</p>}
        </div>

        <Grid fluid>
          <Row>
           
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Temperature"
                statsValue={this.state.response.temperature}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={this.state.response.time}
              />
            </Col>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-primary" />}
                statsText="Humidity"
                statsValue={this.state.response.humidity}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText= {this.state.response.time}
              />
              </Col>
          </Row>
          <Row>
            {/* <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col> */}
        
          </Row>

          <Row>
            {/* <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col> */}

            {/* <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
