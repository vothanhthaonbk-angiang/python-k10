import React from 'react';
import { DEFAULT_SCHOOL_BANNER_PATH } from '../assets/schoolDefaultBg';

interface SchoolBannerProps {
  bannerImage?: string;
}

export const SchoolBanner: React.FC<SchoolBannerProps> = ({
  bannerImage = DEFAULT_SCHOOL_BANNER_PATH,
}) => {
  return (
    <div className="w-full bg-[#07244a] border-b border-[#13498a] relative select-none shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 py-0 sm:py-2">
        <div className="relative overflow-hidden sm:rounded-2xl border-y sm:border border-sky-400/30 shadow-xl bg-slate-900">
          {/* Official Banner Image */}
          <img
            src={bannerImage}
            alt="Banner Trường THPT Nguyễn Bỉnh Khiêm - An Giang"
            className="w-full h-auto max-h-36 sm:max-h-48 md:max-h-56 object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

