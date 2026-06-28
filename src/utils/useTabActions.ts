import React from 'react';

export const useTabActions = (
  tab: string,
  setTab: (value: string) => void
) => {
  return (items: {
    key: string;
    label: string;
    icon?: React.ReactNode;
    primary?: boolean;
  }[]) =>
    items.map((item) => ({
      ...item,
      active: tab === item.key,
      onClick: () => setTab(item.key),
    }));
};