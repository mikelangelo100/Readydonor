import React, { Component } from 'react';
import axios from 'axios';

class ImageUrl extends Component {
    state = { 
        selectedFile : null
     }
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile : event.target.files[0]
        })
    }
    fileUploadHandler = () => {
        axios.post('')

    }
    render() { 
        return (  
            <div>
                <input type = "file" onChange = {fileSelectedHandler}></input>
                <button onClick ={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}
 
export default ImageUrl;