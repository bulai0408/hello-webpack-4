export const formatCount = (count: number): number | string => {
  const formatTenThousand = Math.floor(count / 10000);
  if (count < 0) {
    return 0;
  } else if (formatTenThousand < 10 && count > 0) {
    return count;
  } else if (formatTenThousand >= 10 && formatTenThousand < 10000) {
    return `${formatTenThousand}万`;
  } else {
    return `${formatTenThousand / 10000}亿`;
  }
};
