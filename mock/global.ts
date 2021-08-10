/*
 * @Description: 全局的一些mock
 * @Author: Pony
 * @Date: 2021-08-10 22:55:17
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-10 22:55:56
 */
import { Request, Response } from 'express';

export default {
  'POST  /api/userInfo': (req: Request, res: Response) => {
    const { userid } = req.body;
    if (userid) {
      res.send({
        status: 'ok',
        data: {
          username: 'admin',
          userid: 'abc456efdd',
        },
      });
      return;
    }
    res.send({
      status: 'error',
      data: {
        username: 'guest',
        userid: 'sdfsdfewfds',
      },
    });
  },
};