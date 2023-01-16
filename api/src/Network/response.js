exports.succes = (res, status, succes) => {
  res.status(status || 200).send({
    succes,
  });
};

exports.error = (res, status, error) => {
  res.status(status || 404).send({
    error,
  });
};
