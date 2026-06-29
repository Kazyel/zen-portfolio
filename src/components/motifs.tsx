type KanjiProps = { char: string; className?: string };

export function Kanji({ char, className }: KanjiProps) {
    return (
        <svg aria-hidden="true" viewBox="0 0 100 100" className={className}>
            <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="94"
                fontWeight={700}
                fontFamily="ui-serif, 'Hiragino Mincho ProN', 'Yu Mincho', 'Noto Serif JP', serif"
                fill="currentColor"
                rotate={12}
            >
                {char}
            </text>
        </svg>
    );
}
