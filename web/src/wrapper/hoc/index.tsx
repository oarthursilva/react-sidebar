import AppGlobalProvider from "../provider";
import AppPageWrapper from '..';

export function appHOC(PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} }) {
  return (props) => (
    <AppGlobalProvider>
      <AppPageWrapper
        {...pageWrapperProps}
      >
        <PageComponent {...props} />
      </AppPageWrapper>
    </AppGlobalProvider>
  )

}
