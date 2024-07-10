import React from 'react';

type BannerProps = {
  item: string;
};

export function Banner({ item }: BannerProps) {
  return <div className="banner">{item}</div>;
}
