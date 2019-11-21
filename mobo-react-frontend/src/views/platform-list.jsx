
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import axios from 'axios';
import Card from "components/Card/Card.jsx";
import { tdArray } from "variables/Variables.jsx";

class PlatformList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
  }  
    //this.handleLoad = this.handleLoad.bind(this);
 }
  componentDidMount() {
   this.getClouds();
  }
  settingsHeader = ["PLATORM", "HOST", "API KEY", "API SECRET", "Device/Client ID", "CREATED AT"];
  configs = [];
  getClouds(){
    const setState = this.setState.bind(this);  
    axios.get("http://localhost:3600/settings",{}).then((res)=>{
      //on success
      var result = res.data.data;
      //this.configs=result;
      result.forEach(element => {
         var config = [];
         config.push(element._id);
         config.push(element.platform);
         config.push(element.api_url);
         config.push(element.api_key);
         config.push(element.api_secret);
         config.push(element.webhook);

         this.configs.push(config);
      });
      setState({data: this.configs});
      console.log(this.configs);
     
      }).catch((error)=>{
      //on error
      alert("There is an error in API call.");
      });
  }

  render() {
    return (
      this.state.data === null ? 
                <div>Loading</div>
            :
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Supported IoT Cloud Platforms"
                category="More can be added"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {this.settingsHeader.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.configs.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default PlatformList;
