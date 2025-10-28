import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
    title: string;
    description: string;
    alt:string;
    stepNo:string;
    image?: string;
}

interface SetupFlowProps {
    steps: Step[];
}

export default function SetupFlow({ steps }: SetupFlowProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedStep = steps[selectedIndex];

    return (
        <div className="max-w-6xl mx-auto  bg-white flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-1/3 space-y-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={` items-center p-4 pb-0  cursor-pointer rounded-lg  transition 
              ${index === selectedIndex ? "text-primary" : "text-black"}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {/* <CheckCircle
                            className={`mr-3 ${index === selectedIndex ? "text-primary" : "text-gray-300"}`}
                            size={20}
                        /> */}
                        
                        <span className="font-bold text-black-800 ">{step.stepNo}</span>
                        <span className="font-medium ">{step.title}</span>
                    </div>
                ))}
                
                
            </div>

            {/* Right Column */}
            <div className="lg:w-[60%] lg-h-[320px]">
                <Card className="shadow-lg border-0">
                    <CardContent className="p-6 bg-gradient-to-br from-primary-light to-blue-50 rounded-lg ">
                        {selectedStep.image && (
                            <img
                                src={selectedStep.image}
                                alt={selectedStep.alt}
                                className="mb-0 rounded-lg w-full object-contain"
                            />
                        )}
                        {/* <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {selectedStep.title}
                        </h3>
                        <p className="text-gray-700">{selectedStep.description}</p> */}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}