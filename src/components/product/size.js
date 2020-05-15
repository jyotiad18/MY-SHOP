import React from "react";

const Size = (props) => {
    return (
        <div className='col col-12'>
            {
                props.size.map((s, i) =>
                    (<div className="product__attributes__size" key={i} > { s.attribute_value}</div>)
                )
            }
        </div>
    );
}

export default Size;