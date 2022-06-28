// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 60,
      disabled: true,
      href: 'https://github.com/umijs/dumi',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      name: '锺艳',
      owner: 'Martin',
      desc: '后什共条计机共家务形查白知没研。',
      callNo: 68,
      status: 63,
      updatedAt: 'i4K068',
      createdAt: 'crCoC',
      progress: 62,
    });
  },
};
