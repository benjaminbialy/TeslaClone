import React from 'react'
import "./BodyItem.css"

function BodyItem(props) {
    return (
        <div className="body" style={{backgroundImage: `url(${props.background__image})`}}>
            <div className="body--product">{props.product}</div>
            <div className="body--description">{props.description}</div>
            <button className="body--first__btn">{props.first__btn}</button>
            <button className="body--second__btn">{props.second__btn}</button>
        </div>
    )
}

export default BodyItem
