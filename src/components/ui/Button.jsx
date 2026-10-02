import Magnetic from '../animation/Magnetic'

export default function Button({ href, variant = 'primary', children, ...rest }) {
  return <Magnetic><a href={href} className={`btn btn-${variant}`} {...rest}>{children}</a></Magnetic>
}
