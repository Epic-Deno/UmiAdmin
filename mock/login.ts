/*
 * @Description: 登录的mock
 * @Author: Pony
 * @Date: 2021-08-10 22:36:15
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-10 22:42:38
 */
import { Request, Response } from 'express';

// 退出登录
const getLogout = (req: Request, res: Response) => {
    return res.json({
        status: 'ok',
        msg: '成功'
    });
}


export default {
    'POST  /api/login': (req: Request, res: Response) => {
      const { password, username } = req.body;
      if (password === '123456' && username === 'admin') {
        setTimeout(() => {
          res.send({
            status: 'ok',
            currentAuthority: {
              username: 'admin',
              userid: 'abc123efdd',
            },
          });
        }, 1000);
        return;
      }
      if (password === '123456' && username === 'user') {
        res.send({
          status: 'ok',
          currentAuthority: {
            username: 'user',
            userid: 'abc456efdd',
          },
        });
        return;
      }
      res.send({
        status: 'error',
        currentAuthority: 'guest',
      });
    },
    'GET  /api/logout': getLogout,
  };
  