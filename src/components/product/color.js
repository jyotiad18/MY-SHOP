import React from "react";

const Color = (props) => {
    const getStyle = (color) => {
        return {
            background: color
        }
    }
    return (
        <div className='col col-12'>
            {
                props.color.map((_c, i) =>
                    (<div className="product__attributes__color" key={i} style={ getStyle(_c.attribute_value) }></div>)
                )
            }
        </div>
    );
}

export default Color;