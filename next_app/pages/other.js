import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout header="Other" title="Other page.">
    <p>This is other page.</p>
    <hr />
    <Link href="/"><button>
    &lt;&lt; Back to Top
    </button></Link>
  </Layout>
);

