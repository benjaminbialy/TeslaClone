import React from 'react'
import "./Designer.css"
function Designer(props) {
    return (
        <div className="Designer">
            <div className="designer--column">
                <h1 className="designer--column--product">{props.product}</h1>
                <p className="designer--column--delivery__date">{props.delivery__date}</p>
                <div className="designer--column--stats">
                    <div className="designer--column--stats--range">{props.range}</div>
                    <div className="designer--column--stats--speed">{props.speed}</div>
                    <div className="designer--column--stats--zero__to__hundred">{props.time}</div>
                    <div className="designer--column--stats--range__label">Range (est.)</div>
                    <div className="designer--column--stats--speed__label">Top Speed</div>
                    <div className="designer--column--stats--zero__to__hundred__label">0-100 km/h</div>
                </div>
                <h2 className="designer--column--feature__label">Dual Motor All-Wheel Drive</h2>
                <div className="designer--column--select">
                    .designer--column--select
                </div>
                
                {/* Feature Name*/}
                {/* Input Box for feature*/}
            </div>
        </div>
    )
}

export default Designer
