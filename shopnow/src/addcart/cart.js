import React, { useState } from "react";
import AddCart from "../addcart/addcart";

function Cart() {
  const [data, setData] = useState(initialState);
  return (
    <div>
      <AddCart cart={data} />
    </div>
  );
}

export default Cart;
