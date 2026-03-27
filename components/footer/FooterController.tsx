import Image from 'next/image';
import React from 'react';

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
                {/* Top Grid Sections */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media Column */}
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

                {/* Legal Links Bar */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400 font-medium">
                        <a href="#" className="hover:underline">Compliance, Legal & Regulatory</a>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <a href="#" className="hover:underline">File a Complaint</a>
                    </div>
                </div>

                {/* Copyright and Disclaimer */}
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
                        © 2026 Corpay, Inc. The Corpay logo is owned by Corpay. All third-party marks and/or logos displayed herein are
                        registered ® or claimed ™ trademarks of their respective owners. Corpay respects all trademark rights.
                    </p>

                    {/* Logo Placeholder */}
                    <div className="flex justify-center items-center gap-1">
                        <span className="text-2xl font-bold tracking-tight">Corpay</span>
                        <span className="text-[#ff4d4d] text-xl font-bold">^</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterController;