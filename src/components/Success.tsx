import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const Success = () => {

    return (
        <div className="flex min-w-screen min-h-screen overflow-hidden justify-center items-center">
            <div className="flex items-center justify-center gap-1 text-xl md:text-3xl h-36 max-h-[90vh] max-w-[90vw]">
                <IconCircleCheckFilled color="green" height={50} width={50} />
                Your message sent successfully.
            </div>
        </div>
    );
};

export default Success;
