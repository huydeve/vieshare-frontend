import "../src/styles/globals.css";
import { AppPropsWithLayout } from "../src/models";
import { EmptyLayout } from "../src/components/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
