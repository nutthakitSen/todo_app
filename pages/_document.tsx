import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyles, createStylesServer } from '@mantine/next';

const stylesServer = createStylesServer();

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <ServerStyles html={initialProps.html} server={stylesServer} />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head >
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
