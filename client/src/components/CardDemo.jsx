import React from "react";
import { Button } from "@/components/ui/button";
import java from "../assets/exp/java.png";

const CardDemo = () => {
  return (
    <div className="relative w-[500px] h-[168px] mx-auto">
      <div className="absolute inset-0 bg-[#7127BA] blur-2xl opacity-40 rounded-full"></div>

      {/* Card Background and Content */}
      <div className="absolute inset-0 bg-[#2C1250] rounded-[15px] flex items-center p-5">

        {/* Image */}
        <div className="w-24 h-24 rounded-lg bg-transparent flex items-center justify-center">
          <img src={java} alt="Java Logo" className="w-16 h-16 object-contain" />
        </div>


        {/* Text + Button */}
        <div className="ml-5 text-white">
          <h1 className="text-xl font-semibold">Test Battle</h1>
          <p className="text-sm opacity-75 w-60">
            A user can take part in a test battle to assess their skills.
          </p>

          <Button className="mt-3 bg-[#4F228D] hover:bg-[#6b34c3]">
            Learn More
          </Button>

        </div>
      </div>
    </div>
  );
};

export default CardDemo;
