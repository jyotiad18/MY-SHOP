import React from "react";

const ProfileDetail = () => {
    return (
        <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Address" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Address" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter City" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Phone Number</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Region" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Phone Number</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Postal Code" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Moblie Number</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Postal Code" />
            </div>
        </form>
    );
}
export default ProfileDetail;