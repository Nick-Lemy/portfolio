export const SocialMedia = ({className, src, href}) => {
    return (
        <>
        <a className={className} href={href}>
            <img  className="w-full" src={src} alt="" />
        </a>
        </>
    )
}