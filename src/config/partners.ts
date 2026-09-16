export const partnerLogos = Array.from({ length: 57 }, (_, index) => index + 1)
  .filter((number) => number !== 44)
  .map((number) => {
    const extension = number >= 38 && number <= 43 ? 'jpeg' : 'png';

    return `/logos/image${number}.${extension}`;
  });
