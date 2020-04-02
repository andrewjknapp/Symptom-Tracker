import React, { Fragment } from "react";



let Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <AdditionalMedicalSupport /> : null }
            </div>
        );
    }
});

function AdditionalMedicalSupport() {
    return (


        <Fragment>
            <a onClick={Search} >Hospital finder</a>
            <iframe src="http://www.ushospitalfinder.com/widgets/widget" width="400" height="200" frameborder="0"> </iframe>
            <iframe src="https://www.health.gov/myhealthfinder?widget=true" name="myhealthfinderframe" frameborder="0" id="myhealthfinderframe" scrolling="yes" height="550" 
            width="100%" marginheight="0" title="myhealthfinder widget" marginwidth="0"><p>Your browser does not support iframes.</p></iframe>

        </Fragment>
    )
}

export default AdditionalMedicalSupport;