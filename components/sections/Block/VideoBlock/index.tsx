import Image from 'next/image';

const VideoBlock = ({ entry }: { entry: any }) => {

    const posterUrl = entry?.fields?.poster?.fields?.file?.url
        ? `https:${entry?.fields?.poster?.fields?.file?.url}`
        : null;

    const videoUrl = entry?.fields?.video?.fields?.file?.url
        ? `https:${entry?.fields?.video?.fields?.file?.url}`
        : null;

    return (
        <>
            <div>
                <div className="max-w-[85%] md:max-w-[995px] mx-auto relative rounded-[24px] overflow-hidden group cursor-pointer">
                    {videoUrl ? (
                        <video
                            controls
                            poster={posterUrl || undefined}
                            className="w-full h-auto rounded-[24px]"
                        >
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    ) : (
                        posterUrl && (
                            <Image
                                src={posterUrl}
                                alt={entry.fields.poster?.fields.title || 'Video'}
                                width={1200}
                                height={675}
                                className="h-auto w-full"
                            />
                        )
                    )}
                </div>

            </div>
        </>
    )
}

export default VideoBlock