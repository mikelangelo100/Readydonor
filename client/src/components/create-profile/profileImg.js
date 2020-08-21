import React, { Component } from "react";
import axios from "axios";

//import { Card, CardHeader, CardText, CardBody, Row, Col } from "reactstrap";

const endpoint = "http://localhost:5000/api/document/upload";

class NewFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  handleSelectedFile = e => {
    e.preventDefault();
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  onChange = e => {
    this.setState({ selectedFile: e.target.value });
  };

  handleUpload = event => {
    event.preventDefault();
    const Data = new FormData(event.target);
    Data.append("file", this.state.selectedFile);
    console.log(this.props.history);
    axios
      .post(endpoint, Data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) 
      .then((response) => {
        console.log(this.props.history);
        alert("The image is successfully uploaded")
        this.props.history.push("/");
      })
      .catch(error => {
        alert("Oops some error happened, please try again");
      });
  };

  render() {

    return (
      <div>
        
                  <form onSubmit={this.handleUpload}>
                  

                    <div className="form-group">
                      <input
                        type="file"
                        name="file"
                        id=""
                        onChange={this.handleSelectedFile}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Upload
                    </button>
                  </form>
                
       
      </div>
    );
  }
}

export default NewFileUpload;


// ///,  {
//   headers: {
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Content-Type': 'multipart/form-data'

    
    
// } }