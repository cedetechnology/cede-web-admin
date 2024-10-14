import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import Button from '@/components/buttons/Button';
import Dropdown from '@/components/dropdown';
import { PaddedContainer } from '@/components/lib';
import ActiveLink from '@/components/links/ActiveLink';

import ExchangeRateDisplay from '@/app/(authenticated-layout)/transactions/_components/ExchangeRateDisplay';
import ExchangeRateMarquee from '@/app/(authenticated-layout)/transactions/_components/ExchangeRatesMarquee';
import TransactionsAreaChartContainer from '@/app/(authenticated-layout)/transactions/_components/TransactionsAreaChartContainer';

const transactionsLinks = [
  { route: '', label: 'Transaction History', index: true },
  {
    route: 'resolved',
    label: 'Resolved History',
    index: false,
  },
];

export default function TransactionsLayout({ children }: PropsWithChildren) {
  return (
    <PaddedContainer isScrollable className='!p-0'>
      <div className='flex items-center pr-5 gap-4'>
        <ExchangeRateMarquee />
        <Button variant='ghost' className='w-10 h-10 !p-0'>
          <Image src='/svg/rates-icon.svg' alt='rates' width={40} height={40} />
        </Button>
      </div>

      <PaddedContainer>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <p className='font-semibold text-2xl'>Exchange rates</p>
            <p className='text-sm text-light-grey'>Updated 25 mins ago</p>
          </div>
          <Link
            href='/transactions/rates'
            className='py-[10px] px-10 rounded-[8px] bg-primary-blue text-white'
          >
            Manage
          </Link>
        </div>

        <div className='my-8'>
          <ExchangeRateDisplay />
        </div>

        <div className='flex items-start'>
          <p className='font-semibold text-2xl'>Transactions</p>
          <div className='w-fit -mt-3'>
            <Dropdown
              paramKey='accountType'
              defaultValue='individual'
              label='Individual'
              options={[
                { label: 'Individual', value: 'Individual' },
                { label: 'Business', value: 'Business' },
              ]}
              dropdownButtonClassName='border-none text-sm font-medium'
            />
          </div>
        </div>

        <div className='my-8 grid grid-cols-2 lg:grid-cols-3 gap-6'>
          <TransactionsAreaChartContainer
            title='Total transactions'
            amount='$12,520'
            chartLineColour='#F0E5FF'
            chartDotColour='#6F00FF'
          />
          <TransactionsAreaChartContainer
            title='Total schedule transactions'
            amount='$12,520'
            chartLineColour='#F0E5FF'
            chartDotColour='#6F00FF'
          />
          <TransactionsAreaChartContainer
            title='Total recurrent transactions'
            amount='$12,520'
            chartLineColour='#FCE3EF'
            chartDotColour='#EA157F'
          />
        </div>

        <div className='flex justify-between items-start'>
          <div className='border-primary-grey mb-8 w-fit flex items-center gap-6 border-b-2'>
            {transactionsLinks.map((el) => (
              <ActiveLink
                key={el.label}
                href={`/transactions${el.route && `/${el.route}`}`}
                className='-mb-[2px] cursor-pointer border-b-2 text-light-grey border-transparent p-3 font-medium'
                activeClassName='border-primary-pink text-primary-black'
                index={el.index}
              >
                {el.label}
              </ActiveLink>
            ))}
          </div>
          <Link
            href='/transactions/history'
            className='font-semibold font-figtree text-sm text-primary'
          >
            SEE MORE
          </Link>
        </div>

        {children}
      </PaddedContainer>
    </PaddedContainer>
  );
}
