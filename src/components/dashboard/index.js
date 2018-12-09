import React from 'react'

export const Dashboard = (props) => {
    console.log(props);
    return(
        <div className="center">
            Marathon Pets Dashboard <h1>{ props.match.params.id }</h1>
        </div>
    )
}

export default Dashboard