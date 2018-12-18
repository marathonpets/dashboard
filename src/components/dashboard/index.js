import React, { PureComponent } from 'react';
import { initSpeedometer } from '../graphs/speedometer';
import './dashboard.css';

export class Dashboard extends PureComponent {
    componentDidMount() {
        // console.log('dashboard mount props', this.props);
        const wheelId = this.props.wheelId;
        if (wheelId) {
            this.props.fetchCurrentWheelData(wheelId);
        }

        initSpeedometer();
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
            //     <h5>Current Stats</h5>
            //     <ul>
            //         <li>Current RPM: { currentStats.current_rpm}</li>
            //         <li>Distance Ft: { currentStats.distance_ft}</li>
            //         <li>Duration: { currentStats.duration}</li>
            //         <li>Revolutions: { currentStats.revolutions}</li>
            //     </ul>
            //     <br />
            //     <h5>Trip Stats</h5>
            //     <ul>
            //         <li>Max RPM: { tripStats.rpm_max}</li>
            //         <li>Distance Ft: { tripStats.distance_ft}</li>
            //         <li>Duration: { tripStats.duration}</li>
            //         <li>Revolutions: { tripStats.revolutions}</li>
            //     </ul>
            
            <>
                <div>
                    <h1>{ this.props.match.params.id }'s wheel</h1>
                </div>
                <button className="start-dash">Start Dash</button>
                <button className="stop-dash">Stop Dash</button>
                <div className="speedometer-section">
                    <div className="speedometer">
                        <div id="db-readout">0</div>
                        <div className="mph">MPH</div>
                        <div className="canvas"></div>
                        <div className="odometer">15432</div>
                    </div>
                </div>

                <section className="dashboard-body">
                    <section className="scoreboard">
                        <div className="day-logs">
                            <div className="section-title">Day Stats</div>
                            <div className="log-container">
                                <div className="stat-section">
                                    <div className="stat-title">Revolutions</div>
                                    <div className="stat-value">
                                        <span className="value">173</span>
                                        <span className="metric"></span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Distance</div>
                                    <div className="value-container">
                                        <span className="value">4.6</span>
                                        <span className="metric">Mi</span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Time</div>
                                    <div className="value-container">
                                        <span className="value">3.55</span>
                                        <span className="metric">Hrs</span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Running Sessions</div>
                                    <div className="value-container">
                                        <span className="value">16</span>
                                        <span className="metric"></span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Average RPMs</div>
                                    <div className="value-container">
                                        <span className="value">40.6</span>
                                        <span className="metric">Min</span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Average Speed</div>
                                    <div className="value-container">
                                        <span className="value">3.2</span>
                                        <span className="metric">MPH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trip-logs">
                            <div className="section-title">Trip Stats</div>
                            <div className="log-container">
                                <div className="stat-section">
                                    <div className="stat-title">Revolutions</div>
                                    <div className="value-container">
                                        <span className="value">132,000</span>
                                        <span className="metric"></span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Distance</div>
                                    <div className="value-container">
                                        <span className="value">84.2</span>
                                        <span className="metric">Mi</span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Time</div>
                                    <div className="value-container">
                                        <span className="value">832.8</span>
                                        <span className="metric">Hrs</span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Sessions Per Day Avg</div>
                                    <div className="value-container">
                                        <span className="value">23</span>
                                        <span className="metric"></span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Average RPMs</div>
                                    <div className="value-container">
                                        <span className="value">32.2</span>
                                        <span className="metric">Min</span>
                                    </div>
                                </div>
                                <div className="stat-section">
                                    <div className="stat-title">Average Speed</div>
                                    <div className="value-container">
                                        <span className="value">3.6</span>
                                        <span className="metric">MPH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </>
        );
    }
}

export default Dashboard