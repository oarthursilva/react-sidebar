// @ts-nocheck
import { Button } from 'src/components/commons/Button';
import { InputBase, InputWrapper } from './styles';

export function SearchField({ placeholder, name, hidden, value, onChange, ...props }) {
  const isHidden = Boolean(hidden);
  const position = hidden ? 'relative' : 'absolute';
  const visibility = hidden ? 'hidden' : 'normal';

  return (
    <InputWrapper>
      <Button
        position={position}
        color="primary.main"
        icon="search"
        fullWidth={isHidden}
      />

      <InputBase
        placeholder={placeholder}
        type='text'
        color="primary.light"
        onChange={onChange}
        variant="paragraph1"
        value={value}
        visibility={visibility}
        {...props}
      />
    </InputWrapper>
  );
}
