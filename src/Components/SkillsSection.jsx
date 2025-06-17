import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
    { name: "C++", level: 80, category: "coding languages" },
    { name: "Python", level: 80, category: "coding languages" },
    { name: "C# .NET", level: 75, category: "coding languages" },
    { name: "C", level: 70, category: "coding languages" },
    { name: "Java", level: 65, category: "coding languages" },

    { name: "HTML", level: 85, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 70, category: "frontend" },

    { name: "Excel", level: 75, category: "tools" },
    { name: "MATLAB", level: 70, category: "tools" },
    { name: "Jupyter", level: 70, category: "tools" },
    { name: "VBA", level: 60, category: "tools" },
    { name: "CAD", level: 60, category: "tools" },
    { name: "SOLIDWORKS", level: 60, category: "tools" },

    { name: "Data Analysis", level: 75, category: "data" },
    { name: "Data Science", level: 70, category: "data" },
    { name: "Statistics", level: 70, category: "data" },
    { name: "R", level: 45, category: "data" },

    { name: "OpenGL", level: 50, category: "graphics" },
    { name: "Embedded", level: 75, category: "hardware" },
    { name: "Electronics", level: 70, category: "hardware" },
    { name: "OOP", level: 60, category: "concepts" },
    { name: "XML", level: 45, category: "other" }
];

const categories = ["all", "coding languages", "frontend", "tools", "data", "graphics", "hardware", "concepts", "other"];



export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills= skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};