import React, {Component} from 'react'
import Sidebar from  '../sidebar'

class DiagnosisResult extends Component {
  
    render() {
 
    const result = this.props.location.state;
   
  
        return(
            <div className="result-container">
                <Sidebar className="sidebar_result" />
                <div className="result__page">
                    <h1 className="result-page-title">RESULT</h1>
                    <div className="main_result">
                    <div className="result__table">
                       
                        <table className="table_content">
                          {/* <tr> 
                              <td>Symptoms</td>
                              <td>  
                              { result.map(userResult1 => {
                            return(
                                
                            ) 
                        })}</td></tr> */}
                            <tr className="result_items">
                                 <td>Symptoms</td>
                                <td>Accuracy</td>
                                <td>Diagnosis</td>
                            </tr>
                            { result.map(userResult => {
                            return(
                                <tr className="result_items">
                                    <td className="entered_symptom">{userResult.Issue.Name}</td>
                                    <td className="entered_symptom">{userResult.Issue.Accuracy}</td>
                                    <td className="entered_symptom">{userResult.Issue.IcdName}</td>
                                </tr>
 
                            )
                            
                        })}
                            
                        </table>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default DiagnosisResult;