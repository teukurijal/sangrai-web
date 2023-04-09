import Head from 'next/head';
import { useRouter } from 'next/router';
import createMeta from '../src/components/meta';
import styles from '../styles/Home.module.css';
import Maintenance from './maintenance';

export const maintenanceStatus = true;

export default function Home() {
  if (maintenanceStatus) return <Maintenance />;
  
  return (
    <div className={styles.container}>
      <Head>
        {createMeta({
            title: 'Karan Kelapa Gongseng | Kelapa Sangrai ',
            description: 'Distributor Kelapa Gongseng | Grosir dan Eceran'
        })}
      </Head>
    </div>
  )
}
