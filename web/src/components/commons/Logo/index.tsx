import Image from 'src/components/foundation/Image';
import { LogoWrapper } from './styles';

export default function Logo({ src, alt, ...props }) {
  return (
    <LogoWrapper
      {...props}
    >
      <Image
        src={src}
        alt={alt}
      />
    </LogoWrapper>
  );
}
