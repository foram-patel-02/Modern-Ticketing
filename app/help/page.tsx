import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

import FormSearch from './components/FormSearch';

const Page: React.FC = () => (
  <Master>
    <Section className='black-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gradient' text='Help' />
          <p className='white'>Welcome to our help center. How can we help today?</p>

          <div className='top-search'>
            <FormSearch />
          </div>
          <div className='help-top flex flex-v-center flex-space-around'>
            <div className='center'>
              <Heading type={5} color='gradient' text='About us' />
              <Link href='/help/answer/1' className='purple'>
                {/* <span className='material-symbols-outlined none'>star</span> */}
                What is ticketing?
              </Link>
            </div>
            <div className='center'>
              <Heading type={5} color='gradient' text='Account' />
              <Link href='/help/answer/1' className='purple'>
                {/* <span className='material-symbols-outlined none'>star</span> */}
                How to sign in?
              </Link>
            </div>
            <div className='center'>
              <Heading type={5} color='gradient' text='Using system' />
              <Link href='/help/answer/1' className='purple'>
                {/* <span className='material-symbols-outlined none'>star</span> */}
                How can I get my tickets?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='black-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={2} color='gradient' text='Featured answers' />
          <div className='help-bottom flex flex-space-around padding-top padding-bottom'>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='white' text='About us' />
                <Link href='/help/answer/1' className='purple'>
                  What is ticketing?
                </Link>
                <Link href='/help/answer/1' className='purple'>
                  What is ticketing?
                </Link>
              </div>

              <ButtonLink
                color='gradient-filled'
                rightIcon='arrow_forward'
                text='See all'
                url='help/category/1'
              />
            </div>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='white' text='Account' />
                <Link href='/help/answer/1' className='purple'>
                  How to sign in?
                </Link>
                <Link href='/help/answer/1' className='purple'>
                  What is ticketing?
                </Link>
              </div>

              <ButtonLink
                color='gradient-filled'
                rightIcon='arrow_forward'
                text='See all'
                url='help/category/1'
              />
            </div>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='white' text='Using system' />
                <Link href='/help/answer/1' className='purple'>
                  How can I get my tickets?
                </Link>
              </div>

              <ButtonLink
                color='gradient-filled'
                rightIcon='arrow_forward'
                text='See all'
                url='help/category/1'
              />
            </div>
          </div>

          <div className='button-container'>
            <ButtonLink
              color='gradient-filled'
              rightIcon='arrow_forward'
              text='See all answers'
              url='help/answers'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section className='black-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={3} color='gradient' text='Any questions?' />
          <p className='white'>
            If you can&apos;t find what you are looking for or need further support please contact
            us and we will be happy to help.
          </p>

          <div className='button-container'>
            <ButtonLink
              color='gradient-filled'
              rightIcon='arrow_forward'
              text='Contact us'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Help';
const canonical = 'https://modern-ticketing.com/help';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'modern ticketing',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
