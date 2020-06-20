import React, { useState } from "react";
import { Customer } from "../../model/customer.js";
import { fetchData, methodNum } from '../../utils/service.js';

const AddressDetail = ({ shippingDetail }) => {
    const [address, setAddress] = useState(Customer.address);

    const onFormSubmit = async(e) => {
        e.preventDefault();
        const url = "customers/address";
        await fetchData(url, methodNum.PUT, address, true);
    };
    const handleOnChange = (e) => {            
        setAddress({
            ...address,
            [e.target.name]: e.target.name === 'shipping_region_id' ? parseInt(e.target.value) : e.target.value
        })
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label for="formGroupExampleInput">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Address"
                    name="address_1"
                    value={address.address_1}
                    onChange={handleOnChange}
                />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Address 1</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Address"
                    name="address_2"
                    value={address.address_2}
                    onChange={handleOnChange}
                />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">City</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter City"
                    name="city"
                    value={address.city}
                    onChange={handleOnChange}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Region</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Region"
                    name="region"
                    value={address.region}
                    onChange={handleOnChange}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Postal Code</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Postal Code"
                    name="postal_code"
                    value={address.postal_code}
                    onChange={handleOnChange}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Country</label>
                <select className="form-control" id="exampleFormControlSelect2"
                    name="country"
                    value={address.country}
                    onChange={handleOnChange}
                >
                    <option value="" selected="selected">(please select a country)</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                </select>
            </div>
            <div className="form-group">           
                <label for="formGroupExampleInput2">Shipping Detail</label>
                <select className="form-control" id="exampleFormControlSelect2"
                    name="shipping_region_id"
                    value={address.shipping_region_id}
                    onChange={ handleOnChange }
                >
                    {shippingDetail.length > 0 && shippingDetail.map((s, i) => (
                        <option value={s.shipping_region_id} key={i}>{s.shipping_region}</option>
                    ))
                    }
                </select>
            </div>
            <div className="form-group form-inline">
                <button type="submit" className="btn btn-success col-3">Save</button>
                <button type="button" className="btn btn-success col-3">Back</button>
            </div>
        </form>
    );
}
export default AddressDetail;