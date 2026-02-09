import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
    return (
        <div
            className={twMerge(
                'bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300',
                hover && 'hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
