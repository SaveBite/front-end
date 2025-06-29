"use client"
import React, { useState } from "react";
import Content from '@/components/tracking/Content'
import Header from "@/components/tracking/Header";
import Info from "@/components/tracking/Info";

function page() {
    const [selected, setSelected] = useState("all");
  
  return (
    <>  
      <Content selected={selected} setSelected={setSelected}/>
    </>
  )
}

export default page