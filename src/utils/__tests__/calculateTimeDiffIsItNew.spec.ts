import calculateTimeDiffIsItNew from '@utils/calculateTimeDiffIsItNew';

describe('calculateTimeDiffIsItNew', () => {
  it('should return isNew true and timeDifferenceFromNow 0 days', () => {
    expect(calculateTimeDiffIsItNew(new Date(), 5)).toEqual({
      isNew: true,
      timeDifferenceFromNow: 0,
    });
  });
  it('should return isNew false and timeDifferenceFromNow 6 days', () => {
    const date = new Date();
    const dateSixDaysAgo = date.setDate(date.getDate() - 6);

    expect(calculateTimeDiffIsItNew(new Date(dateSixDaysAgo), 5)).toEqual({
      isNew: false,
      timeDifferenceFromNow: 6,
    });
  });
});
