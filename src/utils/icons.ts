export const categoryIcons: Record<string, string> = {
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'go': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'sql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    'dsa': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-plain.svg',
    'data structures & algorithms': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-plain.svg',
    'system design': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/moleculer/moleculer-original.svg',
    'system-design': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/moleculer/moleculer-original.svg',
    'nestjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
};

export const getCategoryIcon = (category: string) => {
    if (!category) return null;
    return categoryIcons[category.toLowerCase()] || null;
};
