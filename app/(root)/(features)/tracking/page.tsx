"use client"
import React, { useState } from "react";
import Content from '@/components/tracking/Content';

function page() {
    const [selected, setSelected] = useState("all");
  
  return (
    <>  
      <Content selected={selected} setSelected={setSelected}/>
    </>
  )
}

export default page