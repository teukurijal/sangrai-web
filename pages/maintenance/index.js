import Head from 'next/head';
import Link from 'next/link';

const tokopediaLink = 'https://tokopedia.com/kelapasangrai';
const shopeeLink = 'https://shopee.com/kelapasangrai';

const MaintenancePage = () => {
  return (
    <>
      <Head>
        <title>Under Maintenance | Your App Name</title>
      </Head>
      <div className='container'>
        <h1>Sorry, we're under maintenance!</h1>
        <p>We're currently performing some necessary maintenance on our website. We apologize for any inconvenience this may cause.</p>
        <p>Please check back later. Thank you for your patience!</p>
        <h1>Visit Our store</h1>
        <h1><Link target="_blank" href={tokopediaLink}>Tokopedia</Link></h1>
        <h1><Link target="_blank" href={shopeeLink}>Shopee</Link></h1>
      </div>
      <style>{`
        .container {
          text-align: center;
          padding-top: 100px;
        }
      `}</style>
    </>
  );
};

export default MaintenancePage;
