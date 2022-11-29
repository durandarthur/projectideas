import { NextApiRequest, NextApiResponse } from "next";
import { Knex, knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.host,
    port: parseInt(process.env.port || ""),
    user: process.env.user,
    database: process.env.database,
  },
  //asyncStackTraces: true,
  //debug: true,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.body.title;
  const text = req.body.text;
  const tags = req.body.tags;
  const db = knex(config);

  try {
    // insert returns post ids
    const ids = await db("post").insert({
      posttitle: title,
      posttext: text,
      posttags: tags,
    });
    res.status(200).json(ids);
  } catch (err) {
    res.status(500).json({
      message: "Error when creating new post",
      error: err,
    });
  } finally {
    await db.destroy();
  }

  // do a form validation clientsides
}
