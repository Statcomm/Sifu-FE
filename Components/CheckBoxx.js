import React, { useState } from "react";
import dataRecipes from "../dataRecipes";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

function CheckBoxx(props) {
  const [Checked, setChecked] = useState([]);

  const handelToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };
  const RenderCheckboxList = () =>
    dataRecipes.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handelToggle(value)}
          type="checkbox"
          checked={Checked.indexOf(value) === -1 ? false : true}
        />
        <span>{value.ingredients}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse className="checkboxx" defaultActiveKey={["0"]}>
        <Panel header key="1">
          {" "}
          <p style={{ color: "PURPLE" }}>
            <strong>I AM INEVITABLE</strong>
            <img
              className="thanos"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8344e3cd-63d9-450e-9031-f6a367c22ad9/de1equl-59459d22-216d-49dc-9d4f-a5cf3068d3d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzNDRlM2NkLTYzZDktNDUwZS05MDMxLWY2YTM2N2MyMmFkOVwvZGUxZXF1bC01OTQ1OWQyMi0yMTZkLTQ5ZGMtOWQ0Zi1hNWNmMzA2OGQzZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lAc0a3v1SNqT5HlgnjGRemrtegBfqdYRZ486ufw5OYg"
            ></img>
          </p>
          {RenderCheckboxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBoxx;
