import RootLayout from "@/components/Layouts/RootLayout";
import PcBuilder from "@/components/UI/PcBuilder";

function builder() {
    return (
        <>
            <PcBuilder />
        </>
    );
}

export default builder;


builder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};