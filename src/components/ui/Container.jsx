export default function Container({ as = 'div', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
