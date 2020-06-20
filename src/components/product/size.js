import React from "react";

const Size = (props) => {
    const onHandleClick = (e) => {
        props.handleSize(e);
    }
    return (
        <>
        {
             props.sizes.length > 0 && props.sizes.map((s, i) =>
                 (<span className="product__attributes__size" key={i} onClick={onHandleClick} id={s.attribute_value}> {s.attribute_value}</span>)
            )
        }
        </>
    );
}

export default Size;