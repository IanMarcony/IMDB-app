import { Request, Response } from "express";
import connection from "../../database/connection";
import bcryptjs from "bcryptjs"; //criptografa as senhas
import { generateToken } from "./utils/token";

export async function index(req: Request, res: Response) {
  const response = await connection("users");

  const users = response.map(item => {
    item.password = undefined;
    return item;
  });

  return res.json(users);
}

export async function create(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (await connection("users").where("email", email).first())
    return res.status(400).send({ error: "User already exists" });

  const hash = await bcryptjs.hash(password, 10); //encriptação da senha

  const userToDB = { name, email, password: hash }; //salva a senha encriptada

  const [id] = await connection("users").insert(userToDB);

  const user = { id, name, email };

  const token = generateToken({ id: user.id });

  return res.status(201).json({ user, token });
}

export async function auth(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await connection("users").where("email", email).first();

    if (!(await bcryptjs.compare(password, user.password))) {
      //verifica se a senha existe no banco de dados
      return res.status(404).send({ error: "error: Invalid password" });
    }
    user.password = undefined;

    const token = generateToken({ id: user.id });

    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(404).send({ error: "error: User not found" });
  }
}
