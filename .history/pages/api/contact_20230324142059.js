// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export handler = (req, res) => {
  console.log(req.body);
  return res.status(400).json({ message: 'Bad Request' })
}
