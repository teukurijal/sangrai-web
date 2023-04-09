import Head from 'next/head';
import Link from 'next/link';

import WhatsAppButton from '../../src/components/button/whatsapp';
import createMeta from '../../src/components/meta';

const tokopediaLink = 'https://tokopedia.com/kelapasangrai';
const shopeeLink = 'https://shopee.com/kelapasangrai';

const MaintenancePage = () => {
  return (
    <>
      <Head>
        {createMeta({
          title: 'Karan Kelapa Gongseng | Kelapa Sangrai ',
          description: 'Distributor Kelapa Gongseng | Grosir dan Eceran'
        })}
      </Head>
      <div className='container'>
        <h1>Website kami sedang dalam pemeliharaan!</h1>
        <p>Saat ini kami sedang melakukan beberapa pemeliharaan yang diperlukan di situs web kami. Kami mohon maaf atas ketidaknyamanannya</p>
        <p>Terima kasih atas kesabaran Anda!</p>
        <h1>👇Kunjungi Toko Kami👇</h1>
        <h1><Link target="_blank" href={tokopediaLink}>Tokopedia</Link></h1>
        <h1><Link target="_blank" href={shopeeLink}>Shopee</Link></h1>
        <WhatsAppButton />
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
