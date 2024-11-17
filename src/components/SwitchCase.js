import React, { useState } from 'react';

function SwitchCase() {
  return (
    <div className='switch'>
      <form>
        <label>Select State</label>
        <select onChange={(eo) => {
          console.log(eo.target.value);
          let selectedState = eo.target.value;

          if (selectedState === "Andhra Pradesh") {
            console.log("Amaravati");
          } else if (selectedState === "Telangana") {
            console.log("Hyderabad");
          } else if (selectedState === "Tamil Nadu") {
            console.log("Chennai");
          } else if (selectedState === "Kerala") {
            console.log("Thiruvananthapuram");
          } else if (selectedState === "Karnataka") {
            console.log("Bengaluru");
          } else if (selectedState === "Maharashtra") {
            console.log("Mumbai");
          } else if (selectedState === "Gujarat") {
            console.log("Gandhinagar");
          } else if (selectedState === "Rajasthan") {
            console.log("Jaipur");
          } else if (selectedState === "Madhya Pradesh") {
            console.log("Bhopal");
          } else if (selectedState === "Uttar Pradesh") {
            console.log("Lucknow");
          } else if (selectedState === "Punjab") {
            console.log("Chandigarh");
          } else if (selectedState === "Haryana") {
            console.log("Chandigarh");
          } else if (selectedState === "West Bengal") {
            console.log("Kolkata");
          } else if (selectedState === "Bihar") {
            console.log("Patna");
          } else if (selectedState === "Odisha") {
            console.log("Bhubaneswar");
          } else if (selectedState === "Chhattisgarh") {
            console.log("Raipur");
          } else if (selectedState === "Jharkhand") {
            console.log("Ranchi");
          } else if (selectedState === "Assam") {
            console.log("Dispur");
          } else if (selectedState === "Arunachal Pradesh") {
            console.log("Itanagar");
          } else if (selectedState === "Manipur") {
            console.log("Imphal");
          } else if (selectedState === "Meghalaya") {
            console.log("Shillong");
          } else if (selectedState === "Mizoram") {
            console.log("Aizawl");
          } else if (selectedState === "Nagaland") {
            console.log("Kohima");
          } else if (selectedState === "Tripura") {
            console.log("Agartala");
          } else if (selectedState === "Sikkim") {
            console.log("Gangtok");
          } else if (selectedState === "Goa") {
            console.log("Panaji");
          } else if (selectedState === "Himachal Pradesh") {
            console.log("Shimla");
          } else if (selectedState === "Uttarakhand") {
            console.log("Dehradun");
          } else {
            console.log(`None of the Above`);
          }

          switch (selectedState) {
            case "Andhra Pradesh":
              console.log("Amaravati");
              break;
            case "Telangana":
              console.log("Hyderabad");
              break;
            case "Tamil Nadu":
              console.log("Chennai");
              break;
            case "Kerala":
              console.log("Thiruvananthapuram");
              break;
            case "Karnataka":
              console.log("Bengaluru");
              break;
            case "Maharashtra":
              console.log("Mumbai");
              break;
            case "Gujarat":
              console.log("Gandhinagar");
              break;
            case "Rajasthan":
              console.log("Jaipur");
              break;
            case "Madhya Pradesh":
              console.log("Bhopal");
              break;
            case "Uttar Pradesh":
              console.log("Lucknow");
              break;
            case "Punjab":
              console.log("Chandigarh");
              break;
            case "Haryana":
              console.log("Chandigarh");
              break;
            case "West Bengal":
              console.log("Kolkata");
              break;
            case "Bihar":
              console.log("Patna");
              break;
            case "Odisha":
              console.log("Bhubaneswar");
              break;
            case "Chhattisgarh":
              console.log("Raipur");
              break;
            case "Jharkhand":
              console.log("Ranchi");
              break;
            case "Assam":
              console.log("Dispur");
              break;
            case "Arunachal Pradesh":
              console.log("Itanagar");
              break;
            case "Manipur":
              console.log("Imphal");
              break;
            case "Meghalaya":
              console.log("Shillong");
              break;
            case "Mizoram":
              console.log("Aizawl");
              break;
            case "Nagaland":
              console.log("Kohima");
              break;
            case "Tripura":
              console.log("Agartala");
              break;
            case "Sikkim":
              console.log("Gangtok");
              break;
            case "Goa":
              console.log("Panaji");
              break;
            case "Himachal Pradesh":
              console.log("Shimla");
              break;
            case "Uttarakhand":
              console.log("Dehradun");
              break;
            default:
              break;
          }
        }}>
          <option>Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Maharashtra</option>
          <option>Gujarat</option>
          <option>Rajasthan</option>
          <option>Madhya Pradesh</option>
          <option>Uttar Pradesh</option>
          <option>Punjab</option>
          <option>Haryana</option>
          <option>West Bengal</option>
          <option>Bihar</option>
          <option>Odisha</option>
          <option>Chhattisgarh</option>
          <option>Jharkhand</option>
          <option>Assam</option>
          <option>Arunachal Pradesh</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Tripura</option>
          <option>Sikkim</option>
          <option>Goa</option>
          <option>Himachal Pradesh</option>
          <option>Uttarakhand</option>
        </select>
      </form>
      <hr />
    </div>
  );
}

export default SwitchCase;
