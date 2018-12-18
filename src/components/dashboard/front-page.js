import React, { PureComponent } from 'react'

export class FrontPage extends PureComponent {
    render () {
        console.log('front page', this.props);
        return (
            <div className="row">
                <h3 className="col s8 offset-s3 ">
                    Marathon Pets FrontPage
                    {this.props.match.params.id}
                </h3>
            </div>
        );
    }
}

export default FrontPage