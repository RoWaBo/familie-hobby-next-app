import Link from 'next/link'

type MyLinkProps = {
    href: string
    className?: string
}

const MyLink: React.FC<MyLinkProps> = ({ href, children, className, ...props }) => {
    return (
        <Link
            href={href}
            {...props}
        >
            <a
                className={`${className}`}>
                {children}
            </a>
        </Link>
    );
}

export default MyLink;