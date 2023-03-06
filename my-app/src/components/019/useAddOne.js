import { useState } from "react";

const useAddOne = (init) => {
  const [value, setValue] = useState(init);

  return [value, setValue];
};

export default useAddOne;
