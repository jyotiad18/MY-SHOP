import React from "react";

const Color = ({ colors, handleColor }) => {
    const getStyle = (color) => {
        return {
            background: color
        }
    };
   
    return (   
        <>
        {                
            colors.length > 0 && colors.map((_c, i) =>
                (<span className="product__attributes__color" key={i}
                    id={_c.attribute_value}
                    style={getStyle(_c.attribute_value)}
                    onClick={(e) => handleColor(e)}>                    
                </span>))       
        }
       </>         
    )
}

export default Color;