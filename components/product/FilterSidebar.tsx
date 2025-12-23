"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FILTERS = [
    {
        id: "size",
        name: "Size",
        options: [
            { value: "xs", label: "XS" },
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
        ],
    },
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
        ],
    },
];

export function FilterSidebar() {
    const [openSection, setOpenSection] = useState<string | null>("size");

    return (
        <div className="hidden lg:block lg:w-64 lg:flex-none">
            <form className="space-y-4">
                {FILTERS.map((section) => (
                    <div key={section.id} className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-900 mb-2">{section.name}</h3>
                        <div className="space-y-2">
                            {section.options.map((option) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        id={`filter-${section.id}-${option.value}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-navy-900 focus:ring-navy-900"
                                    />
                                    <label
                                        htmlFor={`filter-${section.id}-${option.value}`}
                                        className="ml-3 text-sm text-gray-600"
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </form>
        </div>
    );
}
