import { CUSTOM_ICON } from '@/app/constants/customIcon.constants';
import CustomIconProvider from '@/app/providers/CustomIconProvider';
import React from 'react';

const Header = () => {
  return (
    <div className={'container mx-auto'}>
      <div className={'flex justify-between items-center w-full h-24'}>
        <div className={'flex h-12'}>
          <CustomIconProvider icon={CUSTOM_ICON.LOGO} iconClassName={'text-black'} width={200}/>
        </div>
        <nav className="flex flex-row">
          <ul className="flex flex-row w-full gap-6">
            <li><a href="">OUR WORK</a></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </nav>
        <div>
          <div className={'flex flex-row items-center gap-12'}>
            <ul className={'flex flex-row gap-2'}>
              <li><a href=""><CustomIconProvider icon={CUSTOM_ICON.THREADS} iconClassName={'text-black'}/></a></li>
              <li><a href=""><CustomIconProvider icon={CUSTOM_ICON.TWITTER} iconClassName={'text-black'}/></a></li>
              <li><a href=""><CustomIconProvider icon={CUSTOM_ICON.INSTAGRAM} iconClassName={'text-black'}/></a></li>
              <li><a href=""><CustomIconProvider icon={CUSTOM_ICON.LINKEDIN} iconClassName={'text-black'}/></a></li>
            </ul>
            <button className={'text-black px-4 py-2 rounded-full text-sm bg-orange-500'}>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
