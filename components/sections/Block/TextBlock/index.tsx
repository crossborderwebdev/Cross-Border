import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const TextBlock = ({ entry }: { entry: any }) => {
    const titleOptions = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
                <h2 className="text-[30px] md:text-[40px] leading-12 mb-4 font-semibold text-black leading-tight">
                    {children}
                </h2>
            ),
            [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
                <h4 className="font-medium text-[22px] md:text-3xl text-gray-700 mt-2">
                    {children}
                </h4>
            )
        }
    };

    return (
        <div className="text-center my-15">
            {entry?.fields?.title ? (
                documentToReactComponents(entry.fields.title, titleOptions)
            ) : (
                <>
                    No Entry
                </>
            )}
        </div>
    );
};

export default TextBlock;