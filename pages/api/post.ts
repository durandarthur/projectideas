import { NextApiRequest, NextApiResponse } from "next";
import { Knex, knex } from "knex";

const config: Knex.Config = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        database: "projectideas",
    },
    //asyncStackTraces: true,
    //debug: true,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const title = req.body.title;
    const text = req.body.text;
    const tags = req.body.tags;
    const db = knex(config);

    db("post")
        .insert({
            posttitle: title,
            posttext: text,
            posttags: tags,
        })
        .then(() => {
            res.statusCode = 200;
            return res.statusCode;
        })
        .catch((err) => { 
            res.statusCode = 400;
            console.error(err);
            return res.statusCode;
         })
        .finally(() => db.destroy());

    // do a catch to see if error, return different status depending or error
    // do a form validation clientsides
  }