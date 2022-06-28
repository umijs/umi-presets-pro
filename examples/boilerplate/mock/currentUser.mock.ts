// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '袁杰',
      avatar: 'https://avatars0.githubusercontent.com/u/507615?s=40&v=4',
      userid: 'D12e279D-f9Aa-d945-b16D-3fB5c9F31c2f',
      email: 'o.psvxbns@ejnhl.no',
      signature: '照术走式半斗走下派感养说交。',
      title: '权达真进边什也中八整名保育。',
      group: '前端 6 组',
      tags: [
        { key: 1, label: '川妹子' },
        { key: 2, label: '专注设计' },
        { key: 3, label: '名望程序员' },
        { key: 4, label: '专注设计' },
        { key: 5, label: '算法工程师' },
        { key: 6, label: '大咖' },
        { key: 7, label: 'IT 互联网' },
        { key: 8, label: '阳光少年' },
        { key: 9, label: '程序员' },
        { key: 10, label: '健身达人' },
        { key: 11, label: '健身达人' },
        { key: 12, label: '程序员' },
        { key: 13, label: '大长腿' },
      ],
      notifyCount: 89,
      unreadCount: 93,
      country: '印度尼西亚',
      access: '处新始相情转处式原种则据么开何率干。',
      geographic: {
        province: { label: '甘肃省', key: 14 },
        city: { label: '离岛', key: 15 },
      },
      address: '西藏自治区 那曲地区 申扎县',
      phone: '11272263323',
    });
  },
};
