import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary active:bg-primary/90 md:hover:bg-primary/90 text-white shadow-lg shadow-primary/25',
        secondary: 'bg-secondary active:bg-secondary/90 md:hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25',
        outline: 'border border-gray-700 bg-transparent active:bg-gray-800 md:hover:bg-gray-800 text-white',
        ghost: 'bg-transparent active:bg-gray-800 md:hover:bg-gray-800 text-white',
    };

    const sizes = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    return (
        <button
            className={twMerge(
                baseStyles,
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
