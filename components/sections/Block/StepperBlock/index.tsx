'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './style.css';

export default function StepperBlock({ entry }: { entry: any }) {
    const initialSteps = entry?.fields?.tile?.fields?.blocks || [];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % (initialSteps.length + 1));
        }, 1500);

        return () => clearInterval(interval);
    }, [initialSteps.length]);

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1">
                <h2 className="text-[40px] text-center md:text-left font-semibold text-primary">
                    {entry?.fields?.title}
                </h2>
                <div className="hidden md:block">
                    <Image
                        src={`https://${entry?.fields?.image?.fields?.file?.url}`}
                        alt={entry?.fields?.image?.fields?.title || "stepperHeroImg"}
                        height={500}
                        width={500}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="flex-1">
                <div className="relative">
                    {initialSteps.map((step: any, index: number) => {
                        const isActive = index < activeIndex;
                        const isLast = index === initialSteps.length - 1;

                        return (
                            <div
                                key={index}
                                className={`relative pl-10 pb-10 -mt-3 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-30"}`}
                            >
                                {!isLast && (
                                    <div className={`step-line ${isActive ? "is-filled" : "is-empty"}`} />
                                )}
                                <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full z-10 transition-all duration-500 ${isActive ? 'bg-[#B9194A] scale-110' : 'bg-grey-300'}`} />

                                <div className="flex flex-col gap-1">
                                    <span className="text-xl font-semibold uppercase text-grey-200">
                                        STEP {step.fields.stepNumber}
                                    </span>
                                    <h3 className="text-[22px] md:text-[25px] text-primary font-medium">
                                        {step.fields.title}
                                    </h3>
                                    <div className={`grid transition-all duration-500`}>
                                        <p className="overflow-hidden text-xl text-primary font-normal">
                                            {step.fields.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}