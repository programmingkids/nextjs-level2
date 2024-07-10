export type Comment = {
  id: number;
  name: string;
  nickname: string;
  body: string;
  bgcolor: string;
};

export const comments: Comment[] = [
  {
    id: 1,
    name: "聖徳太子",
    nickname: "聖",
    body: "同時にいろんな意見が聞こえることってメチャクチャすごくないですか。7人くらいは同時可能",
    bgcolor: "bg-green-300",
  },
  {
    id: 2,
    name: "紫式部",
    nickname: "式部",
    body: "この度、新しい小説を出版することになりました。歴史に残る作品に慣れたら嬉しいです。皆様、ぜひご期待ください",
    bgcolor: "bg-purple-300",
  },
  {
    id: 3,
    name: "源頼朝",
    nickname: "頼朝",
    body: "幕府作ります。御家人の皆さん、大集合です。鎌倉NOW",
    bgcolor: "bg-blue-300",
  },
  {
    id: 4,
    name: "平清盛",
    nickname: "清",
    body: "特におごっていないですよ。みんなが言うほどおごっていないです。そこまで言われるかな",
    bgcolor: "bg-rose-300",
  },
  {
    id: 5,
    name: "千利休",
    nickname: "千",
    body: "近いうちにお茶しましょう",
    bgcolor: "bg-emerald-300",
  },
  {
    id: 6,
    name: "松尾芭蕉",
    nickname: "まつ",
    body: "最近、駅前が再開発されていますが、道が細いです。こんなに道が細くなくてもよいと思うけどな",
    bgcolor: "bg-orange-300",
  },
  {
    id: 7,
    name: "正岡子規",
    nickname: "子規",
    body: "次の週末に法隆寺で出版記念パーティー握手会を開催します。",
    bgcolor: "bg-red-300",
  },
  {
    id: 8,
    name: "卑弥呼",
    nickname: "ひ",
    body: "都市計画を考えています。九州にするか、近畿にするか、みなさんの案を募集します。",
    bgcolor: "bg-pink-300",
  },
];
