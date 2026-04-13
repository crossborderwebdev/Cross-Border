import LeftImageContentBlock from "../LeftImageContentBlock";
import RightImageContentBlock from "../RightImageContentBlock";
import LeftVideoContentBlock from "../LeftVideoContentBlock";

const ContentBlock = ({ entry }: { entry: any }) => {
    const style = entry?.fields?.style;

    const renderBlockStyle = () => {
        if (style === "Left Image Right Content") {
            return <LeftImageContentBlock entry={entry} />;
        } else if (style === "Left Video Right Content") {
            return <LeftVideoContentBlock entry={entry} />;
        } else if (style === "Left Content Right Image") {
            return <RightImageContentBlock entry={entry} />;
        }
    }

    return (
        renderBlockStyle()
    );
};

export default ContentBlock;