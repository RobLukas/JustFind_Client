interface CalculateTimeDiff {
  isNew: boolean;
  timeDifferenceInDays: number;
}

const calculateTimeDiffIsItNew = (
  createdAt: Date,
  newUntilDays: number,
): CalculateTimeDiff => {
  const timeDifferenceInMs = new Date().getTime() - createdAt.getTime();
  const timeDifferenceInDays = Math.floor(
    timeDifferenceInMs / (1000 * 60 * 60 * 24),
  );
  const isNew = timeDifferenceInDays < newUntilDays;

  return { isNew, timeDifferenceInDays };
};

export default calculateTimeDiffIsItNew;
