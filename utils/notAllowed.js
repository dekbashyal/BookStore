export const notAllowed = (req, res) => {
  return res.status(405).json({
    status: "error",
    data: "Method Not Allowed",
  });
};
