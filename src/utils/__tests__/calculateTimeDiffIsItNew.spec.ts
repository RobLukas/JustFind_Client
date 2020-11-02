import calculateTimeDiffIsItNew from 'utils/calculateTimeDiffIsItNew';

describe('calculateTimeDiffIsItNew', () => {
  it('should return isNew true and timeDifferenceInDays 0 days', () => {
    expect(calculateTimeDiffIsItNew(new Date(), 5)).toEqual({
      isNew: true,
      timeDifferenceInDays: 0,
    });
  });
  it('should return isNew false and timeDifferenceInDays 6 days', () => {
    const date = new Date();
    const dateSixDaysAgo = date.setDate(date.getDate() - 6);

    expect(calculateTimeDiffIsItNew(new Date(dateSixDaysAgo), 5)).toEqual({
      isNew: false,
      timeDifferenceInDays: 6,
    });
  });
});
