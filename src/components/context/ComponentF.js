import React, { useReducer } from "react";
import { UserContext } from "./../../App";
import { ChannelContext } from "./../../App";
function ComponentF() {
  return (
    <div>
      ComponentF
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    User Context value {user} & Channel value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
