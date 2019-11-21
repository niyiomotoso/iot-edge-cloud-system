
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";
import axios from "axios";

class PlatformConfig extends Component {
  constructor(props) {
   // alert("Construct");
      super(props);
      this.state = {
        webhook: "",
        api_url: "",
        api_key:"",
        api_secret:"",
        platform:""
      };
    }
  
    update = (name, e) => {
      this.setState({ [name]: e.target.value });
    }
  
   addNewCloud = event => {
    event.preventDefault();

    axios.post("http://localhost:3600/settings", this.state).then((res)=>{
      //on success
      console.log(res);
      alert("Platform Config Added Successfully");

      }).catch((error)=>{
      //on error
      alert("There is an error in API call.");
      });

  };
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                title="Manage Clouds"
                content={
                  <form onSubmit={this.addNewCloud}> 
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Platform",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.platform,
                          onChange:(e) => this.update("platform", e)
                          // defaultValue: "Creative Code Inc.",
                          // disabled: true
                        },
                        {
                          label: "Host Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.api_url,
                          onChange: (e) => this.update("api_url", e)
                          // defaultValue: "michael23"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "API KEY",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.api_key,
                          onChange: (e) => this.update("api_key", e)
                          // defaultValue: "Mike"
                        },
                        {
                          label: "API SECRET",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.api_secret,
                          onChange: (e) => this.update("api_secret", e)
                          // defaultValue: "Andrew"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Client/Device Id",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.webhook,
                          onChange: (e) => this.update("webhook", e)
                          // defaultValue:
                          //   "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    />
    

                    <Button bsStyle="info" pullRight fill type="submit">
                      Add New Cloud
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
       
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PlatformConfig;
