import React from 'react'
import "./BodyItem.css"

function BodyItem(props) {
    var first__target = (props.product.replace(/\s+/g, '')).toLowerCase() + "/" + (props.first__btn.replace(/\s+/g, '')).toLowerCase();
    var sceond__target = (props.product.replace(/\s+/g, '')).toLowerCase() + "/" + (props.second__btn.replace(/\s+/g, '')).toLowerCase();
    return (
        <div className="body" style={{backgroundImage: `url(${props.background__image})`}}>
            <div className="body--product">{props.product}</div>
            <div className="body--description">{props.description}</div>
            <div className="body--buttons">
                <a className="body--buttons--first__btn" href={first__target}>{props.first__btn}</a>
                <a className="body--buttons--second__btn" href={sceond__target}>{props.second__btn}</a>
            </div>
        </div>
    )
}

export default BodyItem
