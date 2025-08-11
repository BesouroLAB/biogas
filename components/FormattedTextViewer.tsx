import React from 'react';

interface FormattedTextViewerProps {
  text: string;
  keywords: string[];
}

export const FormattedTextViewer: React.FC<FormattedTextViewerProps> = ({ text, keywords }) => {
    if (!text) {
        return null;
    }

    const highlightLine = (line: string) => {
        if (!keywords || keywords.length === 0) {
            return line;
        }

        // The regex includes a capturing group to ensure the delimiters (keywords) are included in the split array.
        // It also uses word boundaries `\b` to match whole words only.
        const highlightingRegex = new RegExp(`\\b(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
        
        const parts = line.split(highlightingRegex);
        
        return parts.map((part, index) => {
            // Because of the capturing group in the regex, the matched keywords will be at odd indices.
            if (index % 2 === 1) { 
                return <strong key={index} className="text-teal-300 font-semibold bg-teal-800/40 px-1.5 py-1 rounded-md">{part}</strong>;
            }
            return part;
        });
    };

    // Split text into paragraphs by double newlines
    const paragraphs = text.split('\n\n');

    return (
        <div className="prose prose-lg prose-invert max-w-none text-gray-300">
            {paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>
                    {paragraph.split('\n').map((line, lIndex, arr) => (
                        <React.Fragment key={lIndex}>
                            {highlightLine(line)}
                            {lIndex < arr.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            ))}
        </div>
    );
};
