import React from 'react'
import pic from "../../img/showOder.webp"

export default class Details extends React.Component {
    render = () => {
        return (
            <>
                <div>
                    <img src={pic} width="100%" />
                </div>
            </>
        )
    }
}