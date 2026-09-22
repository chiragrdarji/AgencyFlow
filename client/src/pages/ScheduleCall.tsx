import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";

export default function ScheduleaCall() {
    const metaTags = getMetaTags("privacyPolicy");

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://smartsync.one/" },
        { name: "Schedule a Call ", url: "https://smartsync.one/schedule-a-call" },
    ]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-10 py-10 md:py-0">
                <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/Ff8QEqSOqwBCb7JckznJ"
                    style={{
                        width: "100%",
                        height: "800px",
                        border: "none",
                    }}
                    title="Book a Meeting"
                    loading="lazy"
                />
            </div>
        </>

    );
}
