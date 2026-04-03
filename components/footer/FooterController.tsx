import Image from 'next/image';
import Link from 'next/link';

const FooterController = () => {
    const sections = [
        {
            title: "Company",
            links: ["About Us", "About Corpay Inc.", "Newsroom", "Careers", "Partnerships"]
        },
        {
            title: "Solutions",
            links: ["Corporate Markets", "Private Markets"]
        },
        {
            title: "Resources",
            links: ["Market Analysis", "Blog", "Case Studies", "Webcasts & Podcasts", "The Line"]
        }
    ];

    return (
        <footer className="bg-black text-white py-16 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-[777px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li className='m-0' key={link}>
                                        <a href="#" className="text-white transition-colors text-md font-normal">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Follow Us</h3>
                        <div className="flex space-x-5">
                            <a href="#" className="hover:text-gray-400 invert">
                                <Image
                                    src={'/assets/corporate_market_icon.png'}
                                    alt={"Awards"}
                                    width={30}
                                    height={30}
                                    style={{ objectFit: 'cover', objectPosition: "center" }}
                                    priority={false}
                                />
                            </a>
                            <a href="#" className="hover:text-gray-400 invert">
                                <Image
                                    src={'/assets/corporate_market_icon.png'}
                                    alt={"Awards"}
                                    width={30}
                                    height={30}
                                    style={{ objectFit: 'cover', objectPosition: "center" }}
                                    priority={false}
                                />
                            </a>
                            <a href="#" className="hover:text-gray-400 invert">
                                <Image
                                    src={'/assets/corporate_market_icon.png'}
                                    alt={"Awards"}
                                    width={30}
                                    height={30}
                                    style={{ objectFit: 'cover', objectPosition: "center" }}
                                    priority={false}
                                />
                            </a>
                            <a href="#" className="hover:text-gray-400 invert">
                                <Image
                                    src={'/assets/corporate_market_icon.png'}
                                    alt={"Awards"}
                                    width={30}
                                    height={30}
                                    style={{ objectFit: 'cover', objectPosition: "center" }}
                                    priority={false}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-[877px] mx-auto border-t border-gray-800 pt-8 mb-8 font-normal">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white font-medium">
                        <a href="#" className="hover:underline">Compliance, Legal & Regulatory</a>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <a href="#" className="hover:underline">File a Complaint</a>
                    </div>
                </div>

                <div className="max-w-[870px] mx-auto text-center mx-auto space-y-8">
                    <p className="text-[16px] text-white leading-relaxed">© 2026 Corpay, Inc. The Corpay logo is owned by Corpay. All third-party marks and/or logos displayed herein are registered ® or claimed ™ trademarks of their respective owners. Corpay respects all trademark rights.</p>

                    <div className="flex-center cursor-pointer">
                        <Link href="/">
                            <span className="text-2xl font-bold tracking-tight">Corpay</span>
                            <span className="text-[#ff4d4d] text-xl font-bold">^</span>
                            {/* <Image
                                src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
                                alt="Corpay"
                                width={126}
                                height={27}
                                className="h-auto w-auto"
                            /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterController;