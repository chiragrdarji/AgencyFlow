import IntegrationLayout from "@/components/integration-layout";
import { useEffect } from "react";

export default function OpenDentalIntegration() {

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        jquery.async = true;
        document.body.appendChild(jquery);

        jquery.onload = () => {
            const script = document.createElement("script");
            script.src = "/js/opendental-json.js";
            script.async = true;
            document.body.appendChild(script);
        };

        return () => {
            document.body.removeChild(jquery);
        };
    }, []);
    return <IntegrationLayout type="open-dental" />;

}
