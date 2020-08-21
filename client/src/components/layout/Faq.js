import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class FAQs extends Component {
    render() {
        return (
            <div>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#section_1">
                        <h1>Frequently Asked Questions</h1>
                        <h2>These are dummy Infos!!! Work in progress</h2>
                       </a></li>
                        <li><a href="#section_2">Section 2</a></li>
                        <li><a href="#section_3">Section 3</a></li>
                    </ul>
                </ScrollspyNav>
                
                <div>
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
                    <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
                    <div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
                </div>
            </div>
        );
    }
}

export default FAQs;