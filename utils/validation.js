exports.validatePercentageSplit = (participants) => {
  const totalPercentage = participants.reduce(
    (acc, participant) => acc + participant.owed_amount,
    0
  );
  return totalPercentage === 100;
};
