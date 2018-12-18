import React, { PureComponent } from 'react'

export class Dashboard extends PureComponent {
    componentDidMount() {
        // console.log('dashboard mount props', this.props);
        const wheelId = this.props.wheelId;
        if (wheelId) {
            this.props.fetchCurrentWheelData(wheelId);
        }
    }

    componentDidUpdate (prevProps) {
        console.log('dashboard store update...',this.props.wheelId,'...', prevProps.wheelId);
        if (this.props.wheelId !== prevProps.wheelId) {
            console.log('fetchWheelData')
            this.props.fetchCurrentWheelData(this.props.wheelId);
        }
    }

    render () {
        console.log('dashboard render', this.props.currentStats);
        const { currentStats, tripStats } = this.props;
        // debugger;
        return (

            <div className="center">
                <h1>{ this.props.match.params.id }'s wheel</h1>
                
                <h5>Current Stats</h5>
                <ul>
                    <li>Current RPM: { currentStats.current_rpm}</li>
                    <li>Distance Ft: { currentStats.distance_ft}</li>
                    <li>Duration: { currentStats.duration}</li>
                    <li>Revolutions: { currentStats.revolutions}</li>
                </ul>
                <br />
                <h5>Trip Stats</h5>
                <ul>
                    <li>Max RPM: { tripStats.rpm_max}</li>
                    <li>Distance Ft: { tripStats.distance_ft}</li>
                    <li>Duration: { tripStats.duration}</li>
                    <li>Revolutions: { tripStats.revolutions}</li>
                </ul>
            </div>
        );
    }
}

export default Dashboard