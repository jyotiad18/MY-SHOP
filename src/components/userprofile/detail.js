import React, { useState, useEffect } from "react";
import ProfileDetail from "./profile";
import AddressDetail from "./address";
import { fetchData, methodNum} from '../../utils/service.js';

const UserDetail = () => {
    const [profilTab, setProfilTab] = useState(true);
    const [addressTab, setAddressTab] = useState(false);
    const [shippingDetail, setShippingDetail] = useState([]);

    useEffect(() => {
        async function fetchRegions() {
            const resp = await fetchData('shipping/regions', methodNum.GET);
            if (resp.length > 0) {
                setShippingDetail(resp);
            }
        }
        fetchRegions()
    }, []);

    const onTabClick = (e) => {
        e.preventDefault();
        const tabId = e.target.id;
        if (tabId === 'profilTab') {
            setProfilTab(true);
            setAddressTab(false);
        }
        else 
        {
            setProfilTab(false);
            setAddressTab(true);
        }
    }
    return (
        <div className="row">
            <div className="col-4"></div>
            <div className="col-6 card">
             <div className="card-body">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                        <a className={profilTab ? "nav-link in active" : "nav-link"} id="profilTab" onClick={onTabClick} href="" role="tab" aria-controls="home" aria-selected="true">Profile Detail</a>
                        </li>
                        <li className="nav-item">
                        <a className={addressTab ? "nav-link in active" : "nav-link"} id="addressTab" onClick={onTabClick} href="" role="tab" aria-controls="profile" aria-selected="false">Billing & Delivary Address</a>
                        </li>
                       
                    </ul>
                <div className="tab-content" id="myTab">
                    <div className={profilTab ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel">
                        <ProfileDetail />
                    </div>
                        <div className={addressTab ? "tab-pane show  active" : "tab-pane fade"} role="tabpanel">
                            <AddressDetail shippingDetail={shippingDetail}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserDetail;