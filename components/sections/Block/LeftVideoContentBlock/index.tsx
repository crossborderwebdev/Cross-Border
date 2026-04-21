import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const LeftVideoContentBlock = ({ entry }: { entry: any }) => {
    const videoUrl = entry?.fields?.video?.fields?.file?.url;
    const videoType = entry?.fields?.video?.fields?.file?.contentType || "video/mp4";
    const posterImage = entry?.fields?.image?.fields?.file?.url;
    const richContent = entry?.fields?.description;
    return (
        <div className='py-12'>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                <div className="max-w-[560px] w-full flex-1 relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    {videoUrl ? (
                        <video
                            className="w-full h-auto"
                            poster={posterImage ? `https:${posterImage}` : undefined}
                            controls
                        >
                            <source src={`https:${videoUrl}`} type={videoType} />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="bg-gray-200 h-[300px] w-full flex items-center justify-center text-black">
                            No video available
                        </div>
                    )}
                </div>
                <div className="max-w-[545px] lg:max-w-[384px] text-white">
                    <h2
                        className="text-center lg:text-left text-5xl font-bold mb-6"
                    >
                        {entry?.fields?.title}
                    </h2>

                    <div className="rich-text-wrapper text-center lg:text-left text-white/80">
                        {richContent && documentToReactComponents(richContent)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftVideoContentBlock