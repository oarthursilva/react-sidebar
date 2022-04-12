import { propToStyle } from './index';

describe('propToStyle()', () => {
  describe('when propToStyle receives a sample argument', () => {
    test('and it is a string, should convert to style', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ textAlign: 'center' });
    });

    test('and it is a number, should convert to style', () => {
      const propToStyleResult = propToStyle('flex');
      // <Box flex={1}" />
      const componentProps = { flex: 1 };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when propToStyle receives an argument with breakpoint', () => {
    test('render only a single small breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign={{ xs: 'center' }} />
      const componentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });

    test('render only a single extra large breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign={{ lg: 'center' }} />
      const componentProps = { textAlign: { xl: 'center' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });

  describe('when propToStyle receives an argument with breakpoints', () => {
    test('render multiple breakpoints resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign={{ sm: 'left', md: 'center', lg: 'right' }} />
      const componentProps = { textAlign: { sm: 'left', md: 'center', lg: 'right' } };
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
