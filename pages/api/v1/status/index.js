function status(request, response) {
  response
    .status(200)
    .json({ chave: "Cristo vive, Ele é a solução para seus problemas." });
}

export default status;
