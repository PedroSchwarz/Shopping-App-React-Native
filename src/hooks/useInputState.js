import { useState } from "react";

export default initialState => {
  const [value, setValue] = useState(initialState);

  const changeValue = text => {
    setValue(text);
  };

  return [value, changeValue];
};
