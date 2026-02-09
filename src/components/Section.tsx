import { twMerge } from 'tailwind-merge';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    id?: string;
}

export function Section({ className, id, children, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={twMerge('py-20 md:py-32 relative overflow-hidden', className)}
            {...props}
        >
            {children}
        </section>
    );
}
