interface CalculateTimeDiff {
  isNew: boolean;
  timeDifferenceFromNow: number;
}

const calculateTimeDiffIsItNew = (
  createdAt: Date,
  newUntilDays: number,
): CalculateTimeDiff => {
  const timeDifferenceFromNow = new Date().getDate() - createdAt.getDate();
  const isNew = timeDifferenceFromNow < newUntilDays;

  return { isNew, timeDifferenceFromNow };
};

export default calculateTimeDiffIsItNew;
