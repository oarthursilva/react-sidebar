import { IconBase } from './styles';

export default function Icon({
  name, ...props
}) {
  return (
    <IconBase
      className={`bi bi-${name}`}
      {...props}>
    </IconBase>
  );
}
