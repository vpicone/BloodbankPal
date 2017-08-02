import React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const DaySelector = props => {
        return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline"
        }}
      >
        <span style={{ fontSize: "20px", fontFamily: "Roboto" }}>
          See alternate day:
        </span>
        <DropDownMenu
              labelStyle={{ fontSize: "20px" }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              value = {props.dayOfWeek}
              onChange = {(event, index, value) => props.pickDay(value)}
            >
              <MenuItem
                value="Sunday"
                label="Sunday"
                primaryText="Sunday"
              />
              <MenuItem
                value="Monday"
                label="Monday"
                primaryText="Monday"
              />
              <MenuItem
                value="Tuesday"
                label="Tuesday"
                primaryText="Tuesday"
              />
              <MenuItem
                value="Wednesday"
                label="Wednesday"
                primaryText="Wednesday"
              />
              <MenuItem
                value="Thursday"
                label="Thursday"
                primaryText="Thursday"
              />
              <MenuItem
                value="Friday"
                label="Friday"
                primaryText="Friday"
              />
              <MenuItem
                value="Saturday"
                label="Saturday"
                primaryText="Saturday"
              />
            </DropDownMenu>
        </div>
        )
}

export default DaySelector;